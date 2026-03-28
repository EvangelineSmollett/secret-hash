import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const origin = new URL(request.url).origin;

  return Response.json({
    accountAssociation: {
      header: "pending",
      payload: "pending",
      signature: "pending"
    },
    frame: {
      version: "1",
      name: "secret-hash",
      homeUrl: origin,
      iconUrl: `${origin}/vault-mark.svg`,
      imageUrl: `${origin}/vault-mark.svg`,
      buttonTitle: "Open Vault",
      splashImageUrl: `${origin}/vault-mark.svg`,
      splashBackgroundColor: "#090C10",
      webhookUrl: `${origin}/api/webhook`
    },
    baseBuilder: {
      status: "pending-builder-code",
      note: "Replace the builder code placeholder in lib/wagmi.ts when the production suffix is available."
    }
  });
}