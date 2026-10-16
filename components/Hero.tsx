"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

// Atraso só na primeira entrada (depois da Intro). Trocar idioma NÃO reanima.
const D = 2.5;

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="p-3 sm:p-4">
      <div className="relative flex min-h-[calc(100svh-1.5rem)] items-end overflow-hidden rounded-[1.5rem] sm:min-h-[calc(100svh-2rem)] sm:rounded-[2rem]">
        <Image src="/images/fundo.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="relative z-10 w-full px-5 pb-10 sm:px-12 sm:pb-16 md:px-[10%] md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: D, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl md:text-7xl"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: D + 0.25 }}
            className="mt-5 max-w-xl text-base text-white/85 sm:mt-6 sm:text-lg"
          >
            {t.heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: D + 0.45 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <a href="#contato" className="rounded-full bg-turk px-7 py-3.5 text-center font-medium text-white transition hover:brightness-110">
              {t.btn1}
            </a>
            <a href="#destinos" className="rounded-full border border-white/70 px-7 py-3.5 text-center font-medium text-white transition hover:bg-white hover:text-ink">
              {t.btn2}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
