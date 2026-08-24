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
      label: "WhatsApp Imágenes – IMP",
      type: "whatsapp",
      url: "https://wa.me/5492215686141?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20estudio%20por%20im%C3%A1genes%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero solicitar un turno para un estudio por imágenes en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "WhatsApp Imágenes – City Bell",
      type: "whatsapp",
      url: "https://wa.me/5492215686141?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20estudio%20por%20im%C3%A1genes%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero solicitar un turno para un estudio por imágenes en UCM – Centro Médico City Bell.",
    },
  },
  pathology: {
    imp: {
      label: "WhatsApp Consulta médica – IMP",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20una%20consulta%20m%C3%A9dica%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero solicitar un turno para una consulta médica en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "WhatsApp Consulta médica – City Bell",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20una%20consulta%20m%C3%A9dica%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero solicitar un turno para una consulta médica en UCM – Centro Médico City Bell.",
    },
  },
  interventionism: {
    imp: {
      label: "WhatsApp Intervencionismo, biopsias y marcaciones – IMP",
      type: "whatsapp",
      url: "https://wa.me/5492216685972?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20procedimiento%20intervencionista%20(biopsia%20o%20marcaci%C3%B3n)%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero solicitar un turno para un procedimiento intervencionista (biopsia o marcación) en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "WhatsApp Intervencionismo, biopsias y marcaciones – City Bell",
      type: "whatsapp",
      url: "https://wa.me/5492216685972?text=Hola%2C%20quiero%20solicitar%20un%20turno%20para%20un%20procedimiento%20intervencionista%20(biopsia%20o%20marcaci%C3%B3n)%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero solicitar un turno para un procedimiento intervencionista (biopsia o marcación) en UCM – Centro Médico City Bell.",
    },
  },
  other: {
    imp: {
      label: "WhatsApp Consultas generales – IMP",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20hacer%20una%20consulta%20en%20UCM%20%E2%80%93%20Instituto%20M%C3%A9dico%20Platense.",
      message: "Hola, quiero hacer una consulta en UCM – Instituto Médico Platense.",
    },
    cityBell: {
      label: "WhatsApp Consultas generales – City Bell",
      type: "whatsapp",
      url: "https://wa.me/5492215410205?text=Hola%2C%20quiero%20hacer%20una%20consulta%20en%20UCM%20%E2%80%93%20Centro%20M%C3%A9dico%20City%20Bell.",
      message: "Hola, quiero hacer una consulta en UCM – Centro Médico City Bell.",
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
