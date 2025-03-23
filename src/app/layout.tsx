import { Header } from "@/components/semantic/Header";
import { Footer } from "@/components/semantic/Footer";
import { Main } from "@/components/semantic/Main";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AllProviders } from "@/providers/AllProviders";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BurgerMenu } from "@/components/BurgerMenu";

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirror Studio",
  description: "Best Interior Designs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AllProviders>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <ScrollProgress />
          <Header />
          <BurgerMenu />
          <Main>{children}</Main>
          <Footer />
        </body>
      </html>
    </AllProviders>
  );
}
