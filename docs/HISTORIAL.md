# Historial del proyecto

> **Para la IA:** lee primero la sección **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualización:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atómico (`docs(historial): registra <cambio>`). Si el cambio no está aquí, para la IA no existe.

---

## 1. Estado actual

_Máximo ~15 líneas. Se reescribe en cada actualización, no se acumula._

- **Proyecto:** ecommerce (tienda de mascotas) — Ecommerce de tienda de artículos para mascotas
- **Repositorio:** https://github.com/JCarvajalLab/astro-tienda-mascotas
- **Última actualización:** 2026-11-16
- **Fase activa:** `phase/01-design`
- **Rama de trabajo:** `phase/01-design`
- **Último commit relevante:** Incorpora lecciones de arquitectura y seguridad de veterinaria y portafolio
- **Despliegue:** aún sin desplegar
- **Qué funciona:** Estructura documental (`PLAN.md`, `HISTORIAL.md`), `AGENTS.md` optimizado con lecciones aprendidas, CI con Node 22/Gitleaks v3 y 6 Skills en `.agents/skills/`
- **Qué está en progreso:** Inicialización de entorno Astro 5 + Tailwind CSS v4 y diseño base
- **Bloqueos o problemas conocidos:** ninguno
- **Siguiente paso concreto:** Crear proyecto Astro 5 + Tailwind v4, configurar `public/_headers`, layout base anti-FOUC y definir modelo de datos de productos en phase/01-design

## 2. Decisiones importantes

_Una línea por decisión. Evita que la IA proponga de nuevo algo ya descartado._

| Fecha | Decisión | Motivo | Alternativas descartadas |
|-------|----------|--------|--------------------------|
| 2026-11-11 | Usar Astro 5+ con JavaScript y Tailwind CSS v4 | Sitios rápidos, costo cero de despliegue y menor complejidad sin TypeScript ni frameworks extra | React/Next.js, Vue/Nuxt, Django |
| 2026-11-11 | Adaptar especialistas a `.agents/skills/*/SKILL.md` | Descubrimiento automático y carga bajo demanda (Progressive Disclosure) en Gemini / Antigravity | Archivos planos sin autodescubrimiento |
| 2026-11-16 | Hardening HTTP `public/_headers` desde Fase 1 | Prevenir clickjacking, MIME sniffing y ataques XSS desde el inicio en Cloudflare Pages | Dejar la seguridad HTTP como remediación final |
| 2026-11-16 | Imágenes en `src/assets/` con dimensiones explícitas | Optimización automática a WebP/AVIF y prevención total de CLS | Usar `public/` o `<img>` sin optimizar |
| 2026-11-16 | Open Graph (`og:image`) estrictamente en PNG/JPG | Redes sociales (WhatsApp, LinkedIn, X, Discord) no renderizan previsualizaciones en `.svg` | Usar `.svg` en metaetiquetas de compartir |
| 2026-11-16 | Script inline anti-FOUC en `<head>` | Evitar parpadeos blancos molestos al recargar el sitio con tema oscuro activo | Cargar tema mediante scripts diferidos o asíncronos |
| 2026-11-16 | Validación estricta en servidor y secretos sin `PUBLIC_` | Integridad transaccional de órdenes/precios y protección de credenciales en GitHub | Confiar en cálculos del cliente o exponer claves en repo |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-16 · `phase/01-design` · inyección de mejoras y lecciones aprendidas
- **Qué:** Se actualizan `AGENTS.md`, `docs/PLAN.md` y `docs/HISTORIAL.md` incorporando las lecciones técnicas de los Proyectos 1 y 2: creación de `public/_headers` desde el inicio, obligatoriedad de `astro:assets` con dimensiones para evitar CLS, metadatos Open Graph en PNG/JPG, anti-FOUC, accesibilidad `prefers-reduced-motion` y reglas de validación en servidor para el ecommerce.
- **Archivos clave:** `AGENTS.md`, `docs/PLAN.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, docs-seo, seguridad
- **Notas:** El repositorio queda blindado documentalmente para iniciar el desarrollo práctico en el nuevo chat sin repetir errores de proyectos anteriores.

### 2026-11-11 · `phase/01-design` · inicial
- **Qué:** Configura plantilla base optimizada para Gemini con `AGENTS.md` y 6 skills en `.agents/skills/`
- **Archivos clave:** `AGENTS.md`, `.agents/skills/*/SKILL.md`, `docs/PLAN.md`, `docs/HISTORIAL.md`, `.github/workflows/ci.yml`
- **Agente(s):** orquestador, docs-seo
- **Notas:** El proyecto está listo para inicializar Astro sin perder los archivos de configuración.

<!-- Copiar el bloque anterior para cada nueva entrada, encima de las existentes. -->

## 4. Mapa del código

_Dónde está cada cosa. Se actualiza solo cuando cambia la estructura._

| Ruta | Qué contiene |
|------|--------------|
| `src/pages/` | Rutas del sitio |
| `src/components/` | Componentes reutilizables `.astro` |
| `src/layouts/` | Layouts base |
| `src/assets/` | Imágenes descargadas localmente y optimizadas con `astro:assets` |
| `src/content.config.js` | Configuración de Content Collections (Astro 5+) |
| `src/content/` | Datos y contenido de las colecciones (Markdown/MDX/JSON) |
| `.agents/skills/` | Skills de especialistas para Gemini (`desarrollo`, `ux-ui`, `backend`, `seguridad`, `qa`, `docs-seo`) |
| `docs/PLAN.md` | Plan general y checklist de fases |

## 5. Convenciones que la IA debe respetar

- Responder y comentar en español.
- Commits atómicos con Conventional Commits.
- Nunca commitear directo a `main`.
- Sin dependencias ni servicios de pago.
- Sin secretos en el repositorio (nunca usar `PUBLIC_` para claves secretas).
- Guardar archivos en codificación UTF-8 limpia sin BOM.

## 6. Archivo y límites

- Si la sección 3 supera ~40 entradas, mover las más antiguas a `docs/historial/archivo-AAAA-MM.md` y dejar aquí solo un enlace.
- Mantener la sección 1 corta: es lo único que la IA lee siempre.
