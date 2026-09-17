import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para hosting compartido (Hostinger).
  output: "export",
  // Genera /ruta/index.html en vez de /ruta.html → Apache/LiteSpeed lo sirve sin config.
  trailingSlash: true,
  // El optimizador de imágenes de next necesita runtime; en export usamos el original tal cual.
  images: { unoptimized: true },
};

export default nextConfig;
