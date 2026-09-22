import { PageTransition } from "@/components/motion/PageTransition";

/**
 * `template` se remonta en cada navegación (a diferencia de `layout`),
 * así que es el lugar donde vive la transición entre páginas.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
