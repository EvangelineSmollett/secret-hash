"use client";

import type { CommitRecord } from "@/lib/types";

const STORAGE_KEY = "secret-hash-records";

export function loadStoredRecords(): CommitRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CommitRecord[];
  } catch {
    return [];
  }
}

export function saveStoredRecords(records: CommitRecord[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
