# Plan de proyectos con Astro

> Documento vivo. Se edita a medida que avanzamos. Cada cambio importante se anota en el [Registro de cambios](#12-registro-de-cambios).

## 1. Objetivo

Construir **3 proyectos profesionales con Astro**, de menos a más complejidad, que sirvan para aprender y como portafolio vendible para trabajo freelance.

| # | Proyecto | Complejidad | Qué se aprende |
|---|----------|-------------|----------------|
| 1 | Landing page de una **veterinaria** | Baja | Componentes `.astro`, layouts, props, Tailwind, formularios, despliegue |
| 2 | **Portafolio** con casos de estudio | Media | Content Collections, rutas dinámicas, SEO, sitemap, optimización de imágenes |
| 3 | Ecommerce de una **tienda de artículos para mascotas** | Alta | Catálogo, carrito, checkout, pagos, Astro en modo servidor y PostgreSQL (solo si se necesita) |

**Alcance técnico:** los 3 proyectos son **solo Astro 5+**, con **JavaScript** (no TypeScript, permitiendo `zod` nativo de `astro:content`) y **Tailwind CSS v4**. No se agrega Vue ni React salvo que se justifique por escrito (ver 3.1).

## 2. Principios

- **100% gratuito** en gestión, herramientas y despliegue (ver sección 4).
- **Commits atómicos**: un cambio lógico por commit.
- **Trabajo por fases**, cada fase en su propia rama.
- **Documentar mientras se construye**: este archivo y los README se actualizan junto al código.
- **Seguridad y accesibilidad desde el inicio**, no al final.
- **La solución más simple y estable gana** (ver 2.1).
- **Lo que se sube a GitHub es producción**: nada se sube sin pasar las pruebas de la sección 5.4.
- **Los secretos nunca se versionan** (ver 8.7).

### 2.1 Criterio de calidad: simple, estable y optimizado

Al agregar o corregir algo, la IA (y nosotros) elegimos la solución más acorde y estable, no la primera que funcione. Ejemplo: si algo se resuelve con 1000 líneas pero puede hacerse bien en 400, se hace en 400.

Reglas:

1. **Primero lo que ya existe:** usar las funciones nativas de Astro, Tailwind o JavaScript antes de escribir código propio o agregar una dependencia.
2. **Menos código, no código críptico:** optimizar es reducir y simplificar, no "comprimir". Si una versión corta es difícil de leer, se prefiere la legible.
3. **Dependencias con criterio:** solo si ahorran bastante trabajo, están mantenidas, son estables y no tienen costo. Versiones fijadas (sin `latest`).
4. **No duplicar:** si se repite tres veces, pasa a un componente o función.
5. **Refactor con respaldo:** al reemplazar código por una versión más corta, se verifica que el comportamiento no cambió (build y pruebas pasando).
6. **Justificar la elección:** si hay varias opciones, el PR explica en 2-3 líneas por qué se eligió esa.

## 3. Stack

| Área | Herramienta |
|------|-------------|
| Lenguajes | HTML, CSS, **JavaScript** (sin TypeScript `.ts`) y SQL (solo si hay base de datos) |
| Framework | **Astro 5+** (único framework) |
| Estilos | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Interactividad | JavaScript nativo dentro de Astro (`<script>`); sin Vue ni React |
| Contenido | Markdown / MDX + Content Collections (`src/content.config.js`) |
| Base de datos | PostgreSQL, **solo si el proyecto la necesita** (ver proyecto 3) |
| Servidor (proyecto 3) | Astro en modo servidor (SSR) con endpoints y Actions; sin backend aparte |
| Control de versiones | Git + GitHub |
| Gestión | GitHub Issues + GitHub Projects (tablero kanban) |
| CI/CD | GitHub Actions |
| Calidad | ESLint, Prettier, Lighthouse |
| Entorno de IA | **Gemini (Antigravity)** con `AGENTS.md`, Skills en `.agents/skills/` y subagentes nativos |

### 3.1 Stack detallado por proyecto

| Proyecto | Necesita | No necesita |
|----------|----------|-------------|
| Landing veterinaria | Astro, Tailwind, formulario con servicio gratuito, imágenes optimizadas | Base de datos, servidor, Vue/React |
| Portafolio con casos de estudio | Astro, Tailwind, `@astrojs/sitemap`, Content Collections (solo para proyectos) | Base de datos, servidor, Vue/React |
| Tienda de mascotas | Astro SSR (adaptador del hosting), Tailwind, PostgreSQL (órdenes y stock), pagos en sandbox | Backend separado (Django), Vue/React |

**Regla sobre Vue/React:** solo se incorporan si algo no se puede resolver de forma simple con Astro y JavaScript nativo (por ejemplo, un carrito con estado muy complejo). Si ocurre, el agente propone la opción, explica por qué y se registra en `HISTORIAL.md` antes de instalarla.

**Criterios de reevaluación en la tienda (proyecto 3):**

1. Se empieza **solo con Astro**. Las fases de catálogo y carrito no necesitan nada más.
2. Al terminar la fase 3 (carrito) se revisa el código. Si quedó claro y fácil de mantener, se sigue sin framework.
3. Si el estado compartido (contador del menú, panel lateral, checkout) se volvió enredado, primero se prueba **Nano Stores** (librería mínima que funciona con JavaScript nativo).
4. Solo si eso no alcanza, se agrega **una isla de Vue** únicamente para el carrito y el checkout. El resto del sitio sigue siendo Astro puro.
5. Login de usuarios: se evalúa en las fases 4 a 6, con una biblioteca vigente y compatible y revisión del especialista de Seguridad.
6. Panel de administración: Astro no trae uno. Queda como mejora futura (CMS gratuito, carga manual en la base de datos o, si se justifica, Django por su admin incluido).

**Integraciones de Astro previstas:** `@tailwindcss/vite` (Tailwind v4), `@astrojs/mdx`, `@astrojs/sitemap` y el adaptador de despliegue del proyecto 3. Versiones por fijar al crear cada proyecto.

### 3.2 Imágenes y APIs

Temática: mascotas. Opciones gratuitas (confirmar límites antes de usar):

| Fuente | Qué ofrece | Clave |
|--------|------------|-------|
| Dog CEO API | Fotos de perros por raza y subraza | No requiere; sin límite publicado, uso "best effort" |
| Cataas | Fotos de gatos | No requiere |
| The Cat API | Fotos de gatos con datos de razas | Requiere clave gratuita |
| Pexels o Unsplash | Fotos generales (veterinaria, accesorios, comida) | Requieren clave gratuita; revisar límites y licencia |

**Decisión recomendada (simple y segura):**

1. Las imágenes se **descargan en desarrollo** con un script y se guardan en el repositorio (`src/assets/`). Astro las optimiza con `astro:assets`.
2. Así el sitio publicado **no depende de una API externa** (no se cae, no es lento) y **no expone ninguna clave** en el navegador.
3. No se hace hotlink a APIs de terceros en producción.
4. Las claves gratuitas (Pexels, Unsplash, The Cat API) se usan solo en el script local, guardadas en `.env` (ver 8.7).
5. **Licencias:** las imágenes de APIs sirven para demostraciones de portafolio. Para un cliente real se usan fotos propias o con licencia clara.
6. Las fotos de productos de la tienda son datos del catálogo (archivos propios o de demostración), no vienen de una API aleatoria.

**¿Crear una API propia?** No hace falta para las imágenes. En la tienda, el catálogo se expone con endpoints de Astro (`/api/productos`), que sí forman parte del proyecto 3.

## 4. Costo cero: dónde vive cada cosa

| Necesidad | Opción gratuita |
|-----------|-----------------|
| Repositorios y tablero | GitHub (Issues + Projects) |
| Hosting sitios estáticos | Cloudflare Pages, Netlify, Vercel o GitHub Pages |
| Servidor de la tienda (proyecto 3) | Astro SSR en Cloudflare, Netlify o Vercel (revisar límites del plan gratuito) |
| Base de datos (solo si se necesita) | PostgreSQL en el plan gratuito de Neon, Supabase o similar; usar un driver serverless compatible con el hosting elegido (`@neondatabase/serverless` o `postgres`) |
| Formularios de contacto | Formspree, Web3Forms o Netlify Forms (plan gratuito) |
| Dominio | Subdominio gratuito del hosting (`*.pages.dev`, `*.netlify.app`) |
| Pagos (proyecto 3) | Modo sandbox/pruebas de Flow, Webpay o Mercado Pago; sin cobro real mientras sea demo |
| Analítica | Cloudflare Web Analytics o Umami autohospedado |

> Pendiente: verificar los límites vigentes de cada plan gratuito antes de elegir.

## 5. Flujo de Git

### 5.1 Ramas

```
main                 ← siempre estable y desplegable
└── develop          ← integración de fases
    ├── phase/01-setup
    ├── phase/02-layout
    ├── feature/hero-section
    └── fix/navbar-mobile
```

- `main`: solo recibe merges desde `develop` al cerrar una fase.
- `develop`: rama de integración.
- `phase/NN-nombre`: una rama por fase del proyecto.
- `feature/*`, `fix/*`, `docs/*`, `chore/*`: ramas cortas que salen de la rama de fase (o de `develop`) y vuelven por Pull Request.

### 5.2 Commits atómicos (Conventional Commits)

Formato: `tipo(alcance): descripción en imperativo`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

Ejemplos:

```
feat(hero): agrega sección hero con llamado a la acción
style(navbar): ajusta espaciado en móvil
docs(plan): actualiza checklist de la fase 2
chore(deps): actualiza astro a la última versión
```

Reglas:

1. Un commit = un cambio lógico que compila y no rompe nada.
2. Si el mensaje necesita "y" para explicarse, probablemente son dos commits.
3. Nunca mezclar formato/refactor con cambios de funcionalidad.
4. Pull Request por fase o feature, con descripción y checklist.

### 5.3 Cierre de fase

1. Todos los ítems del checklist de la fase marcados.
2. Lighthouse y revisión de seguridad aprobados.
3. PR de `phase/*` hacia `develop`, revisión y merge.
4. Cuando `develop` está estable: PR hacia `main` y etiqueta de versión (`v0.1.0`, `v0.2.0`, …).

### 5.4 Pruebas antes de subir (push = producción)

Todo lo que llega a `main` se despliega, así que se trata como producción. Cada cambio pasa por estas verificaciones antes del merge.

**Locales (antes del commit/push):**

| Verificación | Herramienta |
|--------------|-------------|
| Formato y estilo | `eslint`, `prettier --check` |
| Compilación | `astro build` |
| Pruebas | Vitest (lógica), Playwright o subagente `browser` (flujos críticos como carrito y checkout) |
| Dependencias vulnerables | `npm audit` |
| Secretos en el código | `gitleaks` (hook pre-commit y CI) |
| Seguridad del servidor (proyecto 3) | Revisión del especialista de Seguridad: validación de entradas, consultas SQL parametrizadas, cabeceras, rate limiting |

**Automáticas (GitHub Actions, gratuitas):**

- El workflow de CI ejecuta las verificaciones de la tabla en cada Pull Request.
- Lighthouse en cambios de páginas (mínimo 90 en las 4 categorías).
- Dependabot activado para alertas y actualizaciones de seguridad.
- Revisar con el especialista de **Seguridad** si el cambio toca formularios, autenticación, pagos, cabeceras, CORS o dependencias.

**Protección de ramas:**

- `main` protegida: solo se entra por PR, con el CI en verde.
- Nota: la protección de ramas es gratuita en repositorios públicos; en privados requiere plan de pago, así que los proyectos con portafolio público conviene mantenerlos públicos.

**Regla de oro:** si una verificación falla, se corrige la causa; no se desactiva la prueba para que pase.

## 6. Estructura de repositorios

Un repositorio por proyecto dentro de la carpeta de trabajo:

```
astro-landing-veterinaria/
Portafolio/
astro-tienda-mascotas/
```

Estructura base de cada proyecto Astro adaptado a Gemini (Antigravity):

```
├── .github/
│   ├── workflows/ci.yml              ← CI automático en PRs
│   ├── dependabot.yml                ← Alertas de dependencias
│   └── pull_request_template.md      ← Checklist de cada PR
├── .agents/
│   └── skills/                       ← Especialistas con carga bajo demanda (sección 8)
│       ├── desarrollo/SKILL.md
│       ├── ux-ui/SKILL.md
│       ├── backend/SKILL.md
│       ├── seguridad/SKILL.md
│       ├── qa/SKILL.md
│       └── docs-seo/SKILL.md
├── docs/
│   ├── PLAN.md                       ← este documento
│   ├── HISTORIAL.md                  ← memoria del proyecto para la IA (sección 8.6)
│   └── historial/                    ← entradas antiguas archivadas
├── public/
├── src/
│   ├── assets/                       ← Imágenes locales optimizadas con astro:assets
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content.config.js             ← Configuración de Content Collections (Astro 5+)
│   ├── content/                      ← Datos de colecciones
│   └── styles/
├── AGENTS.md                         ← Reglas y rol de Orquestador (carga automática)
├── astro.config.mjs
└── README.md
```

## 7. Fases por proyecto

### Proyecto 1: Landing page

Temática: **veterinaria** (servicios, equipo, horarios, contacto y agendamiento de horas por formulario).

- [ ] **Fase 1: Setup** (`phase/01-setup`): crear proyecto Astro, Tailwind, ESLint/Prettier, repo y primer despliegue.
- [ ] **Fase 2: Layout y componentes** (`phase/02-layout`): layout base, navbar, footer, sistema de diseño (colores, tipografías).
- [ ] **Fase 3: Secciones** (`phase/03-sections`): hero, servicios (consulta, vacunas, peluquería, urgencias), equipo, testimonios, horarios y preguntas frecuentes.
- [ ] **Fase 4: Contacto** (`phase/04-contact`): formulario con servicio gratuito, validación, protección antispam.
- [ ] **Fase 5: Calidad y lanzamiento** (`phase/05-launch`): SEO básico, accesibilidad, Lighthouse >= 90, meta tags, favicon.

### Proyecto 2: Portafolio con casos de estudio

- [ ] **Fase 1: Setup** (`phase/01-setup`)
- [ ] **Fase 2: Base** (`phase/02-base`): layout, navegación, modo oscuro.
- [ ] **Fase 3: Contenido** (`phase/03-content`): Content Collections para proyectos, con una página de detalle tipo caso de estudio por cada uno (problema, tecnologías, solución, enlace en vivo y repositorio).
- [ ] **Fase 4: Interactividad** (`phase/04-interactividad`): filtros de proyectos con JavaScript nativo, sin framework.
- [ ] **Fase 5: SEO y rendimiento** (`phase/05-seo`): sitemap, Open Graph, optimización de imágenes.
- [ ] **Fase 6: Lanzamiento** (`phase/06-launch`)

### Proyecto 3: Ecommerce

Temática: tienda de artículos para mascotas (comida, juguetes, accesorios, higiene), con categorías por tipo de animal.

- [ ] **Fase 1: Diseño** (`phase/01-design`): modelo de datos (productos, categorías, órdenes), rutas y wireframes.
- [ ] **Fase 2: Catálogo** (`phase/02-catalog`): productos en Content Collections, páginas de categoría y de producto. Aún sin base de datos.
- [ ] **Fase 3: Carrito** (`phase/03-cart`): carrito con JavaScript nativo y `localStorage`.
- [ ] **Fase 4: Servidor y base de datos** (`phase/04-server-db`): Astro SSR con adaptador, PostgreSQL para órdenes y stock, endpoints o Actions. Esta fase se hace solo si el stock y las órdenes lo requieren.
- [ ] **Fase 5: Checkout y pagos** (`phase/05-checkout`): integración en modo sandbox.
- [ ] **Fase 6: Seguridad y pruebas** (`phase/06-hardening`): validaciones, consultas parametrizadas, rate limiting, cabeceras, pruebas de flujos críticos.
- [ ] **Fase 7: Lanzamiento** (`phase/07-launch`)

## 8. Agentes y Skills en Gemini (Antigravity)

### 8.1 Modelo de trabajo

El agente principal de Gemini actúa automáticamente como **Orquestador** al leer `AGENTS.md` en la raíz del proyecto. Según la tarea, activa las **Skills especialistas** (`.agents/skills/*/SKILL.md`) mediante *Progressive Disclosure* (revelación progresiva para ahorrar tokens) y delega en **subagentes nativos** (`browser` para inspección visual en Chrome DevTools e `invoke_subagent` para auditorías independientes de Seguridad/QA).

```
                     ┌────────────────────────────┐
    Tú  ───────────► │ Orquestador (AGENTS.md)    │
                     └─────────────┬──────────────┘
         ┌───────────┬─────────┬───┴──────┬────────────┬──────────┐
         ▼           ▼         ▼          ▼            ▼          ▼
    desarrollo     ux-ui    backend   seguridad       qa       docs-seo
     (Skill)      (Skill +   (Skill)  (Skill +     (Skill +    (Skill)
                  browser)            subagent)    browser)
```

### 8.2 Roles

| Rol / Skill | Ubicación | Responsabilidad | Límites |
|-------------|-----------|-----------------|---------|
| **Orquestador** | `AGENTS.md` | Entender la tarea, dividirla, activar skills/subagentes, integrar, proponer commits y ramas | No saltar validaciones ni commitear directo a `main` |
| **Desarrollo (frontend)** | `.agents/skills/desarrollo/SKILL.md` | Componentes Astro, Tailwind v4, JavaScript nativo, rutas, Content Collections | No agregar Vue/React ni tomar decisiones de seguridad sin validar |
| **UX/UI** | `.agents/skills/ux-ui/SKILL.md` | Jerarquía visual, paleta, tipografía, accesibilidad, responsive, copy y revisión con `browser` | No alterar lógica de servidor |
| **Backend** | `.agents/skills/backend/SKILL.md` | Endpoints y Actions de Astro SSR, PostgreSQL parametrizado, pagos en sandbox | Nunca confiar en datos del cliente ni cambiar el diseño visual |
| **Seguridad** | `.agents/skills/seguridad/SKILL.md` | Auditar dependencias, secretos, `PUBLIC_`, CORS, CSP, validación de entradas | Revisión cruzada con `invoke_subagent`; no desactivar pruebas |
| **QA / Testing** | `.agents/skills/qa/SKILL.md` | Linters, build, pruebas, Lighthouse >= 90 y flujos interactivos con `browser` | Nunca desactivar una prueba para que pase |
| **Docs / SEO** | `.agents/skills/docs-seo/SKILL.md` | `README.md`, `PLAN.md`, `HISTORIAL.md`, meta tags, sitemap, mensajes de commit | No modificar código funcional de negocio |

### 8.3 Protocolo de ejecución

1. Al recibir una instrucción, el Orquestador (`AGENTS.md` ya cargado en contexto) lee la sección `"1. Estado actual"` de `docs/HISTORIAL.md` (y `docs/PLAN.md` solo si requiere el detalle de la fase).
2. Identifica la fase activa y la rama correspondiente.
3. Activa las skills necesarias de `.agents/skills/`.
4. Cada subtarea lógica se consolida en **un commit atómico** con mensaje convencional.
5. Antes de cerrar una fase o tocar áreas sensibles, ejecuta la auditoría de **Seguridad** y **QA** (apoyándose en `invoke_subagent` y `browser`).
6. Actualiza el checklist en `docs/PLAN.md` y registra el avance en `docs/HISTORIAL.md` mediante su commit atómico (`docs(historial): registra <cambio>`).

### 8.4 Archivo `AGENTS.md`

Ubicado en la raíz de cada repositorio. Gemini (Antigravity) lo descubre y carga automáticamente en cada sesión sin necesidad de pedírselo manualmente.

### 8.5 Formato de las Skills (`.agents/skills/<nombre>/SKILL.md`)

Cada especialista vive en su propia subcarpeta dentro de `.agents/skills/` con encabezado YAML (`name` y `description`). Así Gemini conoce los 6 especialistas en todo momento pero solo inyecta las instrucciones detalladas de aquellos que necesita en el turno actual.

### 8.6 Historial del proyecto (memoria para la IA)

Las IA pierden el contexto entre sesiones y, si no tienen un resumen, deben releer el repositorio completo (más tiempo y más tokens). Para evitarlo, cada proyecto tiene un `docs/HISTORIAL.md`.

**Estructura:**

1. **Estado actual:** snapshot corto (~15 líneas: fase, rama, qué funciona, siguiente paso). Es lo primero que lee la IA.
2. **Decisiones importantes:** qué se decidió y por qué, para no repetir debates.
3. **Registro de cambios:** una entrada por cada push o cierre de tarea, la más reciente arriba.
4. **Mapa del código:** dónde está cada cosa.
5. **Convenciones:** reglas que la IA debe respetar.

**Reglas de uso:**

- Al iniciar una sesión, la IA lee la sección 1 de `HISTORIAL.md` y solo después abre archivos concretos.
- Al terminar una tarea o antes de abrir un PR, se actualiza `HISTORIAL.md` con un commit atómico: `docs(historial): registra <cambio>`.
- La sección 1 se reescribe; la sección 3 acumula entradas.
- Cuando la sección 3 supera ~40 entradas, las antiguas se mueven a `docs/historial/archivo-AAAA-MM.md`.

### 8.7 API keys y secretos

**Regla base:** una clave que da acceso a datos privados, permite escribir o puede generar cobros es **secreta**. Una clave pensada para el navegador, limitada por dominio y de solo lectura es **pública**.

| Tipo | Ejemplo | Dónde va |
|------|---------|----------|
| Secreta | Claves de pago, base de datos, APIs con cuota o costo, tokens de escritura | Variables de entorno del servidor, nunca en el frontend ni en el repo |
| Pública | Clave de mapas restringida por dominio, API de imágenes de solo lectura con límite gratuito | Puede ir en el frontend si el proveedor la diseñó para eso |

**Reglas:**

1. `.env` va en `.gitignore`; se versiona solo `.env.example` con nombres de variables y sin valores.
2. En Astro, las variables con prefijo `PUBLIC_` **se incluyen en el código que ve el navegador**. Las secretas nunca llevan ese prefijo.
3. Un sitio estático (GitHub Pages, Cloudflare Pages) no puede esconder una clave en el frontend. Si una API requiere clave secreta, la llamada se hace:
   - en **tiempo de build** (la respuesta o imagen se guarda en el proyecto y la clave no sale), o
   - a través de un **endpoint/función serverless gratuita** (Cloudflare Workers, Netlify Functions) que guarda la clave como secreto del servicio.
4. Las claves de producción se guardan en los secretos del hosting y de GitHub Actions (`Settings → Secrets`).
5. Si una clave se filtra, se **revoca y se regenera** de inmediato; borrar el commit no basta porque queda en el historial.
6. Preferir APIs gratuitas con clave pública o sin clave. Las APIs de imágenes quedan sujetas a revisión de Seguridad: se aceptan en desarrollo o si la clave es de solo lectura, tiene límite gratuito y no habilita acciones sensibles.
7. Se registra cada API usada en `docs/HISTORIAL.md` (nombre, si su clave es pública o secreta y dónde se guarda), sin escribir nunca el valor.

## 9. Definición de terminado (por fase)

- [ ] Checklist de la fase completo.
- [ ] Commits atómicos con mensajes convencionales.
- [ ] Sin secretos ni credenciales en el repo (escaneo con gitleaks limpio).
- [ ] Verificaciones de la sección 5.4 pasando (lint, build, pruebas, auditoría de dependencias).
- [ ] Solución revisada con el criterio de la sección 2.1 (simple, estable, sin código duplicado).
- [ ] Revisión de Seguridad y QA hechas.
- [ ] Lighthouse: rendimiento, accesibilidad, buenas prácticas y SEO >= 90.
- [ ] README y este plan actualizados.
- [ ] `docs/HISTORIAL.md` actualizado (estado actual y registro de cambios).
- [ ] PR aprobado y mergeado.

## 10. Decisiones pendientes

- [x] Temáticas: landing de veterinaria, portafolio y tienda de artículos para mascotas.
- [x] Stack: solo Astro 5+, JavaScript y Tailwind CSS v4; sin Vue/React salvo justificación.
- [x] Sin Django: el servidor de la tienda será Astro SSR.
- [x] Sin blog: el portafolio se centra en casos de estudio de proyectos.
- [x] Herramienta de IA en el entorno local: Gemini (Antigravity) con Skills en `.agents/skills/` y `AGENTS.md`.
- [ ] Hosting definitivo para sitios estáticos.
- [ ] Hosting con soporte SSR y proveedor de PostgreSQL para la tienda (y driver compatible).
- [ ] Pasarela de pago para el ecommerce (Flow, Webpay o Mercado Pago).
- [ ] Fuente de imágenes para las demos (Dog CEO, Cataas, Pexels, Unsplash) y nombre de la veterinaria y la tienda.
- [ ] Reevaluar al terminar el carrito (fase 3 de la tienda) si basta JavaScript nativo, si se agrega Nano Stores o si se usa una isla de Vue (criterios en 3.1).
- [ ] Si el contenido del portafolio será en español, inglés o ambos.

## 11. Ideas futuras

- Internacionalización (español/inglés).
- Panel de administración para el ecommerce.
- Blog en el portafolio (como una colección nueva de Content Collections, sin rehacer nada).
- Cuarto proyecto: dashboard o app con datos en tiempo real.

## 12. Registro de cambios

| Fecha | Cambio |
|-------|--------|
| 2026-11-09 | Versión inicial del plan |
| 2026-11-09 | Se agrega el historial del proyecto (`HISTORIAL.md`, sección 8.6) y se actualizan estructura, `AGENTS.md`, protocolo y definición de terminado |
| 2026-11-09 | Se agregan criterio de calidad simple y estable (2.1), pruebas antes de subir (5.4), manejo de API keys y secretos (8.7) y las reglas correspondientes en `AGENTS.md` y el checklist |
| 2026-11-11 | Se quita el blog del portafolio (ahora con casos de estudio) y se agregan los criterios de reevaluación de un framework extra en la tienda (3.1) |
| 2026-11-11 | Se define el stack: solo Astro, JavaScript y Tailwind, sin Vue/React ni Django; PostgreSQL solo si se necesita. Se fijan las temáticas (veterinaria, portafolio, tienda de mascotas), se agrega el stack detallado (3.1) y las imágenes y APIs (3.2), y se reescriben las fases del ecommerce |
| 2026-11-11 | Se adapta la arquitectura de agentes a Gemini (Antigravity): fusión de `orquestador` en `AGENTS.md`, migración de especialistas a `.agents/skills/*/SKILL.md`, uso de subagentes nativos (`browser` e `invoke_subagent`) y actualización técnica a Astro 5+ (`src/content.config.js`) y Tailwind CSS v4 (`@tailwindcss/vite`) |
