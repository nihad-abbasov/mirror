import { ScrollProgress } from "@/components/ScrollProgress";
import { AllProviders } from "@/providers/AllProviders";
import { Header } from "@/components/semantic/Header";
import { Footer } from "@/components/semantic/Footer";
import { BurgerMenu } from "@/components/BurgerMenu";
import { Main } from "@/components/semantic/Main";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
// import "antd/dist/reset.css";
import "./globals.css";

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
