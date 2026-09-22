"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/data/site";
import { useHeaderTheme } from "./HeaderTheme";
import { MobileMenu } from "./MobileMenu";

/**
 * Enlace de navegación con cambio "en rodillo": al pasar el puntero la palabra
 * sube y entra una copia idéntica desde abajo. La copia es decorativa, así que
 * los lectores de pantalla leen la etiqueta una sola vez.
 */
function NavLink({
  href,
  label,
  active,
  onDark,
}: {
  href: string;
  label: string;
  active: boolean;
  onDark: boolean;
}) {
  return (
    <Link
      href={href}
      data-active={active}
      // `inline-flex`: el enlace necesita ser contenedor de bloque para que el
      // recorte del rodillo se comporte y para que el padding lateral se aplique.
      className={`nav-link group/link inline-flex items-center px-3 py-2 text-sm font-medium rounded-full transition-colors ${
        onDark
          ? "text-white/85 hover:text-white"
          : active
            ? "text-primary"
            : "text-text-primary hover:text-primary"
      }`}
    >
      {/* `leading-[1.7]`: deja aire para que el recorte no coma las colas. */}
      <span className="relative block overflow-hidden leading-[1.7]">
        <span className="block transition-transform duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/link:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-full block transition-transform duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/link:-translate-y-full"
        >
          {label}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const headerTheme = useHeaderTheme();

  // Sobre un hero oscuro y sin scroll, la barra se vuelve transparente y sus
  // enlaces pasan a blanco. Al despegarse del hero recupera la píldora clara.
  const onDark = headerTheme === "dark" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Barra flotante: no toca los bordes, se contrae al hacer scroll. */}
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE.expo }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
          transition={{ duration: 0.45, ease: EASE.expo }}
          className="px-3 sm:px-5 lg:px-8"
        >
          <motion.div
            animate={{
              maxWidth: scrolled ? 1120 : 1280,
              // Con la página desplazada el contenido pasa por detrás: hace
              // falta bastante opacidad para que la navegación siga legible.
              backgroundColor: onDark
                ? "rgba(255,255,255,0)"
                : scrolled
                  ? "rgba(255,255,255,0.93)"
                  : "rgba(255,255,255,0.45)",
              borderColor: onDark
                ? "rgba(255,255,255,0)"
                : "rgba(255,255,255,0.6)",
              // Sobre la foto no debe haber desenfoque: delataba el recuadro
              // de la píldora con un borde visible.
              backdropFilter: onDark ? "blur(0px)" : "blur(28px) saturate(1.8)",
              boxShadow: onDark
                ? "0 0 0 1px rgba(255,255,255,0) inset, 0 0 0 rgba(0,0,0,0)"
                : scrolled
                  ? "0 0 0 1px rgba(255,255,255,0.9) inset, 0 10px 34px rgba(79,61,101,0.14)"
                  : "0 0 0 1px rgba(255,255,255,0.9) inset, 0 6px 24px rgba(79,61,101,0.07)",
            }}
            transition={{ duration: 0.45, ease: EASE.expo }}
            style={{
              WebkitBackdropFilter: onDark ? "blur(0px)" : "blur(28px) saturate(1.8)",
            }}
            className="nav-pill mx-auto rounded-full px-3 sm:px-4 lg:pl-6 lg:pr-3"
          >
            <nav
              className="flex items-center justify-between gap-4 py-2.5"
              aria-label="Navegación principal"
            >
              <Link
                href="/"
                className={`flex items-center shrink-0 transition-opacity hover:opacity-80 ${
                  onDark ? "text-white" : "text-primary"
                }`}
                aria-label="UCM – Inicio"
              >
                {/*
                  Se usa el SVG del isologo (flor + UCM, sin la bajada) como
                  máscara: así toma el color del enlace y queda nítido en
                  cualquier tamaño, tanto sobre la foto como sobre fondo claro.
                */}
                <span
                  className="block h-9 w-[109px] lg:h-12 lg:w-[145px] bg-current transition-colors duration-500"
                  style={{
                    maskImage: "url(/logo-ucm.svg)",
                    WebkitMaskImage: "url(/logo-ucm.svg)",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "left center",
                    WebkitMaskPosition: "left center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                  aria-hidden="true"
                />
              </Link>

              <div className="hidden lg:flex items-center gap-2">
                <ul className="flex items-center gap-0.5">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        label={item.label}
                        active={isActive(item.href)}
                        onDark={onDark}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:flex items-center gap-2 shrink-0">
                <Button
                  href={siteConfig.patientPortalUrl}
                  external
                  variant={onDark ? "outlineLight" : "ghost"}
                  size="sm"
                >
                  Portal del paciente
                </Button>
                <Button href="/turnos" size="sm">
                  Solicitar turno
                </Button>
              </div>

              <button
                type="button"
                className={`lg:hidden p-2 -mr-1 transition-colors cursor-pointer ${
                  onDark ? "text-white hover:text-white/80" : "text-text-primary hover:text-primary"
                }`}
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menú"
              >
                <HiBars3 className="w-7 h-7" />
              </button>
            </nav>
          </motion.div>
        </motion.div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
