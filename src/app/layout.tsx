import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import QueryProvider from "@/providers/QueryProvider";
import React, {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "DevRank",
    description: "당신의 깃허브 랭킹은?",
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
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}
