# UCM – Unidad de Cuidado Mamario

Sitio web institucional de UCM, una unidad médica especializada en el cuidado integral de la salud mamaria, que funciona dentro del Instituto Médico Platense (La Plata) y el Centro Médico de Diagnóstico City Bell.

## Tecnologías

- **Next.js 15** – App Router
- **TypeScript**
- **Tailwind CSS v4**
- **React Icons**
- **Framer Motion** (disponible para animaciones)

## Inicio rápido

```bash
npm install
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
├── app/                    # Rutas del sitio (App Router)
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Layout raíz
│   ├── not-found.tsx       # Página 404
│   ├── sitemap.ts          # Sitemap dinámico
│   ├── robots.ts           # Robots.txt
│   ├── manifest.ts         # Web App Manifest
│   ├── unidad/             # La unidad
│   ├── servicios/          # Servicios (listado + [slug])
│   ├── profesionales/      # Profesionales (listado + [slug])
│   ├── equipamiento/       # Equipamiento
│   ├── sedes/              # Sedes
│   ├── prevencion/         # Prevención
│   ├── novedades/          # Novedades (listado + [slug])
│   ├── turnos/             # Solicitar turno
│   ├── portal-del-paciente/# Portal del paciente
│   ├── contacto/           # Contacto
│   ├── privacidad/         # Política de privacidad
│   ├── terminos/           # Términos y condiciones
│   └── aviso-legal/        # Aviso legal
├── components/
│   ├── layout/             # Header, Footer, MobileMenu
│   ├── ui/                 # Componentes UI reutilizables
│   ├── cards/              # Tarjetas (Service, Professional, etc.)
│   ├── AppointmentSelector.tsx
│   ├── WhatsAppFloat.tsx
│   └── JsonLd.tsx          # Datos estructurados SEO
└── data/                   # Datos centralizados (mock)
    ├── services.ts
    ├── professionals.ts
    ├── locations.ts
    ├── equipment.ts
    ├── articles.ts
    ├── appointments.ts
    └── site.ts
```

## Gestión de contenidos

Todos los datos están centralizados en `src/data/`. Para actualizar:

- **Servicios**: editar `src/data/services.ts`
- **Profesionales**: editar `src/data/professionals.ts`
- **Equipamiento**: editar `src/data/equipment.ts`
- **Sedes**: editar `src/data/locations.ts`
- **Artículos**: editar `src/data/articles.ts`
- **Canales de turnos**: editar `src/data/appointments.ts`
- **Navegación y datos generales**: editar `src/data/site.ts`

Los datos actuales son **mock/placeholder**. Consultar `CONTENT_PENDING.md` para ver el listado completo de información pendiente.

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Rosa principal | `#D98FA8` | Botones primarios, acentos |
| Rosa suave | `#F4DDE6` | Bordes, fondos hover |
| Rosa muy claro | `#FBF5F8` | Fondos de sección |
| Lavanda | `#CBBBE4` | Acentos secundarios |
| Violeta medio | `#9278B5` | Tags, elementos secundarios |
| Violeta profundo | `#4F3D65` | Footer, textos destacados |
| Texto principal | `#332E38` | Cuerpo de texto |
| Texto secundario | `#706A74` | Textos auxiliares |

La paleta se configura en `src/app/globals.css` mediante variables CSS integradas con Tailwind.

## Imágenes

Todas las imágenes actuales son **placeholders** que deben ser reemplazadas por fotografías reales. Están identificadas en el código con comentarios.

## Despliegue

```bash
npm run build
npm start
```

Compatible con Vercel, Netlify, o cualquier plataforma que soporte Next.js.

## Contenido pendiente

Consultar el archivo `CONTENT_PENDING.md` para un listado completo de la información que debe cargarse antes de la publicación.
