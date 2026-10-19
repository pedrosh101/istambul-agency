"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Tour() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="tour" className="mx-auto w-[88vw] py-16 md:w-[80vw] md:py-24">
      <div className="grid gap-6 md:grid-cols-2 md:gap-20">
        <Reveal><h2 className="text-3xl sm:text-4xl md:text-5xl">{t.tourTitle}</h2></Reveal>
        <Reveal delay={0.1}><p className="text-base leading-relaxed sm:text-lg">{t.tourText}</p></Reveal>
      </div>

      <div ref={ref} className="relative mt-10 h-[40vh] overflow-hidden rounded-2xl md:mt-14 md:h-[60vh]">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
          <Image src="/images/mesquita-azul.webp" alt="" fill className="object-cover" sizes="88vw" />
        </motion.div>
      </div>

      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
        {t.tour.map((item, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="border-t-2 border-turk pt-5">
              <h3 className="text-xl font-medium md:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <a href="#contato" className="inline-block w-full rounded-full bg-turk px-7 py-3.5 text-center font-medium text-white transition hover:brightness-110 sm:w-auto">
          {t.tourCta}
        </a>
      </Reveal>
    </section>
  );
}
