"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import type { FAQ } from "@/data/services";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="glass rounded-xl overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-lightest/50 transition-colors cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-text-primary pr-4">
              {faq.question}
            </span>
            <HiChevronDown
              className={`w-5 h-5 text-violet shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-5 text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
