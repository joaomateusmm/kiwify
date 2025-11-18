"use client";

import React from "react";

type Props = {
  src?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
};

export default function LoadingVideo({
  src = "/videos/load.mp4",
  poster,
  className = "h-8 w-auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: Props) {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      aria-hidden="true"
    >
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
}
