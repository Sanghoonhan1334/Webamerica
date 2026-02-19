import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웹아메리카",
  description: "한국 감성을 이해하는 PM과 글로벌 개발팀이 함께 만드는 웹·앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

