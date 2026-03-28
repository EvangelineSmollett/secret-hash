"use client";

import { useMemo, useState } from "react";
import { useAccount, useReadContract, useSwitchChain, useWriteContract } from "wagmi";
import { CommitStatusChip } from "@/components/commit-status-chip";
import { HashInputField } from "@/components/hash-input-field";
import { secretHashAbi, secretHashAddress } from "@/lib/contract";
import type { CommitRecord } from "@/lib/types";
import { createRecordId, isHexHash, shortenHash } from "@/lib/utils";
import { trackTransaction } from "@/utils/track";

type CommitPanelProps = {
  onCommitted: (record: CommitRecord) => void;
};

export function CommitPanel({ onCommitted }: CommitPanelProps) {
  const { address, chainId, isConnected } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const [hashValue, setHashValue] = useState("");
  const [feedback, setFeedback] = useState("Hash remains sealed until you reveal it.");
  const { writeContractAsync, isPending } = useWriteContract();
  const isValid = useMemo(() => isHexHash(hashValue), [hashValue]);

  const { data: liveCommit, refetch } = useReadContract({
    abi: secretHashAbi,
    address: secretHashAddress,
    functionName: "commits",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });

  async function handleSubmit() {
    if (!address || !isValid) return;

    try {
      if (chainId !== 8453) {
        await switchChainAsync({ chainId: 8453 });
      }

      setFeedback("Submission is being sealed on Base...");
      const txHash = await writeContractAsync({
        abi: secretHashAbi,
        address: secretHashAddress,
        functionName: "commit",
        args: [hashValue as `0x${string}`],
      });

      const createdAt = new Date().toISOString();
      const record: CommitRecord = {
        id: createRecordId(hashValue, createdAt),
        hash: hashValue,
        owner: address,
        status: "committed",
        createdAt,
        txHash,
        source: "wallet",
      };

      onCommitted(record);
      setFeedback("Commit sealed. Record stored and status refreshed.");
      setHashValue("");
      await refetch();
      trackTransaction("app-001", "secret-hash", address, txHash);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Transaction failed.";
      setFeedback(message.includes("User rejected") ? "Wallet request was canceled." : "Commit could not be sealed.");
    }
  }

  return (
    <section className="panel" style={{ padding: 18 }}>
      <div className="panel-header">
        <div>
          <div className="eyebrow">Secure Console</div>
          <div style={{ marginTop: 8, fontSize: "1.18rem", fontWeight: 700 }}>Seal a new commit</div>
        </div>
        <CommitStatusChip status={isPending ? "pending" : "ready"} />
      </div>

      <div style={{ marginTop: 18 }}>
        <HashInputField value={hashValue} onChange={setHashValue} disabled={isPending} />
      </div>

      <div className="summary-grid" style={{ marginTop: 16 }}>
        <div className="summary-cell">
          <div className="eyebrow">Wallet</div>
          <div className="mono" style={{ marginTop: 8 }}>{address ? shortenHash(address, 10, 8) : "Not connected"}</div>
        </div>
        <div className="summary-cell">
          <div className="eyebrow">Live State</div>
          <div className="mono" style={{ marginTop: 8 }}>
            {typeof liveCommit === "string" && liveCommit !== "0x0000000000000000000000000000000000000000000000000000000000000000"
              ? shortenHash(liveCommit, 10, 8)
              : "Empty"}
          </div>
        </div>
      </div>

      <div className="field-shell" style={{ marginTop: 16 }}>
        <div className="field-label">
          <span>Reveal Slot</span>
          <span>Reserved</span>
        </div>
        <div className="muted">Proof reveal flow can attach to this panel later without changing the commit route.</div>
      </div>

      <div className="button-row" style={{ marginTop: 16 }}>
        <button className="button-primary" onClick={handleSubmit} disabled={!isConnected || !isValid || isPending}>
          {isPending ? "Sealing..." : "Submit Commit"}
        </button>
      </div>

      <div className="muted" style={{ marginTop: 14, fontSize: "0.9rem" }}>{feedback}</div>
    </section>
  );
}