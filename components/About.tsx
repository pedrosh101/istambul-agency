"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const smoothScale = useSpring(rawScale, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="sobre" className="mx-auto grid max-w-[80vw] items-center gap-20 px-6 py-24 md:grid-cols-2 md:px-10">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 variants={fadeInVariants} className="text-4xl md:text-5xl">
          {t.aboutTitle}
        </motion.h2>
        <motion.p variants={fadeInVariants} className="mt-8 text-lg leading-relaxed">
          {t.aboutP1}
        </motion.p>
        <motion.p variants={fadeInVariants} className="mt-4 text-lg leading-relaxed">
          {t.aboutP2}
        </motion.p>
      </motion.div>

      <div 
        ref={containerRef} 
        className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl bg-zinc-100"
      >
        <motion.div 
          style={{ scale: smoothScale }} 
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/imagem1.jpeg" 
            alt="Istambul" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 50vw, 100vw" 
            priority
          />
        </motion.div>
      </div>

    </section>
  );
}
