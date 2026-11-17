# Historial del proyecto

> **Para la IA:** lee primero la sección **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualización:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atómico (`docs(historial): registra <cambio>`). Si el cambio no está aquí, para la IA no existe.

---

## 1. Estado actual

_Máximo ~15 líneas. Se reescribe en cada actualización, no se acumula._

- **Proyecto:** ecommerce (tienda de mascotas) — **Market-Pet**: Tienda de artículos para mascotas en Chile
- **Repositorio:** https://github.com/JCarvajalLab/astro-tienda-mascotas
- **Última actualización:** 2026-11-16
- **Fase activa:** `phase/01-design`
- **Rama de trabajo:** `phase/01-design`
- **Último commit relevante:** feat(carousel): remueve pills flotantes redundantes dejando fondo limpio
- **Despliegue:** servidor local único y estable activo en http://localhost:4321/
- **Qué funciona:** Marca **Market-Pet**, Hero Carousel inmersivo con fondo expandido a sangre (Generative Expand style: la fotografía abarca el 100% del banner de borde a borde, con el lado derecho completamente despejado y limpio para destacar a las mascotas sin marcos ni etiquetas flotantes redundantes; títulos, sellos y botones CTA en HTML/Tailwind CSS sobre degradado a la izquierda), 5 categorías circulares estilo Bootstrap, paleta 60-30-10 con Rojo Carmín Retail (`#E11D48`), y modal de despacho chileno con persistencia.
- **Qué está en progreso:** Cierre de Fase 1 (Diseño & Setup Base) y preparación de Fase 2 (Catálogo & Contenido con Content Collections).
- **Bloqueos o problemas conocidos:** ninguno; build limpio en 1.68s con imágenes WebP optimizadas, ESLint y Prettier 100% pasando sin errores.
- **Siguiente paso concreto:** Proceder al cierre de la Fase 1 en `docs/PLAN.md` y dar inicio a la Fase 2 (Catálogo & Contenido).

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
| 2026-11-16 | Sistema 60-30-10 con Rojo como acento de conversión principal | Equilibrio visual perfecto: 60% lienzo luminoso, 30% estructura neutra legible, 10% rojo de alta conversión para botones de compra y badges | Usar rojo en el 60% saturando la interfaz o usar fondos negros |
| 2026-11-16 | Opción 1 "Retail Carmín" como identidad oficial y botón de tema restaurado | Aprobación del usuario para la paleta definitiva 60-30-10 y restauración del botón de tema (sol/luna) en el Header | Mantener barras temporales de comparación o servidores de prueba múltiples |
| 2026-11-16 | Renombrar marca a Market-Pet y posponer modo nocturno | Ajuste a branding preferido por el usuario y simplificación de la interfaz en Fase 1 | Mantener nombre anterior o forzar botón de tema en header |
| 2026-11-16 | Hero Carousel moderno + Headings circulares de categorías | Inspirado en Bootstrap 5 Carousel y tiendas chilenas de mascotas (Belcando/Catit/Packs) con JS nativo puro | Hero estático o sliders dependientes de librerías externas pesadas |
| 2026-11-16 | Segmentación visual: Textos HTML a la izquierda y fotos IA a la derecha | Permite modificar ofertas y textos libremente sin alterar la gráfica, optimizando fotos a WebP con astro:assets | Generar banners estáticos con texto horneado en la imagen |
| 2026-11-16 | Fondo expandido a sangre (Generative Expand) en Hero Carousel | La fotografía abarca el 100% del fondo del banner sin marcos ni cajas aisladas, fusionándose con degradados | Mantener tarjetas rectangulares flotantes con marcos |
| 2026-11-16 | Retiro de pills flotantes redundantes en carrusel | Al expandirse la fotografía a sangre, los pills aislados sobraban; se despejó el lado derecho para lucir la escena | Mantener etiquetas secundarias flotando sobre la imagen |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-16 · `phase/01-design` · retiro de pills flotantes en hero carousel
- **Qué:** Limpieza visual del Hero Carousel retirando los badges secundarios flotantes (`BELCANDO & LEONARDO`, `MULTI-CAT FORMULA`, `DESCUENTOS EXCLUSIVOS`) que habían quedado aislados en la esquina derecha tras la eliminación de los marcos:
  1. Se eliminó el contenedor derecho residual del banner en `Carousel.astro`.
  2. Se expandió la columna de contenido textual (`lg:col-span-8`) para que los títulos y beneficios fluyan con mayor amplitud.
  3. El lado derecho de cada diapositiva queda 100% limpio y despejado, permitiendo apreciar sin ninguna interferencia a los cachorros, gatos y productos fotográficos de fondo.
