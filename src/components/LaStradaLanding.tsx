"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Menu } from "lucide-react";

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
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/50 to-transparent"
        aria-hidden
      />

      <p className="relative z-10 w-full bg-zinc-950 py-3 text-center text-xs font-bold tracking-widest text-yellow-500 sm:text-sm">
        A PARTIR DAS 18:00
      </p>

      <div className="relative z-10 flex flex-col items-center justify-start px-6 pt-10 text-center">
        <h1
          className="max-w-sm text-[2.125rem] font-extrabold leading-[1.1] tracking-wide text-white sm:max-w-md sm:text-5xl sm:leading-[1.08]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="block">
            A{" "}
            <span className="text-yellow-500">MELHOR PIZZA</span>
          </span>
          <span className="mt-1 block sm:mt-2">DA CIDADE</span>
        </h1>

        <h2 className="mt-6 mb-8 max-w-[280px] font-sans text-sm font-normal leading-snug text-white sm:max-w-xs sm:text-base">
          <span className="block">Clique abaixo agora para acessar o</span>
          <span className="block">nosso cardápio</span>
        </h2>

        <motion.a
          href={CARDAPIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackSubscribeAndNavigate}
          className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-yellow-500 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-zinc-950 shadow-[0_0_25px_rgba(234,179,8,0.5)] sm:text-base"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/35 to-transparent la-strada-cta-shimmer"
            aria-hidden
          />
          <Menu className="relative z-10 size-5 shrink-0" strokeWidth={2.5} />
          <span className="relative z-10">ACESSAR O CARDÁPIO</span>
        </motion.a>
      </div>
    </section>
  );
}
