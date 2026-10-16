"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const LANGS = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "tr", label: "Türkçe" },
] as const;
export type Lang = (typeof LANGS)[number]["code"];

const dict = {
  pt: {
    nav: ["Roteiros", "Destinos", "Sobre", "Diário", "Contato"],
    cta: "Planejar viagem",
    heroTitle: "Venha desbravar a Rainha das Cidades",
    heroSub: "Roteiros autorais por Istambul, do Bósforo aos bazares, com guias locais e tempo para sentir cada lugar.",
    btn1: "Montar minha viagem",
    btn2: "Ver roteiros",
    aboutTitle: "Istambul: onde a história toca a alma e a jornada te transforma",
    aboutP1: "Mais do que cruzar continentes, nossas rotas conectam você à essência de uma cultura que molda a alma e desperta novas versões de quem somos. Uma travessia profunda que não apenas mostra o mundo, mas transforma quem o caminha.",
    aboutP2: "Entre o peso dos séculos e a energia vibrante de uma metrópole que une dois continentes, cada esquina de Istambul guarda uma história esperando por você.",
  },
  en: {
    nav: ["Trips", "Destinations", "About", "Journal", "Contact"],
    cta: "Plan a trip",
    heroTitle: "Come explore the Queen of Cities",
    heroSub: "Handcrafted itineraries through Istanbul, from the Bosphorus to the bazaars, with local guides and time to feel every place.",
    btn1: "Build my trip",
    btn2: "See itineraries",
    aboutTitle: "Istanbul: where history touches the soul and the journey transforms you",
    aboutP1: "More than crossing continents, our routes connect you to the essence of a culture that shapes the soul and awakens new versions of who we are. A deep crossing that doesn't just show the world, but transforms those who walk it.",
    aboutP2: "Between the weight of centuries and the vibrant energy of a metropolis joining two continents, every corner of Istanbul holds a story waiting for you.",
  },
  es: {
    nav: ["Viajes", "Destinos", "Nosotros", "Diario", "Contacto"],
    cta: "Planificar viaje",
    heroTitle: "Ven a descubrir la Reina de las Ciudades",
    heroSub: "Itinerarios de autor por Estambul, del Bósforo a los bazares, con guías locales y tiempo para sentir cada lugar.",
    btn1: "Armar mi viaje",
    btn2: "Ver itinerarios",
    aboutTitle: "Estambul: donde la historia toca el alma y el viaje te transforma",
    aboutP1: "Más que cruzar continentes, nuestras rutas te conectan con la esencia de una cultura que moldea el alma y despierta nuevas versiones de quienes somos. Una travesía profunda que no solo muestra el mundo, sino que transforma a quien lo recorre.",
    aboutP2: "Entre el peso de los siglos y la energía vibrante de una metrópoli que une dos continentes, cada esquina de Estambul guarda una historia esperándote.",
  },
  tr: {
    nav: ["Turlar", "Destinasyonlar", "Hakkımızda", "Günlük", "İletişim"],
    cta: "Seyahat planla",
    heroTitle: "Şehirlerin Kraliçesi'ni keşfetmeye gel",
    heroSub: "Boğaz'dan çarşılara, yerel rehberlerle ve her mekânı hissetmeye zaman bırakan özel İstanbul rotaları.",
    btn1: "Seyahatimi oluştur",
    btn2: "Rotaları gör",
    aboutTitle: "İstanbul: tarihin ruha dokunduğu ve yolculuğun seni dönüştürdüğü yer",
    aboutP1: "Kıtaları aşmaktan fazlası: rotalarımız seni ruhu şekillendiren ve kim olduğumuzun yeni hâllerini uyandıran bir kültürün özüne bağlar. Dünyayı yalnızca göstermeyen, onu yürüyeni dönüştüren derin bir yolculuk.",
    aboutP2: "Yüzyılların ağırlığı ile iki kıtayı birleştiren metropolün canlı enerjisi arasında, İstanbul'un her köşesi seni bekleyen bir hikâye saklıyor.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["pt"] };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
