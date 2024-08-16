"use client";

import { NextUIProvider } from "@nextui-org/react";
import SplashScreen from "@/components/splashscreen";
import { useState } from "react";

export default function Providers({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <NextUIProvider>
      {showSplashScreen ? (
        <SplashScreen setShowSplashScreen={setShowSplashScreen} />
      ) : (
        <main>{children}</main>
      )}
    </NextUIProvider>
  );
}
