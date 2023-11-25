import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Next-Blog-App",
  description: "created by Betelhem Haile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
