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
    nav: ["Roteiros", "Destinos", "Sobre", "Tour", "Contato"],
    cta: "Planejar viagem",
    heroTitle: "Venha desbravar a Rainha das Cidades",
    heroSub: "Roteiros autorais por Istambul, do Bósforo aos bazares, com guias locais e tempo para sentir cada lugar.",
    btn1: "Montar minha viagem",
    btn2: "Ver roteiros",
    aboutTitle: "Istambul: onde a história toca a alma e a jornada te transforma",
    aboutP1: "Mais do que cruzar continentes, nossas rotas conectam você à essência de uma cultura que molda a alma e desperta novas versões de quem somos. Uma travessia profunda que não apenas mostra o mundo, mas transforma quem o caminha.",
    aboutP2: "Entre o peso dos séculos e a energia vibrante de uma metrópole que une dois continentes, cada esquina de Istambul guarda uma história esperando por você.",
    destTitle: "Três lugares para começar a sua Istambul",
    destSub: "Passe o mouse ou toque para conhecer cada um.",
    d: [{ title: "Mesquita Azul", desc: "Sultanahmet Camii, com seus seis minaretes e azulejos azuis por dentro.", detail: "Cúpulas em cascata, fé e arte otomana no coração histórico da cidade." },{ title: "Santa Sofia", desc: "Catedral, mesquita e museu: séculos de história sob uma só cúpula.", detail: "Mosaicos dourados e uma cúpula que parece flutuar contam a passagem de Bizâncio a Constantinopla." },{ title: "Grand Bazaar", desc: "Um dos maiores mercados cobertos do mundo, de tapetes a especiarias.", detail: "Mais de quatro mil lojas em ruelas cobertas: joias, cerâmicas e a hospitalidade turca." }],
    tourTitle: "Um tour feito para você",
    tourText: "Nosso tour pela cidade é totalmente personalizado. Assim você aproveita ao máximo o seu tempo em Istambul, seja numa longa conexão entre voos ou em alguns dias explorando a cidade.",
    tour: [{ title: "Escala longa", desc: "Poucas horas entre voos? Montamos um roteiro que cabe no seu tempo." },{ title: "Poucos dias", desc: "Os grandes clássicos e os cantos que só os locais conhecem." },{ title: "No seu ritmo", desc: "Você escolhe os lugares, a duração e o que fica de fora." }],
    tourCta: "Personalizar meu tour",
    contactTitle: "Vamos planejar a sua viagem?",
    contactText: "Conte quando você chega e o que quer viver. Respondemos com um roteiro pensado para você.",
    contactLabels: ["Telefone / WhatsApp", "E-mail", "Instagram"],
    footerTag: "Roteiros personalizados em Istambul.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    nav: ["Trips", "Destinations", "About", "Tour", "Contact"],
    cta: "Plan a trip",
    heroTitle: "Come explore the Queen of Cities",
    heroSub: "Handcrafted itineraries through Istanbul, from the Bosphorus to the bazaars, with local guides and time to feel every place.",
    btn1: "Build my trip",
    btn2: "See itineraries",
    aboutTitle: "Istanbul: where history touches the soul and the journey transforms you",
    aboutP1: "More than crossing continents, our routes connect you to the essence of a culture that shapes the soul and awakens new versions of who we are. A deep crossing that doesn't just show the world, but transforms those who walk it.",
    aboutP2: "Between the weight of centuries and the vibrant energy of a metropolis joining two continents, every corner of Istanbul holds a story waiting for you.",
    destTitle: "Three places to start your Istanbul",
    destSub: "Hover or tap to explore each one.",
    d: [{ title: "Blue Mosque", desc: "Sultanahmet Camii, with six minarets and blue tiles inside.", detail: "Cascading domes, faith and Ottoman art in the historic heart of the city." },{ title: "Hagia Sophia", desc: "Cathedral, mosque and museum: centuries of history under one dome.", detail: "Golden mosaics and a dome that seems to float tell the shift from Byzantium to Constantinople." },{ title: "Grand Bazaar", desc: "One of the largest covered markets in the world, from rugs to spices.", detail: "Over four thousand shops along covered lanes: jewelry, ceramics and Turkish hospitality." }],
    tourTitle: "A tour made for you",
    tourText: "Our city tour is fully customized for you. This way you will get the most of your time in Istanbul, whether it's a long flight connection or a few days exploring the city.",
    tour: [{ title: "Long layover", desc: "A few hours between flights? We build a plan that fits your time." },{ title: "A few days", desc: "The great classics and the corners only locals know." },{ title: "Your pace", desc: "You choose the places, the length and what to skip." }],
    tourCta: "Customize my tour",
    contactTitle: "Shall we plan your trip?",
    contactText: "Tell us when you arrive and what you want to live. We reply with an itinerary made for you.",
    contactLabels: ["Phone / WhatsApp", "Email", "Instagram"],
    footerTag: "Tailor-made tours in Istanbul.",
    footerRights: "All rights reserved.",
  },
  es: {
    nav: ["Viajes", "Destinos", "Nosotros", "Tour", "Contacto"],
    cta: "Planificar viaje",
    heroTitle: "Ven a descubrir la Reina de las Ciudades",
    heroSub: "Itinerarios de autor por Estambul, del Bósforo a los bazares, con guías locales y tiempo para sentir cada lugar.",
    btn1: "Armar mi viaje",
    btn2: "Ver itinerarios",
    aboutTitle: "Estambul: donde la historia toca el alma y el viaje te transforma",
    aboutP1: "Más que cruzar continentes, nuestras rutas te conectan con la esencia de una cultura que moldea el alma y despierta nuevas versiones de quienes somos. Una travesía profunda que no solo muestra el mundo, sino que transforma a quien lo recorre.",
    aboutP2: "Entre el peso de los siglos y la energía vibrante de una metrópoli que une dos continentes, cada esquina de Estambul guarda una historia esperándote.",
    destTitle: "Tres lugares para empezar tu Estambul",
    destSub: "Pasa el cursor o toca para conocer cada uno.",
    d: [{ title: "Mezquita Azul", desc: "Sultanahmet Camii, con seis minaretes y azulejos azules en su interior.", detail: "Cúpulas en cascada, fe y arte otomano en el corazón histórico de la ciudad." },{ title: "Santa Sofía", desc: "Catedral, mezquita y museo: siglos de historia bajo una sola cúpula.", detail: "Mosaicos dorados y una cúpula que parece flotar cuentan el paso de Bizancio a Constantinopla." },{ title: "Gran Bazar", desc: "Uno de los mercados cubiertos más grandes del mundo, de alfombras a especias.", detail: "Más de cuatro mil tiendas en callejones cubiertos: joyas, cerámica y hospitalidad turca." }],
    tourTitle: "Un tour hecho para ti",
    tourText: "Nuestro tour por la ciudad está totalmente personalizado. Así aprovecharás al máximo tu tiempo en Estambul, ya sea en una larga conexión entre vuelos o en unos días explorando la ciudad.",
    tour: [{ title: "Escala larga", desc: "¿Pocas horas entre vuelos? Armamos un plan que cabe en tu tiempo." },{ title: "Pocos días", desc: "Los grandes clásicos y los rincones que solo conocen los locales." },{ title: "A tu ritmo", desc: "Tú eliges los lugares, la duración y lo que se queda fuera." }],
    tourCta: "Personalizar mi tour",
    contactTitle: "¿Planificamos tu viaje?",
    contactText: "Cuéntanos cuándo llegas y qué quieres vivir. Responderemos con un itinerario pensado para ti.",
    contactLabels: ["Teléfono / WhatsApp", "Correo", "Instagram"],
    footerTag: "Tours personalizados en Estambul.",
    footerRights: "Todos los derechos reservados.",
  },
  tr: {
    nav: ["Rotalar", "Destinasyonlar", "Hakkımızda", "Tur", "İletişim"],
    cta: "Seyahat planla",
    heroTitle: "Şehirlerin Kraliçesi'ni keşfetmeye gel",
    heroSub: "Boğaz'dan çarşılara, yerel rehberlerle ve her mekânı hissetmeye zaman bırakan özel İstanbul rotaları.",
    btn1: "Seyahatimi oluştur",
    btn2: "Rotaları gör",
    aboutTitle: "İstanbul: tarihin ruha dokunduğu ve yolculuğun seni dönüştürdüğü yer",
    aboutP1: "Kıtaları aşmaktan fazlası: rotalarımız seni ruhu şekillendiren ve kim olduğumuzun yeni hâllerini uyandıran bir kültürün özüne bağlar. Dünyayı yalnızca göstermeyen, onu yürüyeni dönüştüren derin bir yolculuk.",
    aboutP2: "Yüzyılların ağırlığı ile iki kıtayı birleştiren metropolün canlı enerjisi arasında, İstanbul'un her köşesi seni bekleyen bir hikâye saklıyor.",
    destTitle: "İstanbul'unuza başlamak için üç yer",
    destSub: "Keşfetmek için üzerine gelin veya dokunun.",
    d: [{ title: "Sultanahmet Camii", desc: "Altı minaresi ve içindeki mavi çinileriyle ünlü Mavi Cami.", detail: "Kademeli kubbeler, inanç ve Osmanlı sanatı şehrin tarihî kalbinde." },{ title: "Ayasofya", desc: "Katedral, cami ve müze: tek bir kubbe altında yüzyıllar.", detail: "Altın mozaikler ve havada duran kubbe, Bizans'tan İstanbul'a geçişi anlatır." },{ title: "Kapalıçarşı", desc: "Dünyanın en büyük kapalı pazarlarından biri; halıdan baharata.", detail: "Kapalı sokaklarda dört binden fazla dükkân: mücevher, seramik ve Türk misafirperverliği." }],
    tourTitle: "Size özel bir tur",
    tourText: "Şehir turumuz tamamen size göre hazırlanır. Uzun bir uçuş aktarması da olsa, birkaç gün şehri keşfetmek de olsa İstanbul'da vaktinizi en iyi şekilde değerlendirirsiniz.",
    tour: [{ title: "Uzun aktarma", desc: "Uçuşlar arasında birkaç saat mi var? Zamanınıza sığan bir plan yaparız." },{ title: "Birkaç gün", desc: "Büyük klasikler ve yalnızca yerlilerin bildiği köşeler." },{ title: "Kendi temponuzda", desc: "Mekânları, süreyi ve neyi atlayacağınızı siz seçersiniz." }],
    tourCta: "Turumu kişiselleştir",
    contactTitle: "Seyahatinizi planlayalım mı?",
    contactText: "Ne zaman geldiğinizi ve neler yaşamak istediğinizi yazın. Size özel bir rotayla dönelim.",
    contactLabels: ["Telefon / WhatsApp", "E-posta", "Instagram"],
    footerTag: "İstanbul'da kişiye özel turlar.",
    footerRights: "Tüm hakları saklıdır.",
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
