"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* header visibility is controlled in page.tsx; avoid duplicating responsive classes */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-4 py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            className="z-50 duration-200 hover:scale-105"
            src="/assets/logo.png"
            alt="Kiwify Logo"
            width={120}
            height={40}
          />
        </Link>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="z-50 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 p-1 text-white ring-1 ring-white/10 hover:bg-white/20"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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

        {/* Slide-over panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-72 bg-[#071010] p-6 shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/assets/logo.png"
                alt="Kiwify"
                width={120}
                height={40}
              />
            </Link>
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="p-2 text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-4 font-medium text-white">
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Taxas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Curso Kiwify
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Button variant="ghost" className="w-full justify-center">
              Login
            </Button>
            <Button variant="outline" className="w-full rounded-full">
              Cadastrar Agora
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
