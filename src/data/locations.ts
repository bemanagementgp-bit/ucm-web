export interface Location {
  id: string;
  name: string;
  institutionName: string;
  address: string;
  city: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  servicesAvailable: string[];
  professionals: string[];
  patientPortalUrl: string;
  patientPortalName: string;
  appointmentUrl: string;
  mapsUrl: string;
  mapsEmbed: string;
  image: string;
  accessibility: string;
  directions: string;
  institutionWebsite: string;
}

export const locations: Location[] = [
  {
    id: "imp",
    name: "Sede La Plata",
    institutionName: "Instituto Médico Platense",
    address: "Av. 51 esq. Av. 1 Nº 315 (Primer piso), La Plata",
    city: "La Plata",
    description:
      "UCM funciona dentro del Instituto Médico Platense, una institución de referencia en la ciudad de La Plata con amplia trayectoria en atención médica.",
    phone: "+54 221 412 0900",
    whatsapp: "+54 9 221 5410205",
    email: "info@institutomedicoplatense.com",
    hours: "Lunes a viernes de 8 a 20 hs · Sábados de 8 a 12 hs",
    servicesAvailable: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "mastologia",
      "intervencionismo-mamario",
      "biopsias",
      "marcaciones",
      "oncologia-clinica",
      "cirugia-mamaria",
      "cirugia-plastica-reconstructiva",
      "asesoramiento-genetico",
      "psicooncologia",
    ],
    professionals: [
      "dr-aldo-creton",
      "dra-valeria-moliner",
      "dra-noelia-hobaica",
      "dra-natalia-patino",
      "dra-laura-miranda",
      "dra-fernanda-sisu",
      "dra-juliana-ciuci",
      "dra-barbara-carloni",
      "dra-gabriela-tiburzi",
      "dra-ivana-mileo",
      "dra-agustina-de-andreis",
      "dra-milea-clapsos",
      "dra-guillermina-fernandez",
      "dra-paula-calaramo",
      "dra-silvia-ortiz-polanco",
      "dra-florencia-calaramo",
      "dra-mercedes-skare",
    ],
    patientPortalUrl: "http://impgeclisa.ddns.net:93/#!/login",
    patientPortalName: "Portal Instituto Médico Platense",
    appointmentUrl: "http://impgeclisa.ddns.net:8085/",
    mapsUrl: "https://www.google.com/maps/place/Instituto+M%C3%A9dico+Platense/@-34.9213,-57.955,17z/data=!3m1!4b1!4m5!3m4!1s0x95a2e63ede856107:0x16cc6baaa5a36931!8m2!3d-34.9213!4d-57.955",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-57.9572!3d-34.9213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63ede856107%3A0x16cc6baaa5a36931!2sInstituto%20M%C3%A9dico%20Platense!5e0!3m2!1ses!2sar",
    image: "/images/placeholder-sede-imp.jpg",
    accessibility:
      "Consultanos por accesibilidad para tu visita.",
    directions:
      "El Instituto Médico Platense se encuentra sobre Avenida 51, entre calles 2 y 3, en el centro de La Plata.",
    institutionWebsite: "https://www.institutomedicoplatense.com/",
  },
  {
    id: "city-bell",
    name: "Sede City Bell",
    institutionName: "Centro Médico de Diagnóstico City Bell",
    address: "Calle 474 esq. 14B Nº 583, City Bell",
    city: "City Bell",
    description:
      "UCM funciona dentro del Centro Médico de Diagnóstico City Bell, una institución especializada en diagnóstico por imágenes en la zona norte de La Plata.",
    phone: "(221) 638-3898",
    whatsapp: "+54 9 221 5410205",
    email: "contacto@cmdcitybell.com.ar",
    hours: "Atención telefónica de 8 a 19 hs",
    servicesAvailable: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "mastologia",
      "biopsias",
      "oncologia-clinica",
      "asesoramiento-genetico",
      "psicooncologia",
    ],
    professionals: [
      "dr-aldo-creton",
      "dra-valeria-moliner",
      "dra-noelia-hobaica",
      "dra-natalia-patino",
      "dra-laura-miranda",
      "dra-fernanda-sisu",
      "dra-juliana-ciuci",
      "dra-barbara-carloni",
      "dra-gabriela-tiburzi",
      "dra-ivana-mileo",
      "dra-agustina-de-andreis",
      "dra-milea-clapsos",
      "dra-guillermina-fernandez",
      "dra-silvia-ortiz-polanco",
    ],
    patientPortalUrl: "http://impgeclisa.ddns.net:93/#!/login",
    patientPortalName: "Portal Centro Médico City Bell",
    appointmentUrl: "https://www.cmdcitybell.com.ar/turnos.php",
    mapsUrl: "https://www.google.com/maps/place/Centro+M%C3%A9dico+de+Diagn%C3%B3stico/@-34.8722522,-58.0441778,17z/data=!3m1!4b1!4m5!3m4!1s0x95a2de79819d8ac9:0x534d858aa61571fd!8m2!3d-34.8722522!4d-58.0441778",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.5!2d-58.0467527!3d-34.8722522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2de79819d8ac9%3A0x534d858aa61571fd!2sCentro%20M%C3%A9dico%20de%20Diagn%C3%B3stico!5e0!3m2!1ses!2sar",
    image: "/images/placeholder-sede-citybell.jpg",
    accessibility:
      "Consultanos por accesibilidad para tu visita.",
    directions:
      "El Centro Médico de Diagnóstico City Bell se encuentra sobre calle 474, en la localidad de City Bell, partido de La Plata.",
    institutionWebsite: "https://www.cmdcitybell.com.ar/",
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function getLocationName(id: string): string {
  const location = getLocationById(id);
  return location ? location.institutionName : id;
}
