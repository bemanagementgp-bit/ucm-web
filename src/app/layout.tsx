import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ucmlaplata.com"),
  title: {
    default: "UCM – Unidad de Cuidado Mamario | La Plata y City Bell",
    template: "%s | UCM – Unidad de Cuidado Mamario",
  },
  description:
    "Unidad de Cuidado Mamario. Prevención, diagnóstico, tratamiento y seguimiento especializado de la salud mamaria en La Plata y City Bell.",
  keywords: [
    "unidad de cuidado mamario",
    "mamografía La Plata",
    "mamografía City Bell",
    "ecografía mamaria",
    "mastología",
    "diagnóstico mamario",
    "prevención cáncer de mama",
    "especialistas salud mamaria",
    "biopsia mamaria",
    "intervencionismo mamario",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ucmlaplata.com",
    siteName: "UCM – Unidad de Cuidado Mamario",
    title: "UCM – Unidad de Cuidado Mamario",
    description:
      "Prevención, diagnóstico, tratamiento y seguimiento especializado de la salud mamaria en La Plata y City Bell.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCM – Unidad de Cuidado Mamario",
    description:
      "Prevención, diagnóstico, tratamiento y seguimiento especializado de la salud mamaria.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col text-text-primary">
        {/*
          Framer Motion serializa el estado inicial de las animaciones
          (`opacity:0`) en el HTML estático. Sin JavaScript nunca se dispara la
          transición, así que el contenido quedaría invisible: este respaldo lo
          deja visible de entrada.
        */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important;height:auto!important;overflow:visible!important}`}</style>
        </noscript>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
      </body>
    </html>
  );
}
