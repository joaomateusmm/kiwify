"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export default function HeaderDesktop() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const current = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (current > lastScrollY.current && current > 50) {
            setHidden(true);
          } else if (current < lastScrollY.current) {
            setHidden(false);
          }
          lastScrollY.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex transform items-center justify-between transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } border-b border-white/5 bg-transparent px-24 py-3 backdrop-blur-sm`}
    >
      <Link href="/">
        <Image
          className="z-50 duration-300 hover:scale-105"
          src="/assets/logo.png"
          alt="Kiwify Logo"
          width={100}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <nav>
        <ul className="flex flex-col gap-12 font-normal text-white md:flex-row">
          <li>
            <a
              className="inline-block transform transition-transform duration-200 hover:-translate-y-0.5 hover:text-lime-100"
              href=""
            >
              Taxas
            </a>
          </li>
          <li>
            <a
              className="inline-block transform transition-transform duration-200 hover:-translate-y-0.5 hover:text-lime-100"
              href=""
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="inline-block transform transition-transform duration-200 hover:-translate-y-0.5 hover:text-lime-100"
              href=""
            >
              Ajuda
            </a>
          </li>
          <li>
            <a
              className="inline-block transform transition-transform duration-200 hover:-translate-y-0.5 hover:text-lime-100"
              href=""
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              className="inline-block transform transition-transform duration-200 hover:-translate-y-0.5 hover:text-lime-100"
              href=""
            >
              Curso Kiwify
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="z-50 cursor-pointer font-normal hover:bg-white/5 hover:active:scale-95"
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="z-50 cursor-pointer rounded-full border-2 border-white bg-transparent px-5 py-5 font-normal hover:bg-white/5 hover:active:scale-95"
        >
          Cadastrar Agora
        </Button>
      </div>
    </header>
  );
}
