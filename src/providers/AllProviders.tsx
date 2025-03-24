"use client";

import { NotificationListener } from "@/components/NotificationListener";
import { ParallaxProvider } from "react-scroll-parallax";
import { CModal } from "@/components/CModal";

export const AllProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ParallaxProvider>
      <NotificationListener />
      {children}
      <CModal />
    </ParallaxProvider>
  );
};
