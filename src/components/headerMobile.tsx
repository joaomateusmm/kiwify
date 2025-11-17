import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeaderDesktop() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-24 py-6">
      <Link href="/">
        <Image
          className="z-50 duration-300 hover:scale-105"
          src="/assets/logo.png"
          alt="Kiwify Logo"
          width={150}
          height={60}
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
