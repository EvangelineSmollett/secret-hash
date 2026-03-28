"use client";

import { CommitStatusChip } from "@/components/commit-status-chip";
import { VaultHeader } from "@/components/vault-header";
import { secretHashAddress } from "@/lib/contract";
import { shortenHash } from "@/lib/utils";

export default function StatusPage() {
  return (
    <div className="page-stack">
      <VaultHeader />

      <section className="status-page-grid">
        <div className="panel" style={{ padding: 18 }}>
          <div className="panel-header">
            <div>
              <div className="eyebrow">Integrity</div>
              <div style={{ marginTop: 8, fontSize: "1.2rem", fontWeight: 700 }}>Vault process state</div>
            </div>
            <CommitStatusChip status="ready" />
          </div>
          <div className="summary-grid" style={{ marginTop: 16 }}>
            <div className="summary-cell">
              <div className="eyebrow">Network</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>Base Mainnet</div>
            </div>
            <div className="summary-cell">
              <div className="eyebrow">Contract</div>
              <div className="mono" style={{ marginTop: 8 }}>{shortenHash(secretHashAddress, 10, 8)}</div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: 18 }}>
          <div className="eyebrow">Flow Reserve</div>
          <div style={{ marginTop: 8, fontSize: "1.1rem", fontWeight: 700 }}>Commit, hold, reveal later</div>
          <div className="status-rail" style={{ marginTop: 16 }}>
            <div className="status-step">
              <span>Step 1</span>
              <span className="muted">Submit bytes32 hash</span>
            </div>
            <div className="status-step">
              <span>Step 2</span>
              <span className="muted">Wait for reveal condition</span>
            </div>
            <div className="status-step">
              <span>Step 3</span>
              <span className="muted">Attach reveal module later</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}