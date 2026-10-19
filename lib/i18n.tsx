"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const LANGS = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
] as const;
export type Lang = (typeof LANGS)[number]["code"];

const dict = {
  pt: {
    nav: ["Roteiros", "Destinos", "Sobre", "Tour", "Contato"],
    cta: "Planejar viagem",
    heroTitle: "Venha desbravar a Rainha das Cidades",
    heroSub: "Acompanhamento privado e exclusivo por Istambul: do Bósforo aos bazares, com guia credenciada para você vivenciar cada lugar no seu ritmo.",
    btn1: "Montar minha viagem",
    btn2: "Ver roteiros",
    aboutTitle: "Istambul: onde a história toca a alma e a jornada te transforma",
    aboutP1: "Mais do que cruzar continentes, nossas rotas conectam você à essência de uma cultura que molda a alma e desperta novas versões de quem somos. Uma travessia profunda que não apenas mostra o mundo, mas transforma quem o caminha.",
    aboutP2: "Entre o peso dos séculos e a energia vibrante de uma metrópole que une dois continentes, cada esquina de Istambul guarda uma história esperando por você.",
    destTitle: "Três lugares para começar a sua Istambul",
    destSub: "Passe o mouse ou toque para conhecer cada um.",
    d: [{ title: "Mesquita Azul", desc: "Sultanahmet Camii, com seus seis minaretes e azulejos azuis por dentro.", detail: "Cúpulas em cascata, fé e arte otomana no coração histórico da cidade." },{ title: "Santa Sofia", desc: "Catedral, mesquita e museu: séculos de história sob uma só cúpula.", detail: "Mosaicos dourados e uma cúpula que parece flutuar contam a passagem de Bizâncio a Constantinopla." },{ title: "Grand Bazaar", desc: "Um dos maiores mercados cobertos do mundo, de tapetes a especiarias.", detail: "Mais de quatro mil lojas em ruelas cobertas: joias, cerâmicas e a hospitalidade turca." }],
    tourTitle: "Um tour feito para você",
    tourText: "A consultoria de roteiro e o acompanhamento guiado são 100% personalizados para as suas preferências. Assim você otimiza seu tempo na cidade, seja numa pausa de escala ou em alguns dias descobrindo Istambul.",
    tour: [{ title: "Escala longa", desc: "Poucas horas entre voos? Montamos um roteiro que cabe no seu tempo." },{ title: "Poucos dias", desc: "Os grandes clássicos e os cantos que só os locais conhecem." },{ title: "No seu ritmo", desc: "Você escolhe os lugares, a duração e o que fica de fora." }],
    tourCta: "Personalizar minha viagem",
    contactTitle: "Vamos planejar a sua viagem?",
    contactText: "Conte quando você chega e o que quer viver. Respondemos com um itinerário privativo pensado para você.",
    contactLabels: ["Telefone / WhatsApp", "E-mail", "Instagram"],
    footerTag: "Roteiros personalizados em Istambul.",
    footerRights: "Todos os direitos reservados.",
    guideTitle: "Quer explorar a cidade com dicas locais?",
    guideText: "Solicite o guia digital \"Descubra Istambul\" e receba um material exclusivo com recomendações e conteúdos para preparar a sua viagem.",
    guideCta: "Quero o Guia Digital \"Descubra Istambul\"",
  },
  en: {
    nav: ["Trips", "Destinations", "About", "Tour", "Contact"],
    cta: "Plan a trip",
    heroTitle: "Come explore the Queen of Cities",
    heroSub: "Private, exclusive guided company through Istanbul: from the Bosphorus to the bazaars, with an accredited guide so you can experience every place at your own pace.",
    btn1: "Build my trip",
    btn2: "See itineraries",
    aboutTitle: "Istanbul: where history touches the soul and the journey transforms you",
    aboutP1: "More than crossing continents, our routes connect you to the essence of a culture that shapes the soul and awakens new versions of who we are. A deep crossing that doesn't just show the world, but transforms those who walk it.",
    aboutP2: "Between the weight of centuries and the vibrant energy of a metropolis joining two continents, every corner of Istanbul holds a story waiting for you.",
    destTitle: "Three places to start your Istanbul",
    destSub: "Hover or tap to explore each one.",
    d: [{ title: "Blue Mosque", desc: "Sultanahmet Camii, with six minarets and blue tiles inside.", detail: "Cascading domes, faith and Ottoman art in the historic heart of the city." },{ title: "Hagia Sophia", desc: "Cathedral, mosque and museum: centuries of history under one dome.", detail: "Golden mosaics and a dome that seems to float tell the shift from Byzantium to Constantinople." },{ title: "Grand Bazaar", desc: "One of the largest covered markets in the world, from rugs to spices.", detail: "Over four thousand shops along covered lanes: jewelry, ceramics and Turkish hospitality." }],
    tourTitle: "A tour made for you",
    tourText: "Itinerary consulting and guided accompaniment are 100% tailored to your preferences. This way you make the most of your time in the city, whether on a layover break or a few days discovering Istanbul.",
    tour: [{ title: "Long layover", desc: "A few hours between flights? We build a plan that fits your time." },{ title: "A few days", desc: "The great classics and the corners only locals know." },{ title: "Your pace", desc: "You choose the places, the length and what to skip." }],
    tourCta: "Customize my trip",
    contactTitle: "Shall we plan your trip?",
    contactText: "Tell us when you arrive and what you want to experience. We reply with a private itinerary made for you.",
    contactLabels: ["Phone / WhatsApp", "Email", "Instagram"],
    footerTag: "Tailor-made tours in Istanbul.",
    footerRights: "All rights reserved.",
    guideTitle: "Want to explore the city with local tips?",
    guideText: "Request the \"Discover Istanbul\" digital guide and receive exclusive material with recommendations and content to prepare your trip.",
    guideCta: "I want the \"Discover Istanbul\" Digital Guide",
  },
  es: {
    nav: ["Viajes", "Destinos", "Nosotros", "Tour", "Contacto"],
    cta: "Planificar viaje",
    heroTitle: "Ven a descubrir la Reina de las Ciudades",
    heroSub: "Acompañamiento privado y exclusivo por Estambul: del Bósforo a los bazares, con guía acreditada para que vivas cada lugar a tu ritmo.",
    btn1: "Armar mi viaje",
    btn2: "Ver itinerarios",
    aboutTitle: "Estambul: donde la historia toca el alma y el viaje te transforma",
    aboutP1: "Más que cruzar continentes, nuestras rutas te conectan con la esencia de una cultura que moldea el alma y despierta nuevas versiones de quienes somos. Una travesía profunda que no solo muestra el mundo, sino que transforma a quien lo recorre.",
    aboutP2: "Entre el peso de los siglos y la energía vibrante de una metrópoli que une dos continentes, cada esquina de Estambul guarda una historia esperándote.",
    destTitle: "Tres lugares para empezar tu Estambul",
    destSub: "Pasa el cursor o toca para conocer cada uno.",
    d: [{ title: "Mezquita Azul", desc: "Sultanahmet Camii, con seis minaretes y azulejos azules en su interior.", detail: "Cúpulas en cascada, fe y arte otomano en el corazón histórico de la ciudad." },{ title: "Santa Sofía", desc: "Catedral, mezquita y museo: siglos de historia bajo una sola cúpula.", detail: "Mosaicos dorados y una cúpula que parece flotar cuentan el paso de Bizancio a Constantinopla." },{ title: "Gran Bazar", desc: "Uno de los mercados cubiertos más grandes del mundo, de alfombras a especias.", detail: "Más de cuatro mil tiendas en callejones cubiertos: joyas, cerámica y hospitalidad turca." }],
    tourTitle: "Un tour hecho para ti",
    tourText: "La consultoría de itinerario y el acompañamiento guiado son 100% personalizados según tus preferencias. Así optimizas tu tiempo en la ciudad, ya sea en una pausa de escala o en unos días descubriendo Estambul.",
    tour: [{ title: "Escala larga", desc: "¿Pocas horas entre vuelos? Armamos un plan que cabe en tu tiempo." },{ title: "Pocos días", desc: "Los grandes clásicos y los rincones que solo conocen los locales." },{ title: "A tu ritmo", desc: "Tú eliges los lugares, la duración y lo que se queda fuera." }],
    tourCta: "Personalizar mi viaje",
    contactTitle: "¿Planificamos tu viaje?",
    contactText: "Cuéntanos cuándo llegas y qué quieres vivir. Respondemos con un itinerario privado pensado para ti.",
    contactLabels: ["Teléfono / WhatsApp", "Correo", "Instagram"],
    footerTag: "Tours personalizados en Estambul.",
    footerRights: "Todos los derechos reservados.",
    guideTitle: "¿Quieres explorar la ciudad con consejos locales?",
    guideText: "Solicita la guía digital \"Descubre Estambul\" y recibe un material exclusivo con recomendaciones y contenidos para preparar tu viaje.",
    guideCta: "Quiero la Guía Digital \"Descubre Estambul\"",
  },
  it: {
    nav: ["Itinerari", "Destinazioni", "Chi siamo", "Tour", "Contatti"],
    cta: "Pianifica il viaggio",
    heroTitle: "Vieni a scoprire la Regina delle Città",
    heroSub: "Accompagnamento privato ed esclusivo a Istanbul: dal Bosforo ai bazar, con guida accreditata per vivere ogni luogo al tuo ritmo.",
    btn1: "Costruisci il mio viaggio",
    btn2: "Vedi gli itinerari",
    aboutTitle: "Istanbul: dove la storia tocca l'anima e il viaggio ti trasforma",
    aboutP1: "Più che attraversare continenti, i nostri percorsi ti collegano all'essenza di una cultura che plasma l'anima e risveglia nuove versioni di ciò che siamo. Una traversata profonda che non si limita a mostrare il mondo, ma trasforma chi lo percorre.",
    aboutP2: "Tra il peso dei secoli e l'energia vibrante di una metropoli che unisce due continenti, ogni angolo di Istanbul custodisce una storia che ti aspetta.",
    destTitle: "Tre luoghi da cui iniziare la tua Istanbul",
    destSub: "Passa il mouse o tocca per scoprire ciascuno.",
    d: [{ title: "Moschea Blu", desc: "Sultanahmet Camii, con sei minareti e piastrelle blu all'interno.", detail: "Cupole a cascata, fede e arte ottomana nel cuore storico della città." }, { title: "Santa Sofia", desc: "Cattedrale, moschea e museo: secoli di storia sotto un'unica cupola.", detail: "Mosaici dorati e una cupola che sembra fluttuare raccontano il passaggio da Bisanzio a Costantinopoli." }, { title: "Gran Bazar", desc: "Uno dei più grandi mercati coperti del mondo, dai tappeti alle spezie.", detail: "Oltre quattromila negozi tra vicoli coperti: gioielli, ceramiche e ospitalità turca." }],
    tourTitle: "Un tour fatto per te",
    tourText: "La consulenza sull'itinerario e l'accompagnamento guidato sono personalizzati al 100% sulle tue preferenze. Così ottimizzi il tuo tempo in città, che sia durante uno scalo o in qualche giorno alla scoperta di Istanbul.",
    tour: [{ title: "Scalo lungo", desc: "Poche ore tra un volo e l'altro? Prepariamo un piano che si adatta al tuo tempo." }, { title: "Pochi giorni", desc: "I grandi classici e gli angoli che solo i locali conoscono." }, { title: "Al tuo ritmo", desc: "Scegli tu i luoghi, la durata e cosa lasciare fuori." }],
    tourCta: "Personalizza il mio viaggio",
    contactTitle: "Pianifichiamo il tuo viaggio?",
    contactText: "Dicci quando arrivi e cosa vuoi vivere. Ti rispondiamo con un itinerario privato pensato per te.",
    contactLabels: ["Telefono / WhatsApp", "E-mail", "Instagram"],
    footerTag: "Tour personalizzati a Istanbul.",
    footerRights: "Tutti i diritti riservati.",
    guideTitle: "Vuoi esplorare la città con consigli locali?",
    guideText: "Richiedi la guida digitale \"Scopri Istanbul\" e ricevi un materiale esclusivo con consigli e contenuti per preparare il tuo viaggio.",
    guideCta: "Voglio la Guida Digitale \"Scopri Istanbul\"",
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
