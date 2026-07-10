"use client";

import Link from "next/link";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";
import { siteConfig } from "@/data/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
        open ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-violet-deep/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-primary-light/20">
          <Image
                src="/ucm-logo-rosa.png"
                alt="UCM"
                width={200}
                height={100}
                className="h-8 w-auto"
              />
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-text-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Cerrar menú"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-5 overflow-y-auto max-h-[calc(100vh-80px)]">
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-text-primary hover:text-primary hover:bg-primary-lightest rounded-xl transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-primary-light/20 space-y-3">
            <Button
              href="/portal-del-paciente"
              variant="outline"
              size="md"
              className="w-full"
            >
              Portal del paciente
            </Button>
            <Button href="/turnos" size="md" className="w-full">
              Solicitar turno
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
