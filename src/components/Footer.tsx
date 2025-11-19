import { Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#060707] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex w-full flex-col items-start gap-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="Kiwify"
                width={110}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="h-[36px] w-auto"
              />
            </Link>
            <p className="max-w-[380px] text-sm text-white/70">
              Venda seu conhecimento e converta mais com Kiwify — plataforma
              completa para criar, vender e entregar seus cursos online.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-white/10"
                aria-label="Kiwify on Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-white/10"
                aria-label="Kiwify on Linkedin"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-white/10"
                aria-label="Kiwify on Youtube"
              >
                <Youtube />
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 md:w-2/3 md:flex-row md:gap-20">
            <div className="flex w-full flex-col gap-3 md:w-1/3">
              <h4 className="text-sm font-semibold text-white/90">Produto</h4>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Integrações
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/3">
              <h4 className="text-sm font-semibold text-white/90">Empresa</h4>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-1/3">
              <h4 className="text-sm font-semibold text-white/90">Ajuda</h4>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Kiwify. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-white/60 hover:text-white">
                Termos
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
