import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Coffee from "./Coffee";
import bgImage from "../assets/banner-bg.jpg";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

function AppBanner() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-x-0 -inset-y-6 bg-[var(--bg-color-primary)]/30 backdrop-blur-lg"></div>
        <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-t from-[var(--bg-color-primary)] to-transparent"></div>

        <Canvas camera={{ position: [6, 3, 5] }} className="z-40">
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Coffee position={[0, -1, 0]} scale={25} />
          <Environment preset="city" />
        </Canvas>

        <div
          className="lg:hidden z-50 absolute bottom-10 inset-x-0 mx-auto w-16 h-16 flex justify-center items-center text-white text-center px-4 pt-2 rounded-full bg-[var(--bg-color-secondary)] cursor-pointer pointer-events-auto"
          onClick={() =>
            document
              .getElementById("main-video-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDoubleDownIcon className="h-6 mx-auto animate-bounce" />
        </div>
      </div>
    </>
  );
}

export default AppBanner;
