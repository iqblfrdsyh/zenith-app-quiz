"use client"
import SplashScreen from "@/components/splashscreen";
import { useState } from "react";

export function StarterApp({ children }) {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    return (
        <div>
            {showSplashScreen ? (
                <SplashScreen setShowSplashScreen={setShowSplashScreen} />
            ) : (
                children
            )}
        </div>
    );
}
