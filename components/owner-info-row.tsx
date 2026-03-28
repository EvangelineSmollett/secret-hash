import { shortenHash } from "@/lib/utils";

export function OwnerInfoRow({ owner }: { owner: string }) {
  return (
    <div className="owner-row">
      <div className="summary-cell" style={{ flex: 1 }}>
        <div className="eyebrow">Owner</div>
        <div className="mono" style={{ marginTop: 8 }}>{shortenHash(owner, 10, 8)}</div>
      </div>
    </div>
  );
}
