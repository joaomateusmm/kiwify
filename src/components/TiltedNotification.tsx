"use client";

import type { SpringOptions } from "motion/react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedNotificationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  floatDelay?: number;
  mobileScale?: number;
}

export default function TiltedNotification({
  src,
  alt,
  width,
  height,
  className = "",
  rotateAmplitude = 12,
  scaleOnHover = 1.08,
  floatDelay = 0,
  mobileScale = 1.25,
}: TiltedNotificationProps) {
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
      style={{
        rotateX,
        rotateY,
        scale,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        mobileScale={mobileScale}
      />
    </motion.div>
  );
}

function ResponsiveImage({
  src,
  alt,
  width,
  height,
  mobileScale,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileScale: number;
}) {
  const isClient = typeof window !== "undefined";
  const isMobile = isClient ? window.innerWidth <= 768 : false;
  const renderWidth = isMobile ? Math.round(width * mobileScale) : width;
  const renderHeight = isMobile ? Math.round(height * mobileScale) : height;

  return (
    <Image src={src} alt={alt} width={renderWidth} height={renderHeight} />
  );
}
