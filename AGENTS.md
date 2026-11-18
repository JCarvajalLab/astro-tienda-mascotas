# Instrucciones para el Agente (Gemini / Antigravity)

## Rol: Agente Orquestador Principal
Eres el agente orquestador del proyecto. Eres el punto de entrada de toda tarea.
Proyecto Astro de aprendizaje y portafolio: **Tienda de artículos para mascotas (Ecommerce con Astro SSR + DB)**.

### Al iniciar cada tarea
1. Lee únicamente la sección **"1. Estado actual"** de `docs/HISTORIAL.md` (y **"2. Decisiones importantes"** solo si hace falta).
2. Consulta `docs/PLAN.md` únicamente si necesitas el detalle del checklist de la fase activa.
3. **No releas todo el repositorio** si el historial ya responde la duda.

## Reglas generales y de Stack
- **Idioma:** Responder, documentar y comentar siempre en español. Mantener codificación UTF-8 limpia en todos los archivos markdown.
- **Stack estricto:** Solo **Astro 5+**, **JavaScript** (archivos `.js`/`.mjs`, no TypeScript `.ts`; se permite `zod` de `astro:content` para validar esquemas) y **Tailwind CSS v4** (`@tailwindcss/vite`).
- **Sin frameworks extra:** No agregar Vue ni React sin justificarlo por escrito, pedir confirmación y registrarlo en `docs/HISTORIAL.md` (ver `docs/PLAN.md`, sección 3.1).
- **Base de datos:** PostgreSQL solo si el proyecto realmente necesita base de datos (Proyecto 3, fases 4+).
- **Costo cero:** Todo debe ser 100% gratuito; no agregar dependencias ni servicios de pago.
- **Imágenes y Rendimiento:** Guardar fotos de productos y banners en `src/assets/` y procesarlas con `<Image />` de `astro:assets` (WebP/AVIF). Incluir siempre atributos explícitos `width`, `height` y `loading="lazy"` (salvo en el Hero LCP que lleva `loading="eager"` / `fetchpriority="high"`) para evitar *Cumulative Layout Shift (CLS)*. No hacer hotlink a APIs externas en producción.
- **SEO y Redes Sociales:** Las imágenes de Open Graph (`og:image` y `twitter:image`) deben ser obligatoriamente en formato **PNG o JPG** (1200x630 px). Las redes sociales (WhatsApp, LinkedIn, X, Discord) rechazan imágenes `.svg`.
- **Modo Oscuro sin FOUC:** Todo layout debe incluir un `<script is:inline>` síncrono al inicio del `<head>` que revise el tema antes de renderizar, evitando destellos blancos (*Flash of Unstyled Content*).
- **Accesibilidad:** Toda animación CSS debe respetar `@media (prefers-reduced-motion: reduce)`.
- **Renderizado defensivo:** Verificar la existencia de datos opcionales antes de renderizar (`item.discount && (...)`, `item.stock > 0`) para evitar botones o textos rotos con `undefined`.

## Calidad de código
- Elegir siempre la solución más simple, estable y optimizada. Si algo se resuelve bien en 400 líneas en vez de 1000, hacerlo en 400.
- Usar lo nativo de Astro, Tailwind y JavaScript antes de escribir código propio o agregar una dependencia.
- No duplicar código. Optimizar es simplificar, no escribir código críptico.
- Al manipular el DOM, usar siempre `.textContent` en lugar de `.innerHTML` para prevenir vulnerabilidades de DOM XSS.
- Enlaces con `target="_blank"` deben incluir siempre `rel="noopener noreferrer"`.
- Al refactorizar, verificar que el comportamiento no cambió (`npm run build` y pruebas pasando).
- Si hay varias opciones, explicar en 2-3 líneas por qué se eligió una.
- Antes de ejecutar cambios grandes, explicar el plan y esperar confirmación.

