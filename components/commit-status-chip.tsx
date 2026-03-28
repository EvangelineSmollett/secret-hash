import type { CommitState } from "@/lib/types";

const labels: Record<CommitState, string> = {
  committed: "Committed",
  pending: "Pending",
  ready: "Ready",
  copied: "Copied",
};

export function CommitStatusChip({ status }: { status: CommitState | "empty" }) {
  const className = `status-chip status-${status}`;
  const label = status === "empty" ? "No Record" : labels[status];

  return (
    <span className={className}>
      <span className="status-dot" />
      <span>{label}</span>
    </span>
  );
}
