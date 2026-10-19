"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { GUIDE_MAILTO } from "@/lib/nav";
import Reveal from "./Reveal";

export default function Guia() {
  const { t } = useLang();
  return (
    <section id="guia" className="mx-auto w-[88vw] py-8 md:w-[80vw] md:py-12">
      <div className="grid items-center gap-10 overflow-hidden rounded-[1.5rem] bg-ink p-6 text-white sm:p-10 md:grid-cols-[1.3fr_1fr] md:gap-16 md:rounded-[2rem] md:p-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.guideTitle}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">{t.guideText}</p>
          <a
            href={GUIDE_MAILTO(t.guideCta)}
            className="mt-8 inline-block w-full rounded-full bg-turk px-7 py-3.5 text-center font-medium text-white transition hover:brightness-110 sm:w-auto"
          >
            {t.guideCta}
          </a>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ rotate: 2, scale: 1.03 }}
          className="mx-auto w-[60%] max-w-[300px] md:w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/livro.jpg" alt={t.guideTitle} className="h-auto w-full rounded-lg shadow-2xl shadow-black/50" />
        </motion.div>
      </div>
    </section>
  );
}
