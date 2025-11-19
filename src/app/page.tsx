"use client";

import { Zap } from "lucide-react";
import Image from "next/image";

import GlareHover from "@/components/GlareHover";
import GlareHover2 from "@/components/GlareHover2";
import HeaderDesktop from "@/components/headerDesktop";
import HeaderMobile from "@/components/headerMobile";
import KiwifyScene from "@/components/kiwify3d";
import LoadingScreen from "@/components/LoadingScreen";
import SpotlightCard from "@/components/SpotlightCard";
import Squares from "@/components/Squares";
import TiltedNotification from "@/components/TiltedNotification";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_50%_-100%,#009D4726_58%,#0B0B0B_76%,#060606_89%)]">
        <div className="z-20">
          <div className="hidden md:block">
            <HeaderDesktop />
          </div>
          <div className="block md:hidden">
            <HeaderMobile />
          </div>
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

        <div className="relative z-10 flex flex-col items-center md:h-[calc(100vh-120px)] md:flex-row-reverse md:px-24">
          <div className="relative flex h-[360px] w-full items-center justify-center md:mt-28 md:h-full md:w-1/2 md:justify-start">
            {/* Notificações de vendas */}
            <TiltedNotification
              src="/assets/notification/notificacao1.png"
              alt="Notificação de venda"
              width={350}
              height={80}
              mobileScale={1.3}
              className="absolute top-4 left-2 z-20 hidden rotate-6 backdrop-blur-xs md:top-45 md:left-0 md:block"
              floatDelay={0}
            />
            <TiltedNotification
              src="/assets/notification/notificacao2.png"
              alt="Notificação de venda"
              width={300}
              height={80}
              mobileScale={1.2}
              className="absolute top-20 right-2 z-20 hidden rotate-4 opacity-85 md:top-64 md:right-0 md:block"
              floatDelay={1}
            />
            <TiltedNotification
              src="/assets/notification/notificacao3.png"
              alt="Notificação de venda"
              width={320}
              height={80}
              mobileScale={1.2}
              className="absolute bottom-24 left-4 z-20 hidden -rotate-4 backdrop-blur-xs md:bottom-40 md:left-20 md:block"
              floatDelay={2}
            />
            <TiltedNotification
              src="/assets/notification/notificacao4.png"
              alt="Notificação de venda"
              width={400}
              height={80}
              mobileScale={1.15}
              className="absolute right-4 bottom-12 -z-20 hidden rotate-4 opacity-60 md:right-10 md:bottom-58 md:block"
              floatDelay={3}
            />

            {/* Mobile-only notifications  */}
            <TiltedNotification
              src="/assets/notification/notificacao1.png"
              alt="Notificação mobile pequena 1"
              width={220}
              height={50}
              mobileScale={0.85}
              className="absolute top-2 left-3 z-30 ml-3 block rotate-3 backdrop-blur-xs md:hidden"
              floatDelay={0}
            />
            <TiltedNotification
              src="/assets/notification/notificacao2.png"
              alt="Notificação mobile pequena 2"
              width={200}
              height={50}
              mobileScale={0.9}
              className="absolute top-24 right-3 z-30 mr-3 block rotate-2 opacity-90 md:hidden"
              floatDelay={1}
            />
            <TiltedNotification
              src="/assets/notification/notificacao3.png"
              alt="Notificação mobile pequena 3"
              width={210}
              height={50}
              mobileScale={0.85}
              className="absolute bottom-20 left-4 z-30 ml-3 block -rotate-2 backdrop-blur-xs md:hidden"
              floatDelay={2}
            />
            <TiltedNotification
              src="/assets/notification/notificacao4.png"
              alt="Notificação mobile pequena 4"
              width={240}
              height={50}
              mobileScale={0.9}
              className="absolute right-6 bottom-6 z-10 mr-3 block rotate-1 opacity-80 md:hidden"
              floatDelay={3}
            />

            <div className="relative z-10 h-full w-full">
              <KiwifyScene />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-6 px-12 md:w-1/2 md:pl-12">
            <h1 className="font-['Clash_Display'] text-4xl font-medium text-green-300 md:text-8xl">
              Venda seu curso online
            </h1>
            <p className="text-sm text-white/80 md:text-lg">
              Transforme o seu conhecimento em um curso online e crie seu
              negócio na internet, com toda a estrutura que você precisa para
              ter sucesso.
            </p>
            <div className="flex gap-4">
              <Button
                className="cursor-pointer rounded-md font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 active:scale-95 md:px-10 md:py-6 md:text-lg"
                style={{
                  background: "linear-gradient(180deg,#34d399 0%,#16a34a 100%)",
                  boxShadow:
                    "inset 8px 8px 12px rgba(255,255,255,0.06), inset -8px -8px 12px rgba(0,0,0,0.30)",
                }}
              >
                Comece agora
              </Button>
              <Button
                className="cursor-pointer rounded-md border border-white/10 font-medium text-white/85 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 md:px-8 md:py-6 md:text-lg"
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
      </div>

      {/* Página 02 do site */}

      <div className="bg-[#060707]">
        <div className="pointer-events-none w-full">
          <div className="mx-auto w-full px-4">
            <Image
              className="mx-auto mb-4 h-auto md:-mt-12 md:w-[1000px]"
              src="/assets/divisa.png"
              alt="Kiwify divider"
              width={600}
              height={60}
              priority
            />
          </div>
        </div>

        <div>
          <div className="mx-auto mb-6 max-w-4xl px-6 text-center">
            <h1 className="font-montserrat text-lg font-light text-white/90 md:text-2xl">
              Confira os benefícios exclusivos da Kiwify para ajudar a aumentar
              suas vendas e escalar seu negócio.
            </h1>
          </div>
        </div>

        <div className="py-8">
          <div className="mx-auto mb-6 w-full max-w-6xl px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
              <SpotlightCard
                className="custom-spotlight-card h-[350px] w-[450px] border-0 bg-white/2 md:hidden"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-1-mobile.png"
                // Card 1 mobile
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card h-[350px] w-[450px] border-0 bg-white/2 md:hidden"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-2-mobile.png"
                // Card 2 mobile
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card hidden h-[450px] w-[450px] border-0 bg-white/2 md:block md:w-[450px]"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-1.png"
                // Card 1 desktop
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card hidden h-[450px] w-[850px] border-0 bg-white/2 md:block"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-2.png"
                // Card 2 desktop
              ></SpotlightCard>
            </div>
          </div>

          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
              <SpotlightCard
                className="custom-spotlight-card h-[350px] w-[450px] border-0 bg-white/2 md:hidden"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-3.png"
                // Card 3 mobile
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card h-[350px] w-[450px] border-0 bg-white/2 md:hidden"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-4-mobile.png"
                // Card 4 mobile
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card hidden h-[450px] w-[645px] border-0 bg-white/2 md:block"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-3.png"
                // Card 3 desktop
              ></SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card hidden h-[450px] w-[645px] border-0 bg-white/2 md:block"
                spotlightColor="rgba(25, 156, 79, 0.2)"
                backgroundImage="/assets/cards/quadrado-4.png"
                // Card 4 desktop
              ></SpotlightCard>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#060707] px-6 py-12 text-center text-white md:px-24 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 z-0 rotate-18"
          style={{
            background:
              "radial-gradient(ellipse 250px 140px at center, rgba(8,52,31,0.28) 0%, rgba(8,52,31,0.12) 40%, rgba(8,52,31,0) 100%)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="flex h-auto w-auto items-center justify-center gap-3 rounded-md border border-white/10 bg-[rgba(217,217,217,0.03)] px-3 py-1.5">
              <div className="h-auto w-auto rounded-md bg-[rgba(217,217,217,0.12)] p-1">
                <Zap className="h-4 w-4 text-[#2CB571]" />
              </div>
              <p className="font-normal text-white/80">
                EXPLORE NOSSAS{" "}
                <span className="font-semibold text-white">FEATURES</span>
              </p>
            </div>
          </GlareHover>
          <h1 className="bg-gradient-to-t from-white to-gray-400 bg-clip-text py-3 font-['Clash_Display'] text-5xl text-transparent">
            Compradores 1 Click
          </h1>
          <p className="max-w-[600px] text-sm text-white/80">
            oda vez que um comprador compra pela Kiwify, ele tem a opção de
            salvar os dados do cartão para fazer as próximas compras (em
            qualquer checkout) com 1-click.{" "}
          </p>
          <Button
            className="mt-5 cursor-pointer rounded-md font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 active:scale-95 md:px-10 md:py-6 md:text-lg"
            style={{
              background: "linear-gradient(180deg,#34d399 0%,#16a34a 100%)",
              boxShadow:
                "inset 8px 8px 12px rgba(255,255,255,0.06), inset -8px -8px 12px rgba(0,0,0,0.30)",
            }}
          >
            Comece agora
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 bg-[#060707] pb-12 md:flex-row">
        {/* card do perfil 1 */}
        <GlareHover2
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="flex h-72 w-56 flex-col items-center justify-center rounded-lg px-12 py-6 text-center duration-300 hover:scale-[1.03]">
            <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
              <Image
                className="h-20.5 w-20.5 rounded-full"
                src="/assets/profile/storie-stroke.png"
                alt=""
                width={110}
                height={110}
              />
              <Image
                className="absolute top-1/2 left-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full"
                src="/assets/profile/icon.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-['Clash_Display'] font-semibold">
              Duda Vieira
            </h1>
            <h2 className="text-white/70">@mariaeduardasv</h2>
            <div className="my-2 w-full border"></div>
            <div>
              <p>Taxa de venda:</p>
              <p className="font-bold text-[#2EB76E]">21.23%</p>
            </div>
          </div>
        </GlareHover2>
        {/* card do perfil 2 */}
        <GlareHover2
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="flex h-72 w-56 flex-col items-center justify-center rounded-lg px-12 py-6 text-center duration-300 hover:scale-[1.03]">
            <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
              <Image
                className="h-20.5 w-20.5 rounded-full"
                src="/assets/profile/storie-stroke.png"
                alt=""
                width={110}
                height={110}
              />
              <Image
                className="absolute top-1/2 left-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full"
                src="/assets/profile/icon-2.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-['Clash_Display'] font-semibold">
              Adson Henrique
            </h1>
            <h2 className="text-white/70">@adsonhenriquee</h2>
            <div className="my-2 w-full border"></div>
            <div>
              <p>Taxa de venda:</p>
              <p className="font-bold text-[#2EB76E]">25.02%</p>
            </div>
          </div>
        </GlareHover2>
        {/* card do perfil 3 */}
        <GlareHover2
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="flex h-72 w-56 flex-col items-center justify-center rounded-lg px-12 py-6 text-center duration-300 hover:scale-[1.03]">
            <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
              <Image
                className="h-20.5 w-20.5 rounded-full"
                src="/assets/profile/storie-stroke.png"
                alt=""
                width={110}
                height={110}
              />
              <Image
                className="absolute top-1/2 left-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full"
                src="/assets/profile/icon-3.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-['Clash_Display'] font-semibold">
              Higor Neves
            </h1>
            <h2 className="text-white/70">@neveshigor_</h2>
            <div className="my-2 w-full border"></div>
            <div>
              <p>Taxa de venda:</p>
              <p className="font-bold text-[#2EB76E]">22.71%</p>
            </div>
          </div>
        </GlareHover2>
        {/* card do perfil 4 */}
        <GlareHover2
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="flex h-72 w-56 flex-col items-center justify-center rounded-lg px-12 py-6 text-center duration-300 hover:scale-[1.03]">
            <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center">
              <Image
                className="h-20.5 w-20.5 rounded-full"
                src="/assets/profile/storie-stroke.png"
                alt=""
                width={110}
                height={110}
              />
              <Image
                className="absolute top-1/2 left-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full"
                src="/assets/profile/icon-4.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-['Clash_Display'] font-semibold">
              Hytallo Soares
            </h1>
            <h2 className="text-white/70">@hytallosoares</h2>
            <div className="my-2 w-full border"></div>
            <div>
              <p>Taxa de venda:</p>
              <p className="font-bold text-[#2EB76E]">21.23%</p>
            </div>
          </div>
        </GlareHover2>
      </div>
    </main>
  );
}
