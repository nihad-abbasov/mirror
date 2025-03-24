"use client";

import { CModal } from "@/components/CModal";
import { ParallaxProvider } from "react-scroll-parallax";

export const AllProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ParallaxProvider>
      {children}
      <CModal />
    </ParallaxProvider>
  );
};
