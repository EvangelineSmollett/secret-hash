"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Vault", iconClass: "icon-vault" },
  { href: "/commit", label: "Commit", iconClass: "icon-commit" },
  { href: "/my", label: "Ledger", iconClass: "icon-ledger" },
  { href: "/status", label: "Status", iconClass: "icon-status" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav__grid">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} className={`nav-link ${isActive ? "nav-link--active" : ""}`}>
              <span className={`icon-line ${item.iconClass}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
