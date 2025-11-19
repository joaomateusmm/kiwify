"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ProfileCardProps {
  name: string;
  username: string;
  iconSrc: string;
  strokeSrc: string;
  saleRate: string;
  className?: string;
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function ProfileCard({
  name,
  username,
  iconSrc,
  strokeSrc,
  saleRate,
  className = "",
}: ProfileCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotateAmplitude = 12;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(1.08);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`flex w-auto flex-col items-center justify-center rounded-lg border bg-[#070808]/80 px-12 py-6 text-center shadow-lg transition-transform duration-300 ${className}`}
      style={{ rotateX, rotateY, scale }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
        <Image
          className="h-20.5 w-20.5 rounded-full"
          src={strokeSrc}
          alt=""
          width={110}
          height={110}
        />
        <Image
          className="absolute top-1/2 left-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full"
          src={iconSrc}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <h1 className="font-['Clash_Display'] font-semibold">{name}</h1>
      <h2 className="text-white/70">{username}</h2>
      <div className="my-2 w-full border"></div>
      <div>
        <p>Taxa de venda:</p>
        <p className="font-bold text-[#2EB76E]">{saleRate}</p>
      </div>
    </motion.div>
  );
}
