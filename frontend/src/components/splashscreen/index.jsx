"use client";
import React, { useEffect } from "react";

const SplashScreen = ({ setShowSplashScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
      localStorage.setItem("splashScreenShown", true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setShowSplashScreen]);

  return (
    <div className='fixed inset-0 bg-[url("/images/splashscreen.png")] bg-cover bg-center flex flex-col justify-center z-50'>
      <div className="content text-white flex flex-col items-center -mt-20">
        <img src="images/logo.png" width={150} />
        <h1 className="font-bold text-3xl">Zenith</h1>
        <h4>Elevate Your Quiz Experience</h4>
      </div>
    </div>
  );
};

export default SplashScreen;
