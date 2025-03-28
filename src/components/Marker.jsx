import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CoffeeBean from "./CoffeeBean";

export default function Marker({ position, label }) {
  const outerRef = useRef();
  const markerRef = useRef();

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const randomBeanRotation = useRef([
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ]).current;

  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.elapsedTime * 5) * 0.02 + 0.15;
    if (outerRef.current) outerRef.current.size = pulse;
  });

  // Detect if the user is on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide tooltip when tapping outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!markerRef.current || event.target.closest(".tooltip")) return;
      setVisible(false);
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  return (
    <group position={position} ref={markerRef}>
      {/* Invisible hitbox for tap detection */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
        onPointerOver={!isMobile ? () => setVisible(true) : undefined}
        onPointerOut={!isMobile ? () => setVisible(false) : undefined}
        position={[0, 0, 0]}
        visible={false}
      >
        <sphereGeometry args={[0.01, 0.5, 0.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Coffee Bean Model */}
      <CoffeeBean scale={0.005} rotation={randomBeanRotation} />

      {/* Tooltip (Hover on Desktop, Tap on Mobile) */}
      {visible && (
        <Html position={[0, 0, 0]}>
          <div className="px-3 py-2 bg-[var(--bg-color-secondary)] text-white rounded-lg font-semibold max-w-[200px] whitespace-normal break-words">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}
