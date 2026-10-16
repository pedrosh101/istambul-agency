"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

// Entra logo depois da Intro (2s + 0.9s de saída)
const D = 2.5;

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="p-4">
      <div className="relative flex min-h-[calc(100svh-2rem)] items-end overflow-hidden rounded-[2rem]">
        <Image src="/images/fundo.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 md:px-[10%] md:pb-24">
          <motion.h1
            key={t.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: D, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            key={t.heroSub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: D + 0.25 }}
            className="mt-6 max-w-xl text-lg text-white/85"
          >
            {t.heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: D + 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contato" className="rounded-full bg-turk px-7 py-3.5 font-medium text-white transition hover:brightness-110">
              {t.btn1}
            </a>
            <a href="#roteiros" className="rounded-full border border-white/70 px-7 py-3.5 font-medium text-white transition hover:bg-white hover:text-ink">
              {t.btn2}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
