"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { shortenHash } from "@/lib/utils";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <button className="button-secondary" onClick={() => disconnect()}>
        {shortenHash(address)} Connected
      </button>
    );
  }

  return (
    <button
      className="button-primary"
      onClick={() => connectors[0] && connect({ connector: connectors[0] })}
      disabled={isPending || connectors.length === 0}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
