import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger compila siempre con salida standalone y reemplaza cualquier valor
  // de `output`, así que el sitio corre como app de Next con servidor. Por eso
  // acá no se fija `output`: lo define la plataforma.

  // Genera /ruta/ con barra final → las URLs publicadas no cambian.
  trailingSlash: true,

  // Sin optimizador de imágenes: evita depender de sharp en el hosting.
  images: { unoptimized: true },

  // Biopsias y marcaciones dejaron de tener página propia al unificarse en
  // intervencionismo mamario. En el export estático esto lo resolvía el
  // .htaccess, que en modo servidor no interviene.
  async redirects() {
    return [
      {
        source: "/servicios/biopsias",
        destination: "/servicios/intervencionismo-mamario/",
        permanent: true,
      },
      {
        source: "/servicios/marcaciones",
        destination: "/servicios/intervencionismo-mamario/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
