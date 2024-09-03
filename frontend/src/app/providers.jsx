"use client";

import { NextUIProvider } from "@nextui-org/react";
import SplashScreen from "@/components/splashscreen";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AdminLayout, UserLayout } from "@/components/layouts";
import MenuBar from "@/components/menu";

export default function Providers({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const splashScreenShown = localStorage.getItem("splashScreenShown");
    if (!splashScreenShown) {
      setShowSplashScreen(true);
    }
  }, []);

  const isAdminRoute = pathname.includes("admin");
  const isHiddenMenu = ["/auth"].includes(pathname) || isAdminRoute;

  return (
    <NextUIProvider>
      {showSplashScreen ? (
        <SplashScreen setShowSplashScreen={setShowSplashScreen} />
      ) : (
        <>
          {!isAdminRoute && !isHiddenMenu && <MenuBar /> }
          {isAdminRoute ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <UserLayout>{children}</UserLayout>
          )}
        </>
      )}
    </NextUIProvider>
  );
}
