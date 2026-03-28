import type { NextRequest } from "next/server";
import { BASE_APP_ID, BUILDER_CODE, BUILDER_DATA_SUFFIX } from "@/lib/base-attribution";

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
      appId: BASE_APP_ID,
      builderCode: BUILDER_CODE,
      dataSuffix: BUILDER_DATA_SUFFIX,
      status: "configured"
    }
  });
}