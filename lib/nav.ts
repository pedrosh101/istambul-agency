export const NAV_HREFS = ["#roteiros", "#destinos", "#sobre", "#contato"];
export const CONTACT = {
  phone: "+90 541 659 91 86",
  phoneHref: "tel:+905416599186",
  email: "descubraistambul@gmail.com",
  instagram: "https://www.instagram.com/descubraistambul/",
  instagramHandle: "@descubraistambul",
};

export const GUIDE_MAILTO = (subject: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