- **Archivos clave:** `src/components/Carousel.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Limpieza compositiva, eliminación de ruido visual y priorización del punto focal en la fotografía de mascotas.
  - `desarrollo`: Retiro de `petTag` y elementos residuales en `Carousel.astro`.
  - `qa`: Verificación de sintaxis, linters y build (`npm run build` en 1.52s con 0 errores).
  - `docs-seo`: Actualización de la documentación en `HISTORIAL.md`.

### 2026-11-16 · `phase/01-design` · fondo expandido a sangre en hero carousel eliminando marcos
- **Qué:** Rediseño del fondo del Hero Carousel implementando el efecto "Generative Expand" a sangre completa:
  1. **Expansión a sangre (Full-Bleed):** Se eliminó la tarjeta flotante con marco blanco del lado derecho. Ahora la fotografía de alta resolución generada abarca todo el fondo del banner (`w-full h-full object-cover object-right`), extendiendo el ambiente y color de la escena de borde a borde.
  2. **Degradado de fusión cinematográfico:** Se aplicó una capa de degradado adaptada a la paleta de cada slide (`from-stone-950`, `from-sky-950` y `from-rose-950`) que se disuelve progresivamente hacia la derecha, dejando a las mascotas y productos 100% visibles, al tiempo que garantiza un contraste WCAG AAA para los textos y botones de la izquierda.
  3. **Composición unificada y orgánica:** La transición entre el texto comercial y los animalitos es completamente continua y natural, emulando los banners oficiales de retail de mascotas sin recortes artificiales.
- **Archivos clave:** `src/components/Carousel.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Dirección de arte para la eliminación de marcos duros, tratamiento de fondo continuo tipo Generative Expand y calibración de degradados de contraste.
  - `desarrollo`: Refactorización de capas en `Carousel.astro` con posicionamiento absoluto y optimización responsive de Astro `<Image />`.
  - `qa`: Verificación de linters (`npm run lint`), Prettier y compilación estática (`npm run build` en 1.99s con 0 errores).
  - `docs-seo`: Registro de la decisión en `HISTORIAL.md`.

### 2026-11-16 · `phase/01-design` · fotografias generadas por ia y segmentacion editable en carousel hero
- **Qué:** Generación e integración de activos fotográficos de alta resolución para el Hero Carousel y segmentación visual en dos columnas (textos a la izquierda y fotos a la derecha):
  1. **Generación con IA (`image-generator`):** Se generaron 3 fotografías de estudio comercial de alta calidad libres de derechos para el lado derecho de cada slide:
     - Slide 1 (`banner-mascotas-amigos.jpg`): Fotografía de un cachorro Jack Russell y un gato doméstico amigos, sonriendo sentados lado a lado con las patitas apoyadas al frente.
     - Slide 2 (`banner-gato-arena.jpg`): Fotografía de un gato atigrado curioso asomándose entre envases minimalistas ecológicos de arena sanitaria en tonos celestes y blancos.
     - Slide 3 (`banner-pack-ahorro.jpg`): Fotografía de estudio de una moderna torre rascador para gatos, cama ortopédica acolchada y juguetes para mascotas.
  2. **Procesamiento de alto rendimiento con `astro:assets`:** Las imágenes se almacenaron en `src/assets/banners/` y se procesan con `<Image />` de Astro (WebP automático, `width={640}`, `height={480}`, carga `eager` con prioridad alta en el primer slide y `lazy` en los siguientes para 0 CLS). La optimización redujo el peso de ~550 kB a ~15 kB (reducción del 97%).
  3. **Segmentación y modificabilidad completa:** El lado izquierdo contiene todos los títulos, porcentajes de descuento, sellos con checkmarks y botones CTA en HTML/Tailwind CSS puro, permitiendo que cualquier oferta o texto se modifique al instante sin alterar las imágenes.
