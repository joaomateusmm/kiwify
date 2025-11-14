import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeaderDesktop() {
  return (
    <header className="flex items-center justify-between px-24 py-8">
      <Link href="/">
        <Image
          className="duration-300 hover:scale-105"
          src="/assets/logo.png"
          alt="Kiwify Logo"
          width={150}
          height={60}
        />
      </Link>
      <nav>
        <ul className="flex flex-col gap-12 font-normal text-white md:flex-row">
          <li>
            <a className="duration-200 hover:text-lime-100" href="">
              Taxas
            </a>
          </li>
          <li>
            <a className="duration-200 hover:text-lime-100" href="">
              FAQ
            </a>
          </li>
          <li>
            <a className="duration-200 hover:text-lime-100" href="">
              Ajuda
            </a>
          </li>
          <li>
            <a className="duration-200 hover:text-lime-100" href="">
              Sobre Nós
            </a>
          </li>
          <li>
            <a className="duration-200 hover:text-lime-100" href="">
              Curso Kiwify
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="cursor-pointer font-normal hover:bg-white/5 hover:active:scale-95"
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer rounded-full border-2 border-white bg-transparent px-5 py-5 font-normal hover:bg-white/5 hover:active:scale-95"
        >
          Cadastrar Agora
        </Button>
      </div>
    </header>
  );
}