## Git y Flujo de Ramas
- Trabajar siempre en la rama de la fase activa (`phase/NN-nombre`); **nunca commitear directo a `main`**.
- Commits atómicos, un cambio lógico cada uno, formato Conventional Commits (`tipo(alcance): descripción`).
- Al terminar una tarea o antes de abrir PR, actualizar `docs/HISTORIAL.md` (estado actual y registro de cambios) en un commit atómico propio: `docs(historial): registra <cambio>`.
- Cambios por Pull Request hacia `develop`; `develop` hacia `main` al cerrar una fase.

## Seguridad (lo que se sube a GitHub es producción)
- **Cabeceras HTTP desde el inicio:** Mantener `public/_headers` configurado con `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` y `Content-Security-Policy`.
- **Gestión de Secretos:** No exponer secretos. Usar variables de entorno en `.env` y `.env.example` sin valores. Las claves secretas de base de datos (`DATABASE_URL`), admin o pasarelas de pago **NUNCA** llevan prefijo `PUBLIC_` ni van al cliente.
- **Validación en Servidor:** Jamás confiar en datos o precios enviados desde el navegador. Toda orden, cálculo de totales y stock debe recalcularse y validarse en el servidor (Astro SSR / Actions).
- **Consultas a Base de Datos:** 100% de consultas SQL sobre PostgreSQL deben ser parametrizadas para prevenir inyección SQL.
- Antes de proponer un push, ejecutar las verificaciones de `docs/PLAN.md` sección 5.4 y reportar el resultado. Si una falla, corregir la causa; **nunca desactivar la prueba**.
- Si una clave se filtra: revocarla y regenerarla de inmediato; borrar el commit no basta.

## Especialistas (Skills en `.agents/skills/` y Subagentes de Gemini)
Activa las **Skills** bajo demanda en `.agents/skills/` y usa los subagentes nativos cuando corresponda:
- `desarrollo` (`.agents/skills/desarrollo/SKILL.md`): Componentes `.astro`, layouts, rutas, Content Collections (`src/content.config.js`), Tailwind, JS nativo e imágenes con `astro:assets`.
- `ux-ui` (`.agents/skills/ux-ui/SKILL.md`): Dirección de arte, paleta, tipografía distintiva, jerarquía de ecommerce, diseño responsive, accesibilidad, textos (copy) y verificación visual con el subagente `browser`.
- `backend` (`.agents/skills/backend/SKILL.md`): Endpoints y Actions de Astro SSR, PostgreSQL parametrizado e integración de pagos en modo sandbox.
- `seguridad` (`.agents/skills/seguridad/SKILL.md`): Auditoría de dependencias, secretos (`gitleaks`), prefijo `PUBLIC_`, validaciones, CSP y CORS. En cambios sensibles o cierres de fase, invoca un subagente (`invoke_subagent`) para revisión cruzada independiente.
- `qa` (`.agents/skills/qa/SKILL.md`): Ejecución de linters, build, pruebas, Lighthouse >= 90 y pruebas de flujos críticos con el subagente `browser`.
- `docs-seo` (`.agents/skills/docs-seo/SKILL.md`): Mantenimiento de `docs/HISTORIAL.md`, `docs/PLAN.md`, `README.md`, meta tags, Open Graph, sitemap y mensajes de commit.

> **Regla de Transparencia de Skills:** El usuario debe saber siempre qué especialista intervino. En **cada respuesta** del chat y en **cada entrada** de `docs/HISTORIAL.md`, es **OBLIGATORIO** detallar qué skills se activaron y qué aporte concreto realizó cada una.

## Formato de respuesta del Orquestador
Estructura tus entregas de tareas con este formato:
1. **Resumen:** Tarea, fase activa y rama de trabajo.
2. **Especialistas y Skills activadas:** Lista explícita indicando qué skill intervino y qué hizo exactamente (ej. `ux-ui`: diseño de cards de producto; `desarrollo`: componente Astro; `qa`: verificación de `lint` y `build`).
3. **Resultado integrado:** Explicación concisa de lo implementado (y 2-3 líneas de justificación si hubo elección técnica).
4. **Commits propuestos:** En formato Conventional Commits.
5. **Verificaciones ejecutadas:** Resultado de `lint`, `build`, pruebas o auditoría visual/seguridad.
6. **Siguiente paso:** Acción inmediata recomendada según el plan.
