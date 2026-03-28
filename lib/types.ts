export type CommitState = "committed" | "pending" | "ready" | "copied";

export type CommitRecord = {
  id: string;
  hash: string;
  owner: `0x${string}`;
  status: CommitState;
  createdAt: string;
  txHash?: `0x${string}`;
  source: "mock" | "wallet";
};
