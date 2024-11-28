import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import { PrescriptionProvider } from "@/context/PrescriptionContext";
import { AuthProvider } from "@/context/AuthContext";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "+Saúde Digital",
  description:
    "A forma mais prática e segura de gerar, enviar e acessar receitas médicas digitais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <PrescriptionProvider>
          <body className="bg-my-base">{children}</body>
        </PrescriptionProvider>
      </AuthProvider>
    </html>
  );
}
