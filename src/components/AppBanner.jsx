import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Coffee from "./Coffee";

function AppBanner() {
  return (
    <>
      <Canvas camera={{ position: [5, 3, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3} // Lock vertical rotation
          maxPolarAngle={Math.PI / 3}
        />
        <Coffee position={[0, -3, 0]} scale={30} />
        <Environment preset="apartment" />
      </Canvas>
    </>
  );
}

export default AppBanner;
