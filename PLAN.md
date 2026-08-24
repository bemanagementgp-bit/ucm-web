# UCM Web – Plan de desarrollo

> Documento vivo. Actualizar a medida que se cierren tareas.
> Fuentes: `CONTENT_PENDING.md` (checklist interno) + lista de pendientes del cliente (14/08/2026).

---

## 0. Estado actual del proyecto

- Stack: Next.js (App Router) + TypeScript + Tailwind, deploy en Vercel.
- Contenido está tipado en `src/data/*` (site, services, professionals, locations, equipment, articles, appointments).
- Rutas ya montadas: `/`, `/unidad`, `/servicios`, `/profesionales`, `/novedades`, `/contacto`, `/turnos`, `/privacidad`, `/terminos`, `/aviso-legal`.
- Equipamiento y sedes: cargados.
- Portal del paciente: URL única cargada.
- Logo SVG y WhatsApp de la Dra. Florencia Calaramo: cargados en los últimos commits.

**Faltan principalmente 3 grandes bloques:**
1. **Contenido oficial** (cliente): datos de contacto reales, textos validados médicamente, textos legales, fotos.
2. **Funcionalidad complementaria**: sistema de turnos online, CMS de novedades, analytics/SEO.
3. **Producción visual**: sesión de fotos + reemplazo de placeholders.

---

## 1. Fases del proyecto

### FASE A — Contenido crítico (bloquea publicación)
Sin esto no se puede salir a producción. Todo depende del cliente.

### FASE B — Contenido validado (bloquea confiabilidad médica)
Info que ya está pero como borrador y necesita firma del equipo médico.

### FASE C — Producción visual
Fotos reales que reemplazan placeholders.

### FASE D — Funcionalidad extendida
Turnos online, CMS, analytics.

### FASE E — Lanzamiento
QA, SEO, verificación, dominio, monitoreo.

---

## 2. Backlog detallado

### FASE A — Contenido crítico

| # | Ítem | Ubicación en código | Responsable | Estado |
|---|------|---------------------|-------------|--------|
| A1 | Email general UCM | `src/data/site.ts:9` | Cliente | ⏳ |
| A2 | Teléfono general UCM | `src/data/site.ts:10` | Cliente | ⏳ |
| A3 | WhatsApp general UCM | `src/data/site.ts:11` | Cliente | ⏳ |
| A4 | WhatsApp imágenes – ambas sedes (221 568-6141) | `src/data/appointments.ts` | Cliente | ✅ |
| A5 | ~~WhatsApp turnos imágenes – City Bell~~ (mismo número que IMP) | – | – | ✅ |
| A6 | WhatsApp intervencionismo, biopsias y marcaciones – ambas sedes (221 668-5972) | `src/data/appointments.ts` | Cliente | ✅ |
| A7 | ~~WhatsApp intervencionismo – City Bell~~ (mismo número que IMP) | – | – | ✅ |
| A8 | Canal biopsias/marcaciones → mismo WhatsApp que intervencionismo | `src/data/appointments.ts` | Cliente | ✅ |
| A9 | Horarios de atención – IMP | `src/data/locations.ts` | Cliente | ⏳ |
| A10 | Horarios de atención – City Bell | idem | Cliente | ⏳ |
| A11 | Confirmación de qué servicios se prestan en cada sede | `src/data/services.ts` (campo `locations`) | Cliente | ⏳ |
| A12 | Obras sociales y prepagas aceptadas | Nuevo: `src/data/insurance.ts` | Cliente | ⏳ |
| A13 | Datos completos Dra. Noelia Hobaica (mat., formación, experiencia, sedes) | `src/data/professionals.ts` | Cliente | ⏳ |
| A14 | Preparación específica de ecografía ginecológica | `src/data/services.ts` (`ecografia-ginecologica`) | Cliente médico | ⏳ |

**Deliverable dev al recibir A1–A12:** una PR única de "content sync fase A" tocando los archivos de `src/data/*`.

---

### FASE B — Contenido validado

| # | Ítem | Ubicación | Responsable | Estado |
|---|------|-----------|-------------|--------|
| B1 | Validación médica de descripciones de servicios | `src/data/services.ts` (`description`, `purpose`, `procedure`) | Cliente médico | ⏳ borrador cargado |
| B2 | Duración real de cada estudio | `services.ts` (`duration`) | Cliente médico | ⏳ borrador |
| B3 | Preparación previa por estudio | `services.ts` (`preparation`) | Cliente médico | ⏳ borrador |
| B4 | FAQs revisadas por servicio | `services.ts` (`faqs`) | Cliente médico | ⏳ borrador |
| B5 | Texto institucional (misión / visión / historia) | `src/app/unidad/page.tsx` o `src/data/institutional.ts` (nuevo) | Cliente | ⏳ |
| B6 | Valores institucionales | idem | Cliente | ⏳ |
| B7 | Enfoque multidisciplinario | idem | Cliente | ⏳ |
| B8 | Correcciones sobre datos de profesionales | `src/data/professionals.ts` | Cliente | ⏳ |
| B9 | Dato preventivo destacado + fuente | `src/data/articles.ts` o nueva key en `site.ts` | Cliente | ⏳ |
| B10 | Contenidos de prevención (controles, autoobservación, factores, mitos) | `/novedades` + nueva sección `/prevencion` a definir | Cliente médico | ⏳ |
| B11 | Artículos reales para novedades | `src/data/articles.ts` | Cliente | ⏳ |

