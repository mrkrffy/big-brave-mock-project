import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function Marker({ position, label }) {
  const outerRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.elapsedTime * 2) * 0.02 + 0.15;
    if (outerRef.current) outerRef.current.size = pulse;
  });

  return (
    <group position={position}>
      <points
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([0, 0, 0])}
            count={1}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={outerRef}
          size={0.2}
          color="#29422b"
          opacity={1}
          transparent
        />
      </points>

      {/* Tooltip on hover */}
      {hovered && (
        <Html position={[0, 0, 0]}>
          <div className="px-3 py-2 bg-[var(--bg-color-secondary)] text-white rounded-lg font-semibold">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}
