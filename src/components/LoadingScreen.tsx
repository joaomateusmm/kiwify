"use client";

import React, { useEffect, useState } from "react";

import LoadingVideo from "@/components/LoadingVideo";
import { getPending, subscribe } from "@/lib/loadingManager";

export default function LoadingScreen() {
  const [pending, setPending] = useState<number>(getPending());
  const [windowLoaded, setWindowLoaded] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const unsub = subscribe((p) => setPending(p));

    const onLoad = () => setWindowLoaded(true);
    if (document.readyState === "complete") setWindowLoaded(true);
    else window.addEventListener("load", onLoad);

    return () => {
      unsub();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // visible while window not loaded OR there are pending registered promises
  const isActive = !windowLoaded || pending > 0;

  // Fade-out when loading finishes
  useEffect(() => {
    if (!isActive) {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }
    setVisible(true);
  }, [isActive]);

  if (!visible) return null;

  return (
    <div
      aria-hidden={!isActive}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#060707] transition-opacity duration-350 ${
        isActive
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <div className="text-lg font-medium">
          <LoadingVideo src="/videos/load.mp4" className="h-24 w-auto" />
        </div>
      </div>
    </div>
  );
}
