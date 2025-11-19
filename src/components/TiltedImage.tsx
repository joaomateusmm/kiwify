"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface TiltedImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string; // wrapper
  imgClassName?: string; // image
  rotateAmplitude?: number;
  scaleOnHover?: number;
  floatAmplitude?: number;
  floatDuration?: number;
  floatDelay?: number;
}

const springValues = {
  damping: 40,
  stiffness: 100,
  mass: 2,
};

export default function TiltedImage({
  src,
  alt = "",
  width,
  height,
  className = "",
  imgClassName = "",
  rotateAmplitude = 15,
  scaleOnHover = 1.05,
  floatAmplitude = 10,
  floatDuration = 6,
  floatDelay = 0,
}: TiltedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`[perspective:1800px] ${className}`}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale }}
      animate={{
        y: [0, -floatAmplitude, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName}
      />
    </motion.div>
  );
}
