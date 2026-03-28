"use client";

import { useEffect, useMemo, useState } from "react";
import { mockRecords } from "@/lib/mock-data";
import { loadStoredRecords, saveStoredRecords } from "@/lib/storage";
import type { CommitRecord } from "@/lib/types";

export function useCommitRecords(address?: `0x${string}`) {
  const [storedRecords, setStoredRecords] = useState<CommitRecord[]>([]);

  useEffect(() => {
    setStoredRecords(loadStoredRecords());
  }, []);

  const records = useMemo(() => {
    const merged = [...storedRecords];
    for (const record of mockRecords) {
      if (!merged.some((item) => item.id === record.id)) {
        merged.push(record);
      }
    }

    const scoped = address
      ? merged.filter((record) => record.owner.toLowerCase() === address.toLowerCase())
      : merged;

    return scoped.sort((left, right) => {
      return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
    });
  }, [address, storedRecords]);

  function appendRecord(record: CommitRecord) {
    const allRecords = [record, ...loadStoredRecords().filter((item) => item.id !== record.id)];
    saveStoredRecords(allRecords);
    setStoredRecords(allRecords);
  }

  return {
    records,
    appendRecord,
  };
}
