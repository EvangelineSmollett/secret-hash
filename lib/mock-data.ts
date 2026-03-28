import type { CommitRecord } from "@/lib/types";

export const mockRecords: CommitRecord[] = [
  {
    id: "0125143015-a31d8e4c",
    hash: "0xa31d8e4cb3af4718cfbe22b7dc5dfbc6ffbb68bd41e521ecf885fd0ce7c61810",
    owner: "0x4E2F18dC9d7F6A4f9c6B491B9E9d5d513b0D2057",
    status: "committed",
    createdAt: "2026-03-26T14:30:15.000Z",
    txHash: "0x5b17dc811d43d75f5e1150c7c2804cfd2f2db5c5510e5af3b801f65823e01a12",
    source: "mock",
  },
  {
    id: "0127164202-b5e48c1f",
    hash: "0xb5e48c1f7ac4390a7bcb11fbf027f71f1171e2f9d8df6da1d86650d1e96b53de",
    owner: "0x4E2F18dC9d7F6A4f9c6B491B9E9d5d513b0D2057",
    status: "ready",
    createdAt: "2026-03-27T16:42:02.000Z",
    txHash: "0x71ef08750fb3d7ffd60f69b0f2f6a87525ce0d9d43dc9c8c6f807bc651332921",
    source: "mock",
  },
];