**Nota:** proponer al cliente una plantilla (`.docx` o form) para que devuelvan los textos ya estructurados por servicio; evita idas y vueltas.

---

### FASE C — Producción visual

| # | Ítem | Ubicación | Responsable | Estado |
|---|------|-----------|-------------|--------|
| C1 | Foto de cada profesional | `public/images/professionals/*` | Produ UCM | ⏳ |
| C2 | Fotos instalaciones IMP | `public/images/locations/imp/*` | Produ UCM | ⏳ |
| C3 | Fotos instalaciones City Bell | `public/images/locations/city-bell/*` | Produ UCM | ⏳ |
| C4 | Fotos equipamiento | `public/images/equipment/*` | Produ UCM | ⏳ |
| C5 | Fotos de la atención (consultas, estudios) | `public/images/atencion/*` | Produ UCM | ⏳ |
| C6 | Imágenes prevención | `public/images/prevencion/*` | Produ UCM / stock aprobado | ⏳ |
| C7 | Imágenes de novedades (por artículo) | `public/images/novedades/*` | Produ UCM / stock | ⏳ |
| C8 | Favicon + iconos PWA (192, 512) | `public/` + `src/app/manifest.ts` | Dev (a partir del logo) | ⏳ |
| C9 | Imagen OpenGraph (og:image) | `public/og.jpg` + metadata en `layout.tsx` | Dev / diseño | ⏳ |

**Deliverable dev:** al recibir cada set, optimizar (WebP/AVIF, `next/image`), reemplazar placeholders y borrar imports viejos.

---

### FASE D — Funcionalidad extendida

| # | Ítem | Detalle | Estado |
|---|------|---------|--------|
| D1 | URL sistema de turnos online – IMP | Definir si es link externo o integración | ⏳ |
| D2 | URL sistema de turnos online – City Bell | idem | ⏳ |
| D3 | Instrucciones de acceso al portal del paciente | Texto + posibles capturas | ⏳ |
| D4 | CMS para novedades | Decisión: Sanity / Payload / Contentful / Markdown en repo. Recomiendo empezar con MDX en repo y migrar si crece. | 🔲 a decidir |
| D5 | Textos legales (privacidad, T&C, aviso legal) | Ofrecer plantilla base y que la revise el abogado del cliente | ⏳ |

---

### FASE E — Lanzamiento

| # | Ítem | Estado |
|---|------|--------|
| E1 | QA cross-browser (Chrome, Safari, Firefox, mobile) | 🔲 |
| E2 | Auditoría Lighthouse (Perf / A11y / SEO / Best practices ≥ 90) | 🔲 |
| E3 | Verificación de Google Search Console | 🔲 |
| E4 | Configuración Google Analytics (o alternativa) | 🔲 (confirmar con cliente si va) |
| E5 | Sitemap y robots revisados (`src/app/sitemap.ts`, `robots.ts`) | 🔲 |
| E6 | Metadata OG/Twitter por ruta | 🔲 |
| E7 | Dominio productivo apuntado a Vercel | 🔲 |
| E8 | Redirects legacy (si aplican) | 🔲 |
| E9 | Monitoreo de errores (Sentry / Vercel Observability) | 🔲 |
| E10 | Backup/export del contenido | 🔲 |

---

## 3. Próximos pasos concretos (esta semana)

1. **Mandar al cliente un pedido único y ordenado** con la lista de Fase A + Fase B (una sola comunicación, no fragmentada). Adjuntar plantilla para textos de servicios.
2. **Definir con el cliente** si el sistema de turnos será link externo (URL) o integrado (formulario a WhatsApp).
3. **Decidir CMS** para novedades: propuesta → MDX en repo para el MVP, migrar a Sanity si el cliente quiere autogestión.
4. **Preparar borrador de textos legales** base (privacidad + T&C + aviso legal) para que solo tengan que revisar/adaptar.
5. **Coordinar fecha de sesión de fotos** con el cliente (Fase C es el mayor bloqueante visual).

---

## 4. Convenciones de trabajo

- Cada bloque de contenido que llegue → una PR chica, mensaje `content: <área>` (ej. `content: whatsapps por sede`).
- Placeholders siguen el patrón `placeholder-*.jpg`. Al reemplazar, borrar el archivo viejo y actualizar todas las referencias.
- Mientras no haya contenido oficial, los borradores en `src/data/*` deben tener comentario `// TODO: validar con equipo médico`.
- Antes de merge a `master`, verificar en preview de Vercel.

---

## 5. Sincronización con `CONTENT_PENDING.md`

`CONTENT_PENDING.md` sigue siendo el checklist de detalle contra el cliente. **Este `PLAN.md` es la vista de proyecto** (fases, prioridades, responsables). Cuando se complete un ítem, tildar en ambos.
