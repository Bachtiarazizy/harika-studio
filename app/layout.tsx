import { Bebas_Neue, Manrope } from "next/font/google";
import { Metadata } from "next/types";
import "./globals.css";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

// Local custom font

// Google Fonts
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harika Studio",
  description: "Harika Studio Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={` ${bebasNeue.variable} ${manrope.variable}`}>
      <body data-barba="wrapper">
        <div className="content_container">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
