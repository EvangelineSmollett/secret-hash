"use client";

import { useState } from "react";

export function useCopy(resetMs = 1800) {
  const [copied, setCopied] = useState(false);

  async function copy(value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), resetMs);
  }

  return { copied, copy };
}
