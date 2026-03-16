import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractorOS",
  description: "Time tracking SaaS for contractors, crews, and small teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
