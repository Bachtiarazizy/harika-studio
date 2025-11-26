import { Bebas_Neue, Manrope } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import NavbarSection from "@/components/home-page/navbar-section";
import HarikaFooter from "@/components/home-page/footer-section";

// Google Fonts
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://harikastudio.com"),

  title: {
    default: "Harika Studio — Jasa Website & Desain Branding Profesional",
    template: "%s | Harika Studio",
  },

  description: "Harika Studio menyediakan jasa pembuatan website profesional, jasa desain logo, brand identity, packaging design, UI/UX, dan layanan creative agency untuk bisnis & UMKM.",
  keywords: ["jasa pembuatan website", "jasa desain logo", "jasa branding", "jasa web design", "jasa UI UX", "creative agency", "studio desain", "jasa website ekspor", "jasa website UMKM", "brand identity", "desain kemasan produk"],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://harikastudio.com",
    siteName: "Harika Studio",
    title: "Harika Studio — Jasa Pembuatan Website & Desain Branding",
    description: "Creative design studio penyedia jasa desain logo, branding, website profesional, packaging design, dan UI/UX untuk bisnis dan UMKM.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harika Studio - Creative Design Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harika Studio — Jasa Pembuatan Website & Desain Branding",
    description: "Harika Studio menyediakan jasa pembuatan website profesional, jasa desain logo, brand identity, packaging design, UI/UX, dan layanan creative agency untuk bisnis & UMKM.",
    images: ["/images/twitter-image.jpg"],
  },

  alternates: {
    canonical: "https://harikastudio.com",
  },

  verification: {
    google: "9WMvp8sdGPUguvUIlHDW8X9H3E3VJwtWBLx3mSwlfJc",
  },
};

// JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Harika Studio",
  url: "https://harikastudio.com",
  description: "Harika Studio menyediakan jasa pembuatan website profesional, jasa desain logo, brand identity, packaging design, UI/UX, dan layanan creative agency untuk bisnis & UMKM.",
  logo: "https://harikastudio.com/images/logo.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body data-barba="wrapper">
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WL646Z7D');
        `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5973S4CX9C" strategy="afterInteractive" />

        <Script id="ga-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5973S4CX9C');
        `}
        </Script>

        {/* JSON-LD */}
        <Script id="schema-json" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* NoScript Fallback */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL646Z7D" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>

        <NavbarSection />
        <Analytics />
        {children}
        <HarikaFooter />
      </body>
    </html>
  );
}
