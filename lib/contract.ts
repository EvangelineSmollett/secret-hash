export const secretHashAddress = "0xf6076365ff1c2b365743989777da2b2c7c39177d" as const;

export const secretHashAbi = [
  {
    type: "function",
    name: "commit",
    stateMutability: "nonpayable",
    inputs: [{ name: "hash", type: "bytes32" }],
    outputs: [],
  },
  {
    type: "function",
    name: "commits",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ name: "", type: "bytes32" }],
  },
] as const;
