import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import QueryProvider from "@/providers/QueryProvider";
import {ReactNode} from "react";
import SupabaseProvider from "@/providers/SupabaseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "기술면접 AI",
  description: "AI와 함께하는 기술면접 대비!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
            <SupabaseProvider>
                <div className='container mx-auto'>
                 {children}
                </div>
            </SupabaseProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
