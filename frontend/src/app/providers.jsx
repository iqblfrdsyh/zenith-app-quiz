"use client";
import { NextUIProvider } from "@nextui-org/react";
import SplashScreen from "@/components/splashscreen";
import React, { useState, useEffect } from "react";
import MenuBar from "@/components/layouts/menu";
import { usePathname } from "next/navigation";

export default function Providers({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const router = usePathname();
  const pathname = router;

  useEffect(() => {
    const splashScreenShown = localStorage.getItem("splashScreenShown");
    if (!splashScreenShown) {
      setShowSplashScreen(true);
    }
  }, []);

  const hiddenMenu = [].includes(pathname); //tambahkan pathname nya ke array jika tidak ingin dimunculkan menu

  console.log({ pathname, hiddenMenu });

  return (
    <NextUIProvider>
      {showSplashScreen ? (
        <SplashScreen setShowSplashScreen={setShowSplashScreen} />
      ) : (
        <>
          {!hiddenMenu && (
            <MenuBar />
          )}
          <main className="relative">{children}</main>
        </>
      )}
    </NextUIProvider>
  );
}
