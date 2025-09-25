import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume",
  description:
    "OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历，提升求职竞争力。支持多种模板和个性化设置，无需下载，安全可靠，适合各类求职者使用。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
