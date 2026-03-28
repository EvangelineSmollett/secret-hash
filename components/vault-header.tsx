"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VaultHeader() {
  const pathname = usePathname();
  const label =
    pathname === "/"
      ? "Vault"
      : pathname.startsWith("/commit")
        ? "Commit"
        : pathname.startsWith("/records")
          ? "Record"
          : pathname.startsWith("/my")
            ? "Ledger"
            : "Status";

  return (
    <header className="panel hero-shell">
      <div className="panel-header">
        <div>
          <div className="eyebrow">Secret Hash</div>
          <h1 className="page-title">{label}</h1>
        </div>
        <Link href="/" className="button-ghost" style={{ display: "inline-grid", placeItems: "center", minWidth: 92 }}>
          Vault
        </Link>
      </div>
    </header>
  );
}
