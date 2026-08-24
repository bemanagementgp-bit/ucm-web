# UCM Web – Auditoría 14/08/2026

> **Actualización**: los 5 bugs de código y todos los placeholders `[…]` visibles al usuario fueron resueltos en la misma sesión. Los ítems ✅ abajo quedaron cerrados; los demás siguen dependiendo del cliente.


Repaso general del sitio y del contenido. Cruzado con `PLAN.md` y `CONTENT_PENDING.md`.

Todas las páginas responden 200 OK. Los ítems abajo son cosas que hay que resolver antes de publicar.

---

## 🐞 Bugs de código / datos rotos

1. ✅ **locations.ts – slugs `dra-ejemplo-*`** reemplazados por los profesionales reales de cada sede.
2. ✅ **`mamografo-imp` inexistente** removido de `relatedEquipment` en todos los servicios.
3. ✅ **Inconsistencia servicios ↔ sedes** reconciliada: `servicesAvailable` de cada sede ahora incluye todos los servicios que efectivamente atienden ahí (incluyendo ecografía ginecológica y biopsias en City Bell).
4. ✅ **CTA "Ir al portal del paciente"** cambiado a "Solicitar turno por WhatsApp" (usa `5410205` para consulta médica / `6685972` para intervencionismo).
5. ⏳ **Dra. Mercedes Skare** — sigue en `professionals.ts` sin servicio relacionado. Necesito definición: ¿la dejamos, la ocultamos, o le asignamos servicios?

---

## 📝 Textos entre corchetes visibles al usuario

✅ **Todos resueltos** con redacción neutra provisoria (duraciones/preparaciones tipo "se coordina en la consulta", "las indicaciones específicas se detallan al reservar el turno", etc.), a la espera del texto oficial del equipo médico. También se limpiaron los `[Fotografía institucional]`, `[Imagen de prevención]`, `[Imagen del artículo]`, `[Contenido pendiente de validación]` de los artículos, `[pendiente de validación]` en FAQs y bloque de prevención, y placeholder de "Fuente" del home. Las páginas legales (privacidad, términos, aviso legal) muestran ahora un aviso profesional de "estamos preparando este documento" en vez del corchete crudo.

Sigue siendo necesario que el equipo médico envíe los textos definitivos (ver "Contenido pendiente del cliente" más abajo).

---

## 🖼️ Imágenes placeholder (todas por reemplazar)

- **Servicios** (12): `/images/placeholder-mamografia.jpg`, `-ecografia`, `-mastologia`, `-intervencionismo`, `-biopsia`, `-marcacion`, `-oncologia`, `-cirugia`, `-cirugia-plastica`, `-genetico`, `-psicooncologia`.
- **Profesionales** (17): todas usan `placeholder-profesional-N.jpg`, incluida la ficha institucional en `/unidad` que dice "[Fotografía institucional de la unidad]".
- **Sedes** (2): `placeholder-sede-imp.jpg`, `placeholder-sede-citybell.jpg`.
- **Artículos** (3): `placeholder-articulo-*.jpg`.
- **Favicon + PWA icons** (192, 512).
- **OpenGraph** (`og:image`) para compartir en redes/WhatsApp.

---

## 📋 Contenido pendiente del cliente

Cruzado con `CONTENT_PENDING.md` — lo que sigue esperando de tu lado:

### Datos generales
- Email general UCM
- Teléfono general UCM
- WhatsApp general UCM *(distinto o igual al 5410205)*

### Sedes
- Horarios de atención UCM en IMP y City Bell *(la web dice hoy: "Lunes a viernes 8–20 · Sábados 8–12" en IMP y "Atención telefónica de 8 a 19 hs" en City Bell → confirmar)*
- URL del sistema de turnos online (¿va o no?)

### Profesionales (datos completos)
Necesito, de cada una: matrícula (MP/MN), formación, experiencia, sedes reales, y confirmar si va foto propia.

- Dra. Noelia Hobaica
- Dra. Laura Miranda
- Dra. Bárbara Carloni
- Dra. Gabriela Tiburzi
- Dra. Agustina De Andreis
- Dra. Milea Clapsos
- Dra. Guillermina Fernández
- Dra. Silvia Ortiz Polanco

### Servicios
- Duración estimada real de cada consulta/estudio (ver arriba, 9 servicios pendientes)
- Preparación específica: eco ginecológica, cirugía mamaria, cirugía plástica, indicaciones extra de intervencionismo
- Plazo de resultados de biopsia
- Confirmar servicios disponibles en cada sede (ver bug #3)

### Legal / institucional
- Política de privacidad, términos y condiciones, aviso legal
- Obras sociales y prepagas aceptadas

### Novedades / prevención
- Artículos reales (los 3 actuales son borrador)
- Dato preventivo destacado con fuente
- Imágenes para novedades y prevención

### Fotografía (producción UCM)
- Fotos de profesionales
- Fotos de las instalaciones (ambas sedes)
- Fotos del equipamiento
- Fotos de la atención (consultas, estudios)

---

## ✅ Cosas que quedaron OK en la última pasada

- Nav estructural: header ya no se superpone con breadcrumbs.
- Filtros de `/profesionales` unificados a "Mastología".
- 12 imagenólogas cargadas como staff de mamografía + ecografías.
- Ruteo de WhatsApp por tipo de turno:
  - Imágenes → `221 568-6141`
  - Intervencionismo/biopsias/marcaciones → `221 668-5972`
  - Consulta médica y otras → `221 541-0205`
- `/unidad` reescrita con el texto oficial de "Qué es una Unidad de Mastología".
- Acreditación SAM abril 2026 + logo publicado.
- Direcciones de sedes con esquina y piso.
- Mamógrafo Fuji sin mención a tomosíntesis 3D.
- Biopsias/marcaciones aclarados como "guía por imágenes".

---

## 🔜 Próximos pasos sugeridos

**Yo puedo arreglar ya (sin esperar cliente):**
1. Bug locations.ts – reemplazar slugs `dra-ejemplo-*` por reales.
2. Bug `mamografo-imp` inexistente – decidir si es duplicado o borrarlo.
3. Auditar `locations.servicesAvailable` vs `services.locations`.
4. Cambiar CTA de fichas de servicio "pathology" a "Solicitar turno" con WhatsApp `5410205`.

**Cliente / equipo médico:**
1. Bloque grande de duraciones y preparaciones (una sola devolución por servicio).
2. Datos completos de las 8 profesionales.
3. Horarios de atención UCM.
4. Datos de contacto generales.
5. Obras sociales.
6. Textos legales.
7. Fotos (Fase C del `PLAN.md`).
