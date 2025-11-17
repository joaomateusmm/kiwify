"use client";

import Image from "next/image";

import HeaderDesktop from "@/components/headerDesktop";
import KiwifyScene from "@/components/kiwify3d";
import SpotlightCard from "@/components/SpotlightCard";
import Squares from "@/components/Squares";
import TiltedNotification from "@/components/TiltedNotification";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full bg-[radial-gradient(circle_at_50%_-100%,#009D4726_58%,#0B0B0B_76%,#060606_89%)]">
        <div className="z-20">
          <HeaderDesktop />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <Squares
            speed={0.1}
            squareSize={70}
            direction="diagonal"
            borderColor={"rgba(5,255,255,0.01)"}
            hoverFillColor={"rgba(5,255,255,0.03)"}
          />
        </div>

        <div className="relative z-10 flex h-[calc(100vh-120px)] flex-col items-center justify-between px-24 md:flex-row-reverse">
          <div className="relative mt-28 flex h-full w-1/2 items-center justify-start">
            {/* Notificações de vendas */}
            <TiltedNotification
              src="/assets/notificacao1.png"
              alt="Notificação de venda"
              width={350}
              height={80}
              className="absolute top-45 left-0 z-20 rotate-6 backdrop-blur-xs"
              floatDelay={0}
            />
            <TiltedNotification
              src="/assets/notificacao2.png"
              alt="Notificação de venda"
              width={300}
              height={80}
              className="absolute top-64 right-0 z-20 rotate-4 opacity-85"
              floatDelay={1}
            />
            <TiltedNotification
              src="/assets/notificacao3.png"
              alt="Notificação de venda"
              width={320}
              height={80}
              className="absolute bottom-40 left-20 z-20 -rotate-4 backdrop-blur-xs"
              floatDelay={2}
            />
            <TiltedNotification
              src="/assets/notificacao4.png"
              alt="Notificação de venda"
              width={400}
              height={80}
              className="absolute right-10 bottom-58 -z-20 rotate-4 opacity-60"
              floatDelay={3}
            />

            <div className="relative z-10 h-full w-full">
              <KiwifyScene />
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-start justify-center gap-6 pl-12">
            <h1 className="font-['Clash_Display'] text-8xl font-medium text-green-300">
              Venda seu curso online
            </h1>
            <p className="text-lg text-white/80">
              Transforme o seu conhecimento em um curso online e crie seu
              negócio na internet, com toda a estrutura que você precisa para
              ter sucesso.
            </p>
            <div className="flex gap-4">
              <Button
                className="cursor-pointer rounded-md px-10 py-6 text-lg font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 active:scale-95"
                style={{
                  background: "linear-gradient(180deg,#34d399 0%,#16a34a 100%)",
                  boxShadow:
                    "inset 8px 8px 12px rgba(255,255,255,0.06), inset -8px -8px 12px rgba(0,0,0,0.30)",
                }}
              >
                Comece agora
              </Button>
              <Button
                className="cursor-pointer rounded-md border border-white/10 px-8 py-6 text-lg font-medium text-white/85 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  boxShadow:
                    "inset 6px 6px 10px rgba(0,0,0,0.30), inset -6px -6px 10px rgba(255,255,255,0.06)",
                }}
              >
                Conhecer
              </Button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-5">
          <div className="mx-auto w-full max-w-[1000px] px-4">
            <Image
              className="h-auto w-full"
              src="/assets/divisa.png"
              alt="Kiwify divider"
              width={1000}
              height={60}
              priority
            />
          </div>
        </div>
      </div>

      {/* Página 02 do site */}

      <div className="relative h-[100vh] bg-[#060707]">
        <div className="absolute inset-x-0 top-0 z-20 translate-y-6">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-montserrat text-2xl font-light text-white/90">
              Confira os benefícios exclusivos da Kiwify para ajudar a <br />
              aumentar suas vendas e escalar seu negócio.
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 pt-36">
          <div className="flex gap-6">
            <SpotlightCard
              className="custom-spotlight-card h-[450px] w-[450px] border-none bg-white/2"
              spotlightColor="rgba(0, 230, 115, 0.1)"
              backgroundImage={"/assets/cards/quadrado-1.png"}
            />
            <SpotlightCard
              className="custom-spotlight-card h-[450px] w-[850px] border-none bg-white/2"
              spotlightColor="rgba(0, 230, 115, 0.1)"
              backgroundImage={"/assets/cards/quadrado-2.png"}
            />
          </div>
          <div className="flex gap-6">
            <SpotlightCard
              className="custom-spotlight-card h-[450px] w-[645px] border-none bg-white/2"
              spotlightColor="rgba(0, 230, 115, 0.1)"
              backgroundImage={"/assets/cards/quadrado-3.png"}
            />
            <SpotlightCard
              className="custom-spotlight-card h-[450px] w-[645px] border-none bg-white/2"
              spotlightColor="rgba(0, 230, 115, 0.1)"
              backgroundImage={"/assets/cards/quadrado-4.png"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
