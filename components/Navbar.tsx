"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import LanguageSelect from "./LanguageSelect";

const hrefs = ["#roteiros", "#destinos", "#sobre", "#diario", "#contato"];

export default function Navbar() {
  const { t } = useLang();
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between gap-4 rounded-full bg-ink/80 py-2 pl-5 px-2 backdrop-blur-md">
        <a href="#" aria-label="Home" className="shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={110} height={32} className="h-8 w-auto pl-1" priority />
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-white/70 lg:flex">
          {t.nav.map((label, i) => (
            <li key={hrefs[i]}>
              <a href={hrefs[i]} className="transition hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <LanguageSelect />
          <a
            href="#contato"
            className="rounded-full bg-turk px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
