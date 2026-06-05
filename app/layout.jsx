import "./globals.css";
import { Sora, Public_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import { SITE } from "@/lib/site";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.kodaredu.com.br"),
  title: {
    default: "KodarEdu · Plataforma educacional completa e white label para instituições de ensino",
    template: "%s · KodarEdu",
  },
  description: SITE.description,
  keywords: [
    "plataforma educacional white label",
    "simulado ENEM e SAEB por TRI",
    "produção textual com IA",
    "correção de redação com OCR",
    "leitor de gabarito OMR",
    "banco de questões",
    "Assistente IA do Professor",
    "gestão de provas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "KodarEdu",
    title: "KodarEdu · Plataforma educacional completa e white label",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0B1033",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-verde-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
