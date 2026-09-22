import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Indica si un archivo referenciado desde `public/` existe realmente.
 *
 * Los datos de servicios ya traen la ruta de su foto, pero varias todavía no
 * están cargadas. Comprobarlo en tiempo de build evita pedir imágenes que
 * devolverían 404, y hace que cada foto aparezca sola apenas se sube al
 * proyecto, sin tocar el código.
 *
 * Sólo puede usarse desde componentes de servidor.
 */
export function publicFileExists(publicPath?: string | null): boolean {
  if (!publicPath || !publicPath.startsWith("/")) return false;

  // Evita que una ruta con ".." se escape de public/.
  const normalized = path.normalize(publicPath);
  if (normalized.includes("..")) return false;

  return existsSync(path.join(process.cwd(), "public", normalized));
}
