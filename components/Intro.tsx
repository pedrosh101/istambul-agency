"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-sand"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            <Image src="/images/evilEye.png" alt="" width={120} height={120} priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
