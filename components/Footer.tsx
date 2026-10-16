"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { CONTACT, NAV_HREFS } from "@/lib/nav";
import Reveal from "./Reveal";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-8 rounded-t-[1.5rem] bg-ink text-white sm:rounded-t-[2rem]">
      <Reveal className="mx-auto w-[88vw] py-12 md:w-[80vw] md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image src="/images/logo.png" alt="Logo" width={130} height={38} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-white/65">{t.footerTag}</p>
          </div>
          <ul className="space-y-2 text-white/75">
            {t.nav.map((label, i) => (
              <li key={label}><a href={NAV_HREFS[i]} className="transition hover:text-white">{label}</a></li>
            ))}
          </ul>
          <ul className="space-y-2 break-words text-white/75">
            <li><a href={CONTACT.phoneHref} className="transition hover:text-white">{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="transition hover:text-white">{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">{CONTACT.instagramHandle}</a></li>
          </ul>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Descubra Istambul. {t.footerRights}
        </p>
      </Reveal>
    </footer>
  );
}
