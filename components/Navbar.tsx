"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { NAV_HREFS } from "@/lib/nav";
import LanguageSelect from "./LanguageSelect";

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 sm:top-6 sm:w-[calc(100%-2rem)]">
      <nav className="flex items-center justify-between gap-2 rounded-full bg-ink/80 py-2 pl-4 pr-2 backdrop-blur-md sm:gap-4 sm:pl-5">
        <a href="#" aria-label="Home" className="shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={110} height={32} className="h-7 w-auto sm:h-8" priority />
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-white/70 lg:flex">
          {t.nav.map((label, i) => (
            <li key={label}>
              <a href={NAV_HREFS[i]} className="transition hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <LanguageSelect />
          <a href="#contato" className="hidden rounded-full bg-turk px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 sm:block">
            {t.cta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-3xl bg-ink/90 p-3 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {t.nav.map((label, i) => (
                <li key={label}>
                  <a href={NAV_HREFS[i]} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-white/85 hover:bg-white/10">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contato" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-turk px-5 py-3 text-center font-medium text-white sm:hidden">
              {t.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
