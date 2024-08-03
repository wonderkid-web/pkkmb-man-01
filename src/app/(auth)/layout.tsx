import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import Wrapper from "@/components/WrapperAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login PKKMB MAN 01 Medan Pancing",
  description: "Website PKKMB Man 01 Medan Pancing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  );
}
