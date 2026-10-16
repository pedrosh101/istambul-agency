"use client";
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/lib/nav";
import Reveal from "./Reveal";

export default function Contato() {
  const { t } = useLang();
  const items = [
    { Icon: Phone, label: t.contactLabels[0], value: CONTACT.phone, href: CONTACT.phoneHref },
    { Icon: Mail, label: t.contactLabels[1], value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: Instagram, label: t.contactLabels[2], value: CONTACT.instagramHandle, href: CONTACT.instagram },
  ];
  return (
    <section id="contato" className="mx-auto w-[88vw] py-16 md:w-[80vw] md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">{t.contactTitle}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed sm:text-lg">{t.contactText}</p>
        </Reveal>
        <div>
          {items.map(({ Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 border-t border-ink/15 py-5 last:border-b md:py-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5 transition group-hover:bg-turk group-hover:text-white">
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-ink/55">{label}</span>
                  <span className="block break-words text-lg font-medium sm:text-xl md:text-2xl">{value}</span>
                </span>
                <ArrowUpRight size={20} className="shrink-0 text-ink/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-turk" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
