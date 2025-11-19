"use client";

import { BarChart2, BookOpen, Info, LifeBuoy, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const current = window.scrollY || 0;
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } flex items-center justify-between border-b border-white/5 bg-transparent px-4 py-3 backdrop-blur-sm`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            className="z-50 duration-200 hover:scale-105"
            src="/assets/logo.png"
            alt="Kiwify Logo"
            width={120}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="z-50 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 p-1 text-white ring-1 ring-white/10 hover:bg-white/20"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Drawer + overlay */}
      <div
        className={`fixed inset-0 z-40 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-over panel (improved design) */}
        <aside
          className={`fixed top-0 right-0 h-full w-72 p-4 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          } rounded-l-md border-l border-white/5 bg-gradient-to-b from-[#071010]/80 to-[#071010]/95 shadow-2xl backdrop-blur-md`}
        >
          <nav className="mt-16 px-2">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  <BarChart2 className="h-5 w-5 text-white/80" />
                  Taxas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  <BookOpen className="h-5 w-5 text-white/80" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  <LifeBuoy className="h-5 w-5 text-white/80" />
                  Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  <Info className="h-5 w-5 text-white/80" />
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
                >
                  <Play className="h-5 w-5 text-white/80" />
                  Curso Kiwify
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 px-2">
            <div className="flex flex-col gap-3">
              <Button
                variant="ghost"
                className="w-full justify-center bg-white/3 text-white"
              >
                Login
              </Button>
              <Button variant="outline" className="w-full rounded-full">
                Cadastrar Agora
              </Button>
            </div>
          </div>

          <div className="mt-6 px-2 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Kiwify</p>
          </div>
        </aside>
      </div>
    </>
  );
}
