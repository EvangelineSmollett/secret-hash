import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base } from "wagmi/chains";

const baseRpcUrl = process.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org";

// TODO: Replace the placeholder below with the production builder code suffix once provided.
// Example target shape:
// const builderCodeSuffix = "?builder=YOUR_BUILDER_CODE";
const builderCodeSuffix = "";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected({
      shimDisconnect: true,
    }),
  ],
  transports: {
    [base.id]: http(`${baseRpcUrl}${builderCodeSuffix}`),
  },
});