- **Archivos clave:** `src/assets/banners/*`, `src/components/Carousel.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Dirección de arte para el prompt de las imágenes de estudio, encuadre 4:3 y distribución en dos columnas destacando las mascotas en el lado derecho.
  - `desarrollo`: Integración del componente `<Image />` de `astro:assets`, optimización responsiva y transiciones sutiles hover.
  - `qa`: Compilación de producción con optimización de imágenes (`npm run build` en 1.68s con 3 imágenes WebP generadas), verificación de linters (`npm run lint` -> 0 errores) y recarga del servidor local.
  - `docs-seo`: Registro de la decisión de segmentación en `HISTORIAL.md`.

### 2026-11-16 · `phase/01-design` · integracion de carousel hero moderno, categorias circulares y marca market-pet
- **Qué:** Implementación del nuevo Hero Carousel moderno y categorías circulares inspiradas en Bootstrap 5.3 y en las referencias visuales chilenas provistas por el usuario:
  1. **Branding oficial Market-Pet:** Actualización del logo y copys de cabecera y pie de página de "Patitas & Co." a **Market-Pet**.
  2. **Retiro temporal del botón de modo nocturno:** Siguiendo la indicación del usuario ("Recuerda que el modo nocturno lo vemos más adelante"), se retiró el toggle `#theme-toggle` del navbar para mantener la atención en la navegación y productos, conservando el modo claro luminoso por defecto.
  3. **Hero Carousel Moderno (`Carousel.astro`):** Carrusel de ancho completo con 3 diapositivas comerciales adaptadas de las imágenes de referencia:
     - Slide 1: Belcando & Leonardo Made in Germany holístico (sellos de carne fresca, cocción al vapor y sabor insuperable).
     - Slide 2: Catit Go Natural arenas ecológicas de cáscara de arveja con botón CTA rojo "COMPRAR AQUÍ" y sello Multi-Cat.
     - Slide 3: Packs Promocionales y de ahorro hasta 35% de descuento con despacho express en 24/48h.
     - Navegación con flechas redondeadas estilo Bootstrap, barras indicadoras inferiores, autoplay inteligente (6s) y pausa automática en hover en 100% JavaScript nativo (cero dependencias).
  4. **Categorías con Headings Circulares (`CircularCategories.astro`):** Fila de 5 categorías con círculos de gran formato, badges y botones "Ver catálogo »" inspirada en el ejemplo de Bootstrap Carousel y la referencia de tiendas de mascotas: Packs Promocionales (Rojo SALE), Alimento Perro (Cian), Alimento Gato (Amarillo), Juguetes Perro (Verde) y Juguetes Gato / Rascadores & Confort (Morado).
  5. **Integración limpia en `index.astro`:** Reemplazo del hero estático anterior, respetando la regla cromática 60-30-10 con Rojo Carmín Retail (`#E11D48`) para acentos.
- **Archivos clave:** `src/components/Carousel.astro`, `src/components/CircularCategories.astro`, `src/components/Header.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Adaptación visual de las piezas publicitarias (Belcando Made in Germany, Catit Go Natural) al carrusel, diagramación de headings circulares de categorías con badges flotantes y consistencia en la regla 60-30-10.
  - `desarrollo`: Creación de `Carousel.astro` y `CircularCategories.astro` en JS nativo sin frameworks adicionales, integración en `index.astro`, retiro de `#theme-toggle` en `Header.astro` y actualización de títulos en `BaseLayout.astro`.
  - `qa`: Ejecución de formateo con Prettier, verificación de ESLint (0 errores), compilación estática (`npm run build` en 1.14s) y verificación del hot-reloading en `http://localhost:4321/`.
  - `docs-seo`: Actualización de la documentación en `HISTORIAL.md` con desglose de skills participantes.

