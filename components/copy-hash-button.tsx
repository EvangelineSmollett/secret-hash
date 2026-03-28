"use client";

import { useCopy } from "@/hooks/use-copy";

export function CopyHashButton({ value }: { value: string }) {
  const { copied, copy } = useCopy();

  return (
    <button className={copied ? "button-secondary" : "button-ghost"} onClick={() => copy(value)}>
      {copied ? "Copied" : "Copy Hash"}
    </button>
  );
}
