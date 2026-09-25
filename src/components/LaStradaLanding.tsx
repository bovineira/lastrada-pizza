"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";

const CARDAPIO_URL =
  "https://app.cardapioweb.com/la_strada_pizzaria_e_massas";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackSubscribeAndNavigate() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Subscribe");
  }
}

export function LaStradaLanding() {
  return (
    <section
      className="la-strada-landing relative flex min-h-[100dvh] flex-col justify-start overflow-hidden bg-zinc-950"
      aria-label="La Strada Pizzaria"
    >
      <Image
        src="/bg-mobile-certo.jpeg"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-bottom pointer-events-none select-none"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/95 via-black/55 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex w-full items-center justify-center gap-2 bg-zinc-950 py-3">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-yellow-500" />
        </span>
        <p className="text-center text-xs font-bold tracking-widest text-yellow-500 sm:text-sm">
          ABERTO AGORA · A PARTIR DAS 18:00
        </p>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-8 text-center">
        <h1
          className="max-w-sm text-[2.5rem] font-extrabold uppercase leading-[1.05] tracking-wide text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.65)] sm:max-w-lg sm:text-6xl sm:leading-[1.02]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="block">A PIZZA</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            MAIS DESEJADA
          </span>
          <span className="block">DA CIDADE</span>
        </h1>

        <h2 className="mt-6 max-w-[300px] font-sans text-base font-medium leading-snug text-zinc-100 sm:max-w-sm sm:text-lg">
          Massa artesanal, borda recheada e aquele sabor que{" "}
          <span className="font-extrabold text-yellow-400">vicia</span>.
        </h2>

        <p className="mt-2 max-w-[280px] font-sans text-sm text-zinc-400 sm:max-w-xs sm:text-base">
          Seu cardápio completo está a um toque de distância.
        </p>

        <div className="relative mt-9">
          <div
            className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-yellow-500/40 blur-2xl"
            aria-hidden
          />
          <motion.a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackSubscribeAndNavigate}
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-[length:200%_100%] px-7 py-5 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_0_45px_rgba(234,179,8,0.7)] sm:px-12 sm:py-6 sm:text-lg"
            animate={{
              scale: [1, 1.06, 1],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/40 to-transparent la-strada-cta-shimmer"
              aria-hidden
            />
            <Flame className="relative z-10 size-6 shrink-0" strokeWidth={2.5} />
            <span className="relative z-10">QUERO MINHA PIZZA AGORA</span>
            <ArrowRight className="relative z-10 size-5 shrink-0" strokeWidth={3} />
          </motion.a>
        </div>

        <p className="mt-4 text-xs font-medium tracking-wide text-zinc-500">
          Toque para ver o cardápio completo
        </p>
      </div>
    </section>
  );
}
