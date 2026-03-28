"use client";

import { ActionBar } from "@/components/action-bar";
import { VaultHeader } from "@/components/vault-header";
import { VaultSummaryPanel } from "@/components/vault-summary-panel";
import { WalletButton } from "@/components/wallet-button";
import { useCommitRecords } from "@/hooks/use-commit-records";
import { useAccount } from "wagmi";

export default function HomePage() {
  const { address } = useAccount();
  const { records } = useCommitRecords(address);
  const latestRecord = records[0] || null;

  return (
    <div className="page-stack">
      <VaultHeader />

      <section className="panel hero-frame">
        <div className="panel-header">
          <div>
            <div className="eyebrow">Private Vault</div>
            <div style={{ marginTop: 8, fontSize: "1.2rem", fontWeight: 700 }}>Seal hash commitments with a quiet Base flow.</div>
          </div>
          <WalletButton />
        </div>

        <div className="hero-hash">
          {latestRecord?.hash || "No sealed hash in the current vault session."}
        </div>

        <ActionBar
          primaryHref="/commit"
          primaryLabel="Create Commit"
          secondaryHref="/my"
          secondaryLabel="Open Records"
        />
      </section>

      <div className="vault-grid-desktop">
        <VaultSummaryPanel latestRecord={latestRecord} />

        <section className="panel" style={{ padding: 18 }}>
          <div className="eyebrow">State</div>
          <div className="summary-grid" style={{ marginTop: 16 }}>
            <div className="summary-cell">
              <div className="eyebrow">Wallet</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>{address ? "Connected" : "Offline"}</div>
            </div>
            <div className="summary-cell">
              <div className="eyebrow">Ledger Size</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>{records.length}</div>
            </div>
            <div className="summary-cell">
              <div className="eyebrow">Chain</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>Base</div>
            </div>
            <div className="summary-cell">
              <div className="eyebrow">Flow</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>Commit First</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}