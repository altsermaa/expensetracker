"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { TitleContextProvider } from "@/components/Context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TitleContextProvider >
        <body className={inter.className}>{children}</body>
      </TitleContextProvider>
    </html>
  );
}
