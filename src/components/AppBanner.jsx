import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Casket from "./Casket";
import bgImage from "../assets/banner-bg.jpg";

const AppBanner = () => {
  const LoadingSpinner = () => (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <>
      <div
        className="h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-x-0 -inset-y-16 bg-[var(--bg-color-primary)]/30 backdrop-blur-lg"></div>
        <div className="absolute inset-x-0 -inset-y-16 bg-gradient-to-t from-[var(--bg-color-primary)] to-transparent"></div>

        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={2.5} />
          <Suspense fallback={null}>
            <Casket scale={40} />
          </Suspense>
        </Canvas>

        <div
          className="lg:hidden z-50 absolute bottom-10 inset-x-0 mx-auto w-16 h-16 flex justify-center items-center text-white text-center px-4 pt-2 rounded-full bg-[var(--bg-color-secondary)] cursor-pointer pointer-events-auto"
          onClick={() =>
            document
              .getElementById("main-video-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        ></div>
      </div>
    </>
  );
};

export default AppBanner;
