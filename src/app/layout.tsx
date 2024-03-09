import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/theme-provider";
import { SiteHeader } from "~/components/site-header";
import { getServerAuthSession } from "~/server/auth";
import { LoginButton } from "~/components/auth/login-button";
import { HFlex } from "@ui";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tiramisu",
  description: "A simple hospital manager",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {session ? (
            <>
              <SiteHeader />
              <main>{children}</main>
            </>
          ) : (
            <>
              <HFlex className="min-h-screen items-center justify-center">
                <LoginButton />
              </HFlex>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
