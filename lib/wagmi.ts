import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base } from "wagmi/chains";
import { BUILDER_CODE, BUILDER_DATA_SUFFIX } from "@/lib/base-attribution";

const baseRpcUrl = process.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org";

// Base Builder Code for ERC-8021 attribution.
// Official docs recommend attaching a dataSuffix so onchain activity can be attributed on base.dev.
// Builder Code: bc_91hdcgfq
void BUILDER_CODE;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected({
      shimDisconnect: true,
    }),
  ],
  transports: {
    [base.id]: http(baseRpcUrl),
  },
  dataSuffix: BUILDER_DATA_SUFFIX,
});