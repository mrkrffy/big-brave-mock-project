import React, { useState, useRef, useEffect } from "react";
import { Html } from "@react-three/drei";
import BeadOne from "./BeadOne";
import { HiHeart } from "react-icons/hi2";
import { IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { HiDotsVertical, HiOutlineBookmark } from "react-icons/hi";

const { div: MotionDiv } = motion;

export default function Marker({ position, user, initialVisible }) {
  const markerRef = useRef();
  const popupRef = useRef();
  const holdTimeout = useRef(null);

  const [visible, setVisible] = useState(initialVisible || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const randomBeanRotation = useRef([
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ]).current;

  useEffect(() => {
    if (initialVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [initialVisible]);

  useEffect(() => {
    const handlePointerDown = () => {
      // Start a timeout for detecting a long press
      holdTimeout.current = setTimeout(() => {
        // If held down, ignore further actions
        holdTimeout.current = null;
      }, 500); // Long press threshold
    };

    const handlePointerUp = (event) => {
      // If the event was a click (not a long hold)
      if (holdTimeout.current) {
        clearTimeout(holdTimeout.current);
        holdTimeout.current = null;

        // Only hide the popup if it's a click
        if (event.target.closest(".tooltip")) return;

        setVisible(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("Image loaded!"); // Debugging line to check if the image is loading
  };

  return (
    <group position={position} ref={markerRef}>
      <mesh
        position={position}
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        <BeadOne scale={0.025} rotation={randomBeanRotation} />
        {visible && (
          <Html>
            <AnimatePresence>
              <MotionDiv
                ref={popupRef}
                className={`tooltip fixed inset-0 flex items-center justify-center z-50 space-y-0 `}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 0.8, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="min-w-[390px] rounded-[17px] overflow-hidden bg-black">
                  <div className="flex flex-row items-center justify-start space-x-4 bg-black p-6">
                    <div className="h-10 w-10 bg-[var(--bg-color-primary)] rounded-full"></div>
                    <h2 className="text-white font-medium text-[18px] flex-grow">
                      {user?.name}
                    </h2>
                    <HiDotsVertical className="h-6 w-auto text-white" />
                  </div>
                  {!imageLoaded && (
                    <div className="w-full h-[410px] bg-[var(--bg-color-primary)] animate-pulse" />
                  )}

                  <img
                    src={import.meta.env.BASE_URL + user?.image}
                    alt={user?.name}
                    loading="lazy"
                    className="object-cover max-h-[410px] w-full"
                    onLoad={handleImageLoad}
                  />
                  <div className="flex flex-row items-center justify-start space-x-2 bg-[var(--bg-color-primary)] px-6 pt-6 pb-8 ">
                    <HiHeart className="h-8 w-8 text-white" />
                    <IoChatbubbleOutline className="h-8 w-8 text-white  scale-x-[-1]" />
                    <IoPaperPlaneOutline className="h-8 w-8 text-white" />
                    <HiOutlineBookmark className="h-8 w-8 text-white ml-auto" />
                  </div>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </Html>
        )}
      </mesh>
    </group>
  );
}
