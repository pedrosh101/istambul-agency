"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

const DESTINOS_DATA = [
  {
    id: 1,
    title: "Mesquita Azul",
    desc: "A imponente Sultanahmet Camii domina o horizonte com seus seis minaretes icônicos e impressionantes azulejos internos.",
    topTitle: "Sultanahmet, a joia histórica.",
    topDesc: "A arquitetura clássica otomana se revela em cúpulas que tocam o céu. Um ponto onde a fé, a arte e a história milenar da cidade se encontram de forma monumental.",
    img: "/images/mesquita-azul.jpg",
  },
  {
    id: 2,
    title: "Santa Sofia",
    desc: "Antiga catedral, mesquita e museum, a Hagia Sophia carrega séculos de transformações e uma arquitetura impressionante.",
    topTitle: "Hagia Sophia, herança de impérios.",
    topDesc: "Seus mosaicos dourados e sua gigantesca cúpula flutuante contam a história da transição cultural entre Bizâncio e Constantinopla em cada detalhe de pedra.",
    img: "/images/santa-sofia.jpg",
  },
  {
    id: 3,
    title: "Grand Bazaar",
    desc: "Um dos maiores e mais antigos mercados abertos do mundo, transbordando cores, aromas, tapetes e especiarias.",
    topTitle: "O pulsar vibrante do comércio.",
    topDesc: "Caminhar por seus milhares de labirintos cobertos é uma viagem sensorial única. Especiarias raras, joias artesanais e a autêntica hospitalidade turca.",
    img: "/images/grand-bazaar.jpg",
  },
];

export default function Destinos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const smoothScale = useSpring(rawScale, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="destinos" className="mx-auto max-w-[80vw] px-6 py-24 md:px-10 font-futura">
      
      <div className="mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
          Destinos
        </span>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 items-start mb-8 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.h2
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl tracking-tight text-neutral-900"
          >
            {DESTINOS_DATA[activeIndex].topTitle}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-neutral-500 text-lg leading-relaxed md:max-w-md md:ml-auto"
          >
            {DESTINOS_DATA[activeIndex].topDesc}
          </motion.p>
        </AnimatePresence>
      </div>


      <div 
        ref={containerRef}
        className="relative w-full h-[60vh] overflow-hidden rounded-2xl bg-transparent mb-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ scale: smoothScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={DESTINOS_DATA[activeIndex].img}
              alt={DESTINOS_DATA[activeIndex].title}
              fill
              className="object-cover"
              sizes="80vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid inferior com colunas controladas por Hover */}
      <div className="grid gap-12 pt-8 border-t border-neutral-200 md:grid-cols-3">
        {DESTINOS_DATA.map((destino, index) => {
          const isSelected = activeIndex === index;
          return (
            <div
              key={destino.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <motion.h3 
                  animate={{ color: isSelected ? "#171717" : "#737373" }}
                  className="text-lg font-medium mb-3 transition-colors duration-300"
                >
                  {destino.title}
                </motion.h3>
                <motion.p 
                  animate={{ color: isSelected ? "#525252" : "#a3a3a3" }}
                  className="text-sm leading-relaxed transition-colors duration-300"
                >
                  {destino.desc}
                </motion.p>
              </div>
              
              <div className="mt-6 h-[2px] w-full bg-neutral-100 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: isSelected ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-turk w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
