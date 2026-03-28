import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";
import { BASE_APP_ID } from "@/lib/base-attribution";
import { WalletProvider } from "@/providers/wallet-provider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={BASE_APP_ID} />
        <meta name="talentapp:project_verification" content="c3d3cb4c279c0ea327f9a8baf2a0ea1c7618b0f58f0773a9b4da5b5df214113f95959f7ac5cf984a1d66b50373e7fff37eaee6d5dabdff33f132166764f8f8bc" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#090C10" />
        <meta name="description" content="Commit hash records on Base through a quiet private vault interface." />
        <title>secret-hash</title>
      </head>
      <body>
        <WalletProvider>
          <div className="vault-page">
            <main className="app-shell">{children}</main>
            <BottomNav />
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}