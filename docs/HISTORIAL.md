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
- **Último commit relevante:** feat(region): implementa modal de comuna segun referencia y selector de 3 paletas en vivo
- **Despliegue:** 3 servidores locales activos en simultáneo: http://localhost:4321/ (Opción 1: Naranja), http://localhost:4322/ (Opción 2: Teal), http://localhost:4323/ (Opción 3: Rojo Retail)
- **Qué funciona:** Modo claro puro y luminoso obligatorio (desacoplado del SO con `@custom-variant dark`), modal fiel a la referencia de diseño "Escoge dónde recibir tus compras" (Región/Comuna de Chile en cascada y guardado en `localStorage`), barra superior interactiva para alternar las 3 opciones de paletas en caliente, header de 2 niveles con mega-menú de subcategorías y catálogo de 6 productos.
- **Qué está en progreso:** Cierre de Fase 1 y transición a Fase 2 (Content Collections y catálogo con fotos en `src/assets/`)
- **Bloqueos o problemas conocidos:** ninguno; build en 1.3s, ESLint y Prettier 100% pasando
- **Siguiente paso concreto:** Confirmar la paleta de color preferida por el usuario para consolidar y avanzar a Fase 2 (Catálogo & Contenido)

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
| 2026-11-16 | Enriquecer skill `ux-ui` con principios de `frontend-design` | Evitar diseños genéricos ("AI slop"), aportar dirección de arte intencional, tipografía con carácter y diseño de estados completos en el ecommerce | Mantener skill genérica o reemplazar perdiendo reglas de accesibilidad y subagente browser |
| 2026-11-16 | Transparencia obligatoria de skills en respuestas e historial | El usuario debe saber siempre qué skill intervino y qué aporte realizó en cada tarea, asegurando que se activen activamente | Respuestas genéricas sin identificar qué skill ejecutó el trabajo |
| 2026-11-16 | Modo claro por defecto y Navbar en 2 niveles con mega-menú | Experiencia ecommerce estándar de alta conversión: buscador siempre visible, selector de despacho por comuna (Chile) y navegación por subcategorías en hover | Navbar plano simple o forzar modo oscuro por preferencias del sistema operativo |
| 2026-11-16 | `@custom-variant dark` para desacoplar Tailwind v4 del tema de Windows | En Tailwind v4 `dark:` activa por media query del SO; con variant custom solo activa si se inyecta clase explícita | Permitir que Windows fuerce modo nocturno no deseado |
| 2026-11-16 | Modal dinámico de Región/Comuna según referencia de retail | Flujo estándar de supermercado/retail chileno (Lider/Jumbo/Falabella) con selects en cascada y persistencia | Dropdown plano sin selects en cascada |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-16 · `phase/01-design` · modal de despacho segun referencia y 3 opciones de paletas en localhost
- **Qué:** Solución definitiva al modo oscuro no deseado, maquetación del modal de despacho según referencia exacta del usuario e implementación de 3 opciones de color en simultáneo:
  1. **Desacoplamiento total del modo oscuro:** Se agregó `@custom-variant dark (&:where(.dark, .dark *));` en `global.css` para evitar que Tailwind CSS v4 active estilos oscuros automáticamente basados en la configuración de Windows. Se limpiaron residuos en `localStorage` y se aseguró fondo blanco luminoso por defecto.
  2. **Modal de Región/Comuna de Chile fiel a la referencia:** Creación de `RegionModal.astro` con diseño calcado a la imagen provista: título "Escoge dónde recibir tus compras", subtítulo informativo, selects en cascada (Región primero, habilitando las comunas correspondientes de Chile) y botones redondeados "Cancelar" y "Guardar" con persistencia en `localStorage`.
  3. **3 Opciones de Color en vivo:** Creación del componente `PaletteSwitcher.astro` y habilitación de 3 servidores de desarrollo simultáneos: Puerto 4321 (Opción 1: Naranja Cálido), Puerto 4322 (Opción 2: Teal Médico) y Puerto 4323 (Opción 3: Rojo Retail Chileno).
- **Archivos clave:** `src/styles/global.css`, `src/components/RegionModal.astro`, `src/components/PaletteSwitcher.astro`, `src/components/Header.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`
- **Agente(s) / Skills:**
  - `ux-ui`: Reproducción pixel-perfect del modal de despacho chileno (Imagen 2), eliminación del modo oscuro forzado y formulación técnica de 3 paletas cromáticas comerciales de alta conversión.
  - `desarrollo`: Creación de `RegionModal.astro` y `PaletteSwitcher.astro`, lógica en cascada JS para comunas de Chile, variables CSS dinámicas y configuración de múltiples puertos dev.
  - `qa`: Pruebas de compilación limpia (`npm run build` en 1.36s), ESLint 9 (0 errores), Prettier (100% pasando) y verificación de los puertos 4321, 4322 y 4323 activos y respondiendo en 30ms.
  - `docs-seo`: Registro de decisiones y memoria en `HISTORIAL.md`.
- **Notas:** Servidores locales 4321, 4322 y 4323 activos para revisión visual inmediata.

### 2026-11-16 · `phase/01-design` · navbar de 2 niveles con megamenu, selector de comuna chile y paleta luminosa
- **Qué:** Rediseño completo de la navegación y la paleta visual para adaptarse a estándares de ecommerce de alta conversión:
  1. Header horizontal dividido en 2 niveles: Fila superior con Logo Patitas & Co., barra de búsqueda prominente, selector interactivo de región/comuna de Chile con persistencia en `localStorage`, enlace Mi Cuenta / Iniciar sesión, botón de carrito con badge dinámico y toggle de tema. Fila inferior con categorías principales (Perros, Gatos, Accesorios, Farmacia, Pequeñas Mascotas, Ofertas) y mega-menú desplegable en hover con subcategorías organizadas en columnas.
  2. Ajuste del script anti-FOUC para inicializar siempre en modo claro por defecto (evitando activar modo oscuro automáticamente por preferencias del sistema del usuario), adoptando una paleta luminosa, fresca y cálida (fondos blanco/crema marfil `#FDFCFB`, acentos naranja/mandarina y detalles esmeralda).
- **Archivos clave:** `src/components/Header.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Diseño de la arquitectura de información del header en 2 niveles, mega-menú desplegable con subcategorías, selector de comunas para Chile, eliminación del modo oscuro forzado por defecto y propuesta de paletas cromáticas comerciales.
  - `desarrollo`: Componente modular `Header.astro`, interactividad con JavaScript nativo para el selector de comunas, navegación accesible con `focus-within` y refactorización de `BaseLayout.astro`.
  - `qa`: Verificación de sintaxis, linters (`npm run lint`), formateo con Prettier (`npm run format:check`), compilación (`npm run build`) y hot-reloading en servidor dev local.
  - `docs-seo`: Registro de decisiones y avance en `HISTORIAL.md`.
- **Notas:** Servidor de desarrollo respondiendo en tiempo real en `http://localhost:4321/`.

### 2026-11-16 · `phase/01-design` · inicialización de astro 5, tailwind v4 y diseño base con servidor local activo
- **Qué:** Inicialización completa del proyecto ecommerce en Astro 5.18.2 con Tailwind CSS v4 (`@tailwindcss/vite`), ESLint 9 con `eslint-plugin-astro` y Prettier con `prettier-plugin-astro`. Configuración de seguridad HTTP `public/_headers` (anti-clickjacking `DENY`, `nosniff`, CSP restrictiva, Permissions-Policy). Creación de `BaseLayout.astro` con script inline síncrono anti-FOUC para tema oscuro/claro, selector interactivo de tema, metadatos Open Graph en PNG (`/images/og-default.png`) y robots.txt. Portada `index.astro` con Hero cálido, grid de categorías principales, 6 productos destacados con modelo de datos defensivo, garantías comerciales y servidor de desarrollo activo en `http://localhost:4321/`.
- **Archivos clave:** `package.json`, `astro.config.mjs`, `eslint.config.js`, `.prettierrc.mjs`, `public/_headers`, `public/robots.txt`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`
- **Agente(s) / Skills:**
  - `desarrollo`: Configuración de Astro 5, Vite con plugin Tailwind v4, estructura de layouts, componentes y scripts nativos sin frameworks pesados ni TypeScript.
  - `ux-ui`: Dirección de arte cálida y comercial para tienda de mascotas ("Patitas & Co."), paleta 60-30-10 con acentos ámbar/naranja, tipografía con contraste, soporte de modo oscuro y micro-interacción en botón de carrito.
  - `seguridad`: Implementación estricta de `public/_headers` (CSP, frame-ancestors 'none', nosniff), generación de Open Graph en PNG y validación de atributos seguros.
  - `qa`: Verificación de sintaxis, linters (`npm run lint`), formateo (`npm run format:check`), compilación limpia (`npm run build` en 0.9s) y lanzamiento del servidor local.
  - `docs-seo`: Metadatos SEO, Open Graph PNG, robots.txt, actualización de `PLAN.md` y registro en `HISTORIAL.md`.
- **Notas:** Servidor de desarrollo activo de fondo en `http://localhost:4321/` para previsualización inmediata.

### 2026-11-16 · `phase/01-design` · regla de transparencia y visibilidad obligatoria de skills
- **Qué:** Se actualizan `AGENTS.md` y `docs/HISTORIAL.md` estableciendo la regla obligatoria de visibilidad de especialistas: el agente debe desglosar en cada respuesta y en cada registro de cambios qué skills se activaron y el aporte exacto de cada una.
- **Archivos clave:** `AGENTS.md`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:** orquestador (reglas de coordinación), docs-seo (registro en historial)
- **Notas:** Garantiza visibilidad total para el usuario sobre el trabajo de cada especialista.

### 2026-11-16 · `phase/01-design` · integración de frontend-design en skill ux-ui
- **Qué:** Se actualiza `.agents/skills/ux-ui/SKILL.md` incorporando la filosofía de diseño y dirección de arte de la skill `frontend-design` (evitar plantillas genéricas "AI slop", paleta 60-30-10 para ecommerce, diseño de estados completos como carritos vacíos/skeletons, micro-interacciones y diseño para la zona del pulgar en móviles), manteniendo el rigor técnico de Tailwind v4, accesibilidad WCAG AA y la inspección visual con el subagente `browser`.
- **Archivos clave:** `.agents/skills/ux-ui/SKILL.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, docs-seo
- **Notas:** Preparado para dar una identidad visual única y atractiva a la tienda de mascotas.

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
- **Transparencia obligatoria de skills:** En cada entrega del chat y en cada entrada del historial, detallar explícitamente qué skills se activaron y qué aporte realizó cada una (ej. `- **Agente(s) / Skills:** ux-ui (diseño de cards), desarrollo (maquetación Astro), qa (lint y build)`).

## 6. Archivo y límites

- Si la sección 3 supera ~40 entradas, mover las más antiguas a `docs/historial/archivo-AAAA-MM.md` y dejar aquí solo un enlace.
- Mantener la sección 1 corta: es lo único que la IA lee siempre.
