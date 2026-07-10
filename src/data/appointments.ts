export type AppointmentType = "images" | "pathology" | "interventionism" | "other";

export interface AppointmentChannel {
  label: string;
  type: "whatsapp" | "portal" | "phone" | "email";
  url: string;
  message?: string;
}

export interface AppointmentConfig {
  imp: AppointmentChannel;
  cityBell: AppointmentChannel;
}

export const appointmentLinks: Record<AppointmentType, AppointmentConfig> = {
  images: {
    imp: {
      label: "WhatsApp IMP – Imágenes",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20estudio%20por%20im%C3%A1genes%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero solicitar un turno para un estudio por imágenes en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "WhatsApp City Bell – Imágenes",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20estudio%20por%20im%C3%A1genes%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero solicitar un turno para un estudio por imágenes en UCM – Centro Médico City Bell.",
    },
  },
  pathology: {
    imp: {
      label: "Turnos IMP – Consulta médica",
      type: "portal",
      url: "http://impgeclisa.ddns.net:8085/",
    },
    cityBell: {
      label: "Turnos City Bell – Consulta médica",
      type: "portal",
      url: "https://www.cmdcitybell.com.ar/turnos.php",
    },
  },
  interventionism: {
    imp: {
      label: "Intervencionismo IMP",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20procedimiento%20intervencionista%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero solicitar un turno para un procedimiento intervencionista en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "Intervencionismo City Bell",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20procedimiento%20intervencionista%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero solicitar un turno para un procedimiento intervencionista en UCM – Centro Médico City Bell.",
    },
  },
  other: {
    imp: {
      label: "Contacto general IMP",
      type: "phone",
      url: "tel:+542214120900",
    },
    cityBell: {
      label: "Contacto general City Bell",
      type: "phone",
      url: "tel:+542216383898",
    },
  },
};

export const appointmentTypes: { value: AppointmentType; label: string; description: string }[] = [
  {
    value: "images",
    label: "Estudio por imágenes",
    description: "Mamografía, ecografía mamaria y otros estudios.",
  },
  {
    value: "pathology",
    label: "Consulta médica por una patología",
    description: "Consulta con mastólogo, oncólogo u otro especialista.",
  },
  {
    value: "interventionism",
    label: "Biopsia o marcación",
    description: "Procedimientos intervencionistas guiados por imágenes.",
  },
  {
    value: "other",
    label: "Otra consulta",
    description: "Consultas generales u otras necesidades.",
  },
];

export function buildWhatsAppUrl(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}