### 2026-11-16 · `phase/01-design` · consolidacion de paleta oficial retail carmin y boton de modo nocturno restaurado
- **Qué:** Consolidación definitiva de la identidad visual de la tienda tras la elección de la Opción 1 ("Retail Carmín"):
  1. Se fijó la paleta oficial 60-30-10 en `src/styles/global.css` (60% Blanco Slate `#F8FAFC`, 30% Pizarra Grafito `#0F172A`, 10% Rojo Carmín Retail `#E11D48`) con soporte adaptado de modo nocturno cuando el usuario lo active manualmente.
  2. Se restauró el botón de modo nocturno/claro (`#theme-toggle`) en el Header, ubicado junto al carrito de compras, con iconos accesibles sol/luna y guardado en `localStorage`.
  3. Se eliminaron los servidores auxiliares temporales (puertos 4322 y 4323) y el componente `PaletteSwitcher`, dejando activo únicamente el servidor principal en `http://localhost:4321/`.
- **Archivos clave:** `src/styles/global.css`, `src/components/Header.astro`, `src/layouts/BaseLayout.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Integración armónica del botón de modo nocturno en la cabecera manteniendo la jerarquía de conversión y el diseño 60-30-10.
  - `desarrollo`: Restauración del componente en `Header.astro`, limpieza de `BaseLayout.astro` y ajuste del script anti-FOUC.
  - `qa`: Cierre de puertos dev auxiliares, verificación de build (`npm run build` en 1.34s) y monitoreo de `http://localhost:4321/`.
  - `docs-seo`: Registro de la decisión final de color en `HISTORIAL.md`.

### 2026-11-16 · `phase/01-design` · aplicacion estricta de la regla 60-30-10 con rojo como acento de conversion
- **Qué:** Implementación del sistema cromático profesional 60-30-10 en Tailwind CSS v4 para ecommerce de mascotas, tomando el rojo preferido por el usuario como el 10% de acento de conversión:
  1. **60% Lienzo Dominante:** Fondos aireados y luminosos (Blanco Slate, Crema Avena o Lino) que dan amplitud y permiten resaltar la fotografía de productos.
  2. **30% Estructural & Textos:** Pizarra Grafito, Azul Petróleo o Salvia Botánico para tipografías de alto contraste, bordes y barras de categorías.
  3. **10% Acento de Conversión:** Rojo Carmín Retail (`#E11D48`), Rojo Rubí (`#D90429`) y Rojo Terracota (`#E0533C`) reservados estrictamente para botones de compra ("Agregar al Carrito", "Guardar" en modal), badges de descuento y alertas.
  4. Actualización de `PaletteSwitcher.astro` y sincronización en los 3 servidores locales (4321, 4322, 4323).
- **Archivos clave:** `src/styles/global.css`, `src/components/PaletteSwitcher.astro`, `src/components/RegionModal.astro`, `src/layouts/BaseLayout.astro`, `docs/HISTORIAL.md`
- **Agente(s) / Skills:**
  - `ux-ui`: Investigación y conceptualización de 3 paletas equilibradas basadas en la regla 60-30-10 con base roja, eliminando saturaciones innecesarias y garantizando ratios de contraste WCAG AA/AAA.
  - `desarrollo`: Refactorización de variables CSS semánticas en `global.css`, adaptación de `RegionModal.astro` y enlace dinámico de puertos locales con persistencia.
  - `qa`: Validación de compilación limpia (`npm run build` en 1.49s), linters y comprobación de hot-reloading en los 3 puertos concurrentes.
  - `docs-seo`: Actualización de la documentación en `HISTORIAL.md`.

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
