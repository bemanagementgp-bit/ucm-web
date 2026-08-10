"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";
import { siteConfig } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/50 backdrop-blur-2xl saturate-150 shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_4px_24px_rgba(79,61,101,0.08)] border-white/40 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Navegación principal">
            <Link href="/" className="flex items-center shrink-0" aria-label="UCM – Inicio">
              <Image
                src="/logo-ucm-nav.png"
                alt="UCM – Unidad de Cuidado Mamario"
                width={613}
                height={202}
                className="h-7 w-auto lg:h-9"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-1">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-text-primary hover:text-primary rounded-lg hover:bg-primary-lightest transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Button
                  href={siteConfig.patientPortalUrl}
                  external
                  variant="outline"
                  size="sm"
                >
                  Portal del paciente
                </Button>
                <Button href="/turnos" size="sm">
                  Solicitar turno
                </Button>
              </div>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <HiBars3 className="w-7 h-7" />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
