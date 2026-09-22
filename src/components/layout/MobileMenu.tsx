"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/data/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE.expo }}
            className="absolute inset-0 bg-violet-deep/30 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE.expo }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white/75 backdrop-blur-2xl saturate-150 shadow-2xl rounded-l-[2rem] overflow-hidden"
          >
            <div className="flex items-center justify-between p-5 border-b border-white/40">
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
                className="p-2 rounded-full text-text-primary hover:text-primary hover:bg-white/60 transition-colors cursor-pointer"
                aria-label="Cerrar menú"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
              }}
              className="p-5 overflow-y-auto max-h-[calc(100vh-80px)]"
            >
              <ul className="space-y-1">
                {siteConfig.navigation.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: EASE.expo },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-text-primary hover:text-primary hover:bg-primary-lightest rounded-3xl transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EASE.expo },
                  },
                }}
                className="mt-6 pt-6 border-t border-white/40 space-y-3"
              >
                <Button
                  href={siteConfig.patientPortalUrl}
                  external
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  Portal del paciente
                </Button>
                <Button href="/turnos" size="md" className="w-full">
                  Solicitar turno
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
