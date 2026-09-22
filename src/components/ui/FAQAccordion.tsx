"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { EASE } from "@/lib/motion";
import type { FAQ } from "@/data/services";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: EASE.expo }}
            className={`glass rounded-2xl overflow-hidden transition-colors duration-500 ${
              isOpen ? "bg-white/70" : ""
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary-lightest/50 transition-colors cursor-pointer"
            >
              <span className="font-medium text-text-primary">{faq.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: EASE.expo }}
                className="shrink-0 w-8 h-8 rounded-full bg-white/60 flex items-center justify-center"
              >
                <HiChevronDown className="w-4 h-4 text-violet" />
              </motion.span>
            </button>

            {/*
              La respuesta se renderiza siempre (no se monta/desmonta): así queda
              en el HTML estático, indexable, igual que antes. Lo que se anima es
              la altura real, de modo que las respuestas largas ya no se cortan.
            */}
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: EASE.expo }}
              style={{ overflow: "hidden" }}
            >
              <p className="px-5 pb-5 text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
