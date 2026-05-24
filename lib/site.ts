export const site = {
  name: "Restaurant Hoffschulte",
  shortName: "Hoffschulte",
  url: "https://www.restaurant-hoffschulte.de",
  description:
    "Westfälisches Landgasthaus in Münster - Frischeküche, Biergarten unter 90 Jahre alten Platanen, Wild aus eigener Jagd. In sechster Generation geführt von Familie Hoffschulte.",
  address: {
    street: "Alter Postweg 53",
    postal: "48167",
    city: "Münster",
    region: "Nordrhein-Westfalen",
    country: "DE",
  },
  phone: "+49 2506 7462",
  phoneDisplay: "02506 7462",
  whatsapp: "+49 151 40333499",
  whatsappDisplay: "0151 40333499",
  email: "Restaurant-Hoffschulte@t-online.de",
  hours: {
    fridaySaturday: "17.00 – 22.00 Uhr",
    sundayHoliday: "12.00 – 14.30 Uhr & 17.00 – 21.30 Uhr",
    note: "Sonderöffnungszeiten nach Absprache.",
  },
  geo: {
    latitude: 51.9007,
    longitude: 7.6951,
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Alter+Postweg+53,+48167+M%C3%BCnster&output=embed",
  mapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Alter+Postweg+53,+48167+M%C3%BCnster",
  social: {
    instagram: "https://www.instagram.com/restaurant_hoffschulte/",
    facebook:
      "https://www.facebook.com/p/Restaurant-Kaffeehaus-Hoffschulte-100041946136679/",
  },
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Restaurant", href: "/restaurant" },
  { label: "Biergarten", href: "/biergarten" },
  { label: "Räumlichkeiten", href: "/raeumlichkeiten" },
  { label: "Außer-Haus", href: "/ausser-haus" },
  { label: "Wild", href: "/wild" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];
