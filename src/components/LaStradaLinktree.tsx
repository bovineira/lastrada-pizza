"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, UtensilsCrossed } from "lucide-react";

const CARDAPIO_URL =
  "https://app.cardapioweb.com/la_strada_pizzaria_e_massas";

const WHATSAPP_COMMUNITY_URL =
  "https://chat.whatsapp.com/KQaB3fl3pLhCg2XNZsSTAX?mode=gi_t";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackCardapioClick() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Subscribe");
  }
}

function trackWhatsappClick() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
}

export function LaStradaLinktree() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-14">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:22px_22px]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="relative flex size-28 items-center justify-center sm:size-32">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-yellow-500"
            animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-yellow-500/70"
            animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.28, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="relative size-24 overflow-hidden rounded-full border-2 border-yellow-500/80 shadow-[0_0_35px_rgba(234,179,8,0.35)] sm:size-28">
            <Image
              src="/logo-background-preto.jpg"
              alt="La Strada Pizza"
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        <h1
          className="mt-5 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          La Strada <span className="text-yellow-500">Pizza</span>
        </h1>

        <p className="mt-2 max-w-[280px] text-center text-sm font-medium leading-snug text-zinc-400 sm:text-base">
          Massa artesanal, ingredientes premium e aquele sabor que{" "}
          <span className="font-bold text-yellow-500">vicia</span>.
        </p>

        <div className="mt-3 flex items-center gap-2 rounded-full bg-zinc-900/80 px-4 py-1.5 ring-1 ring-white/10">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-yellow-500" />
          </span>
          <span className="text-[11px] font-bold tracking-widest text-yellow-500 sm:text-xs">
            ABERTO A PARTIR DAS 18:00
          </span>
        </div>

        <nav className="mt-10 flex w-full flex-col gap-4" aria-label="Links da La Strada Pizza">
          <motion.a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackCardapioClick}
            className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-[length:200%_100%] px-6 py-5 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_0_35px_rgba(234,179,8,0.55)] sm:text-base"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/40 to-transparent la-strada-cta-shimmer"
              aria-hidden
            />
            <UtensilsCrossed className="relative z-10 size-5 shrink-0" strokeWidth={2.5} />
            <span className="relative z-10">Acesse Nosso Cardápio</span>
            <ArrowRight className="relative z-10 size-5 shrink-0" strokeWidth={3} />
          </motion.a>

          <motion.a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsappClick}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-yellow-500/70 bg-zinc-900/70 px-6 py-5 text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm sm:text-base"
            whileHover={{ scale: 1.03, borderColor: "rgba(234,179,8,1)" }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle
              className="size-5 shrink-0 text-yellow-500"
              strokeWidth={2.5}
              fill="currentColor"
              fillOpacity={0.15}
            />
            <span>Entrar na Comunidade do WhatsApp</span>
          </motion.a>
        </nav>

        <p className="mt-12 text-center text-[11px] font-medium tracking-wide text-zinc-600">
          © {new Date().getFullYear()} La Strada Pizza · Todos os direitos reservados
        </p>
      </div>
    </main>
  );
}
