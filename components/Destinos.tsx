"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

const IMGS = ["/images/mesquita-azul.webp", "/images/santa-sofia.webp", "/images/grand-bazaar.webp"];

export default function Destinos() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.12]), { stiffness: 80, damping: 25, restDelta: 0.001 });

  return (
    <section id="destinos" className="mx-auto w-[88vw] py-16 md:w-[80vw] md:py-24">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
        <div ref={ref} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 md:sticky md:top-24 md:aspect-[4/5]">
          <motion.div style={{ scale }} className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={IMGS[active]} alt={t.d[active].title} fill className="object-cover" sizes="(min-width: 768px) 40vw, 88vw" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.destTitle}</h2>
            <p className="mt-4 text-base text-ink/60 sm:text-lg">{t.destSub}</p>
          </Reveal>
          <div className="mt-8 md:mt-12">
            {t.d.map((item, i) => {
              const on = active === i;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="relative cursor-pointer border-t border-ink/15 py-6 md:py-8"
                  >
                    <motion.h3
                      animate={{ color: on ? "#1a1613" : "rgba(26,22,19,0.45)" }}
                      className="text-2xl font-medium md:text-3xl"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p animate={{ color: on ? "rgba(26,22,19,0.75)" : "rgba(26,22,19,0.4)" }} className="mt-2 text-sm leading-relaxed sm:text-base">
                      {item.desc}
                    </motion.p>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden text-sm leading-relaxed text-ink/60 sm:text-base"
                        >
                          <span className="block pt-3">{item.detail}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <motion.span
                      initial={false}
                      animate={{ scaleX: on ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ originX: 0 }}
                      className="absolute -top-px left-0 h-[2px] w-full bg-turk"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
