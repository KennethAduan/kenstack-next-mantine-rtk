import type { Metadata } from "next";

import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import Approviders from "@/services/providers/app";

export const metadata: Metadata = {
  title: "kenstack mantine rtk",
  description: "Created by Kenneth Aduan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Approviders>{children}</Approviders>
      </body>
    </html>
  );
}
