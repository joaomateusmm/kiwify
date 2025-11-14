"use client";

import Image from "next/image";

import KiwifyScene from "@/components/exemple";
import HeaderDesktop from "@/components/headerDesktop";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full bg-[radial-gradient(circle_at_50%_-95%,#009D4726_40%,#0B0B0B_76%,#060606_89%)]">
        <HeaderDesktop />
        <div className="relative flex h-[calc(100vh-120px)] items-center justify-center">
          <span className="absolute top-7">
            <Image
              className="duration-300 hover:scale-105"
              src="/assets/title.png"
              alt="Kiwify Logo"
              width={600}
              height={200}
            />
          </span>

          {/* Notificações de vendas */}
          <Image
            src="/assets/notificacao1.png"
            alt="Notificação de venda"
            width={350}
            height={80}
            className="absolute top-45 left-150 z-20 rotate-6 opacity-90 backdrop-blur-md"
          />
          <Image
            src="/assets/notificacao2.png"
            alt="Notificação de venda"
            width={300}
            height={80}
            className="absolute top-64 right-130 z-20 rotate-4 opacity-85"
          />
          <Image
            src="/assets/notificacao3.png"
            alt="Notificação de venda"
            width={320}
            height={80}
            className="absolute bottom-40 left-160 z-20 -rotate-4 opacity-90 backdrop-blur-md"
          />
          <Image
            src="/assets/notificacao4.png"
            alt="Notificação de venda"
            width={400}
            height={80}
            className="absolute right-137 bottom-58 -z-0 rotate-4 opacity-85"
          />

          <div className="relative z-10 h-full w-full">
            <KiwifyScene />
          </div>
        </div>
      </div>
    </main>
  );
}
