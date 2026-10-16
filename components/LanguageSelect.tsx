"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGS, useLang } from "@/lib/i18n";

export default function LanguageSelect() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden uppercase">{current.code}</span>
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-2xl bg-ink/95 p-1.5 shadow-xl backdrop-blur"
          >
            {LANGS.map((l) => (
              <li key={l.code}>
                <button
                  role="option"
                  aria-selected={l.code === lang}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10"
                >
                  {l.label}
                  {l.code === lang && <Check size={14} className="text-turk" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
