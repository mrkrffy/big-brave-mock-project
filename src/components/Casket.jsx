import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Marker from "./Marker";

const users = [
  { name: "Liam Carter", image: "victims/1.jpg" },
  { name: "Olivia Brooks", image: "victims/2.jpg" },
  { name: "Noah Bennett", image: "victims/3.jpg" },
  { name: "Emma Hayes", image: "victims/4.jpg" },
  { name: "Elijah James", image: "victims/5.jpg" },
  { name: "Ava Morgan", image: "victims/6.jpg" },
  { name: "James Parker", image: "victims/7.jpg" },
  { name: "Sophia Diaz", image: "victims/8.jpg" },
  { name: "Lucas Ramirez", image: "victims/9.jpg" },
  { name: "Isabella Clark", image: "victims/10.jpg" },
  { name: "Benjamin Rivera", image: "victims/11.jpg" },
  { name: "Mia Campbell", image: "victims/12.jpg" },
  { name: "Henry Nguyen", image: "victims/13.jpg" },
  { name: "Charlotte Reed", image: "victims/14.jpg" },
  { name: "Alexander Turner", image: "victims/15.jpg" },
  { name: "Amelia Ward", image: "victims/16.jpg" },
  { name: "William Foster", image: "victims/17.jpg" },
  { name: "Harper Bailey", image: "victims/18.jpg" },
  { name: "Ethan Cooper", image: "victims/19.jpg" },
  { name: "Evelyn Gray", image: "victims/20.jpg" },
  { name: "Daniel Ross", image: "victims/21.jpg" },
  { name: "Abigail Price", image: "victims/22.jpg" },
  { name: "Sebastian Howard", image: "victims/23.jpg" },
  { name: "Luna Jenkins", image: "victims/24.jpg" },
  { name: "Matthew Ellis", image: "victims/25.jpg" },
  { name: "Ella Gonzales", image: "victims/26.jpg" },
  { name: "David Kelly", image: "victims/27.jpg" },
  { name: "Scarlett Simmons", image: "victims/28.jpg" },
  { name: "Joseph Perry", image: "victims/29.jpg" },
  { name: "Grace Patterson", image: "victims/30.jpg" },
  { name: "Samuel Butler", image: "victims/31.jpg" },
  { name: "Chloe Hughes", image: "victims/32.jpg" },
  { name: "Gabriel Stewart", image: "victims/33.jpg" },
  { name: "Zoey Barnes", image: "victims/34.jpg" },
  { name: "Logan Powell", image: "victims/35.jpg" },
  { name: "Riley Henderson", image: "victims/36.jpg" },
  { name: "Jack Coleman", image: "victims/37.jpg" },
  { name: "Aria Bryant", image: "victims/38.jpg" },
  { name: "Owen Simmons", image: "victims/39.jpg" },
  { name: "Nora Morris", image: "victims/40.jpg" },
  { name: "Wyatt Fisher", image: "victims/41.jpg" },
  { name: "Lily Hamilton", image: "victims/42.jpg" },
  { name: "Julian Ford", image: "victims/43.jpg" },
  { name: "Hannah Wallace", image: "victims/44.jpg" },
  { name: "Grayson Greene", image: "victims/45.jpg" },
  { name: "Victoria Wells", image: "victims/46.jpg" },
  { name: "Caleb Boyd", image: "victims/47.jpg" },
  { name: "Penelope Webb", image: "victims/48.jpg" },
  { name: "Nathan Stone", image: "victims/49.jpg" },
  { name: "Layla Dawson", image: "victims/50.jpg" },
  { name: "Isaac Hunter", image: "victims/51.jpg" },
  { name: "Zoe Lane", image: "victims/52.jpg" },
  { name: "Aiden Matthews", image: "victims/53.jpg" },
  { name: "Audrey Bishop", image: "victims/54.jpg" },
  { name: "Levi Arnold", image: "victims/55.jpg" },
  { name: "Savannah Chambers", image: "victims/56.jpg" },
];

const minRadius = 0.05;
const maxRadius = 0.1;
const minDistance = 0.02;

function generateRandomPosition(existingPositions) {
  let position;
  let attempts = 0;

  do {
    const radius = Math.random() * (maxRadius - minRadius) + minRadius;
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    position = [x, y, z];

    // Avoid overlapping markers
    const tooClose = existingPositions.some(([px, py, pz]) => {
      const dx = x - px;
      const dy = y - py;
      const dz = z - pz;
      return Math.sqrt(dx * dx + dy * dy + dz * dz) < minDistance;
    });

    if (!tooClose) break;

    attempts++;
  } while (attempts < 20);

  return position;
}

export default function Model(props) {
  const { animations, scene } = useGLTF("casket.glb");
  const [markerPositions, setMarkerPositions] = useState([]);
  const { actions } = useAnimations(animations, scene);
  const action = actions["Take 001"];
  const actionDuration = action.getClip().duration;

  const [showInitialPopup, setShowInitialPopup] = useState(false); // State to control when to show markers

  useEffect(() => {
    let positions = [];
    for (let i = 0; i < 56; i++) {
      positions.push(generateRandomPosition(positions));
    }
    setMarkerPositions(positions);
  }, []);

  useEffect(() => void (action.play().paused = true), [action]);

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const calculatedTime = 1 - state.clock.getElapsedTime() / 2;
    const targetTime =
      elapsedTime >= 0.5
        ? THREE.MathUtils.damp(
            action.time,
            actionDuration + elapsedTime,
            3,
            delta
          )
        : action.time;

    if (elapsedTime >= 2) {
      !showInitialPopup && setShowInitialPopup(true);
      return;
    }

    action.time = THREE.MathUtils.damp(action.time, targetTime, 5, delta);

    const x = Math.sin(calculatedTime) * 10;
    const y = Math.sin(calculatedTime * Math.PI) * 4 + 4;
    const z = Math.cos((calculatedTime * Math.PI) / 3) * 10;

    state.camera.position.set(x, y, z);
    state.camera.lookAt(0, 0, 0);
  });

  const randomUserIndex = Math.floor(Math.random() * users.length);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={1.5} position={[0, -0.08, 0]} />
      {markerPositions.map((position, index) => {
        console.log(showInitialPopup, index == randomUserIndex);
        return (
          <Marker
            key={index}
            position={position}
            user={users[index]}
            initialVisible={showInitialPopup && index == randomUserIndex}
          />
        );
      })}

      <OrbitControls enableZoom={false} enablePan={false} />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}casket.glb`);
