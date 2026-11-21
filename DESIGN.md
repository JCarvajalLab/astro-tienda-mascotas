# Sistema de Diseño Oficial: Market-Pet
*Inspirado en el estándar `awesome-design-md` para agentes de IA y desarrollo frontend.*

Este documento define la única fuente de verdad (*Source of Truth*) para **colores**, **tipografía**, **espaciado** y **componentes de interfaz** del ecommerce **Market-Pet**. Todo agente de IA y desarrollador debe adherirse estrictamente a estas especificaciones.

---

## 1. Filosofía de Marca & Dirección de Arte

- **Identidad de Marca:** Tienda de mascotas cálida, cercana, orgánica y confiable. El diseño equilibra el cariño hacia los animales con el rigor transaccional del retail chileno (precios claros en CLP, despachos por comuna y garantías).
- **Regla Visual 60 - 30 - 10:**
  - **60% Dominante (Lienzo & Fondo):** Tono cálido orgánico en modo claro (*Warm Biscuit*) y fondos envolventes y profundos en modo nocturno.
  - **30% Estructural (Contraste, Textos & Bordes):** Pizarra grafito legible, bordes suaves y tarjetas tridimensionales.
  - **10% Acento de Conversión (Rojo Carmín):** Reservado estrictamente para botones de compra (*Agregar al carrito*), insignias de descuento (*SALE / OFF*) y estados interactivos activos.
- **Sin plantillas genéricas ("AI Slop"):** Prohibidos degradados morados/cyberpunk sin justificación, emojis en menús de navegación profesionales o bordes excesivamente estridentes.

---

## 2. Paleta Cromática y Tokens Semánticos

### 2.1. Modo Claro Oficial (Warm Biscuit / Cálido Natural)
- `--color-60-bg`: `#FAF7F2` (Lienzo cálido arena suave, evita el blanco frío de hospital).
- `--color-60-surface`: `#FFFFFF` (Blanco puro para tarjetas, modales y drop-downs para aportar relieve).
- `--color-30-text`: `#0F172A` (Pizarra Grafito profundo para lectura nítida).
- `--color-30-muted`: `#64748B` (Slate suave para descripciones secundarias y metadatos).
- `--color-30-border`: `#E8E2D9` (Bordes cálidos y orgánicos que unifican la estructura).
- `--color-30-subtle`: `#F1ECE3` (Contenedores secundarios, selectores y fila de navegación).
- `--color-10-accent`: `#E11D48` (Rojo Carmín Retail de alta conversión).
- `--color-10-accent-hover`: `#BE123C` (Carmín profundo al pasar el cursor).
- `--color-10-accent-light`: `#FFE4E6` (Fondo suave para insignias de descuento).

---

### 2.2. Modo Nocturno Oficial (Warm Charcoal & Cacao) y Variantes Cromáticas

La paleta oficial definitiva adoptada para Market-Pet es **Warm Charcoal & Cacao** (`#141110` / `#1D1816`), complementando armónicamente la identidad *Warm Biscuit* con calidez orgánica y cero fatiga visual. Todas las variantes nocturnas mantienen contraste WCAG AA superior a 4.5:1.

| Token / Rol | 1. Warm Charcoal *(Oficial Brand)* | 2. Midnight Slate *(Tecnológico)* | 3. Forest Pine *(Botánico)* | 4. Pure Onyx *(OLED)* |
|---|---|---|---|---|
| **Lienzo 60% (`--color-60-bg`)** | `#141110` | `#090D16` | `#09120E` | `#000000` |
| **Superficie 30% (`--color-60-surface`)** | `#1D1816` | `#0F172A` | `#111D16` | `#111111` |
| **Contenedores Elevados** | `#27201C` | `#1E293B` | `#1A2A21` | `#1E1E1E` |
| **Texto Principal (`--color-30-text`)** | `#FBF6F0` | `#F8FAFC` | `#F0F7F2` | `#FFFFFF` |
| **Texto Secundario (`--color-30-muted`)** | `#B0A297` | `#94A3B8` | `#95AC9C` | `#A3A3A3` |
| **Bordes (`--color-30-border`)** | `#2D2521` | `#1E293B` | `#1C3024` | `#262626` |
| **Acento de Conversión (10%)** | `#FB7185` (Coral Carmín) | `#F43F5E` (Frambuesa) | `#F43F5E` (Frambuesa) | `#E11D48` (Carmín Puro) |

> **Metodología de Evaluación Cromática (Theme Lab Widget):**
> Para proyectos de ecommerce y aplicaciones web, se establece como estándar no imponer una única paleta a ciegas. Se implementa un widget flotante en vivo (`ThemeLabWidget.astro`) que inyecta tokens mediante atributos HTML (`data-dark-theme="..."`) y variables CSS en tiempo de ejecución. Esto permite al cliente o equipo de producto auditar en tiempo real el comportamiento visual de cabeceras, tarjetas, menús y botones antes de cerrar la elección definitiva.

---

## 3. Tipografía & Jerarquía Editorial

### 3.1. Familia Tipográfica
- **Pila tipográfica de sistema:**
  `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
  *(Prioriza rendimiento absoluto de 100 en Lighthouse y cero saltos de renderizado FOUT).*

### 3.2. Escala Tipográfica Oficial
- `text-[9px] / text-[10px]`: Etiquetas de badges, SKU y sobretítulos en mayúsculas (`tracking-wider`, `font-bold`).
- `text-xs` (12px): Subtítulos de navegación, datos de reseñas, garantías y precios tachados.
- `text-sm` (14px): Textos de navegación, inputs de formulario, botones de compra y descripciones.
- `text-base` (16px): Párrafos de lectura en fichas de producto y precios principales.
- `text-lg` (18px) a `text-xl` (20px): Títulos de tarjetas de producto y encabezados de sección secundarios (`font-black`, `tracking-tight`).
- `text-2xl` (24px) a `text-3xl` (30px): Títulos de categorías y encabezados principales en móvil.
- `text-4xl` (36px) a `text-5xl` (48px): Hero LCP, titulares promocionales de banners emocionales y Club VIP.

### 3.3. Tracking & Pesos
- **Encabezados:** `font-black` (900) o `font-extrabold` (800) con `tracking-tight` (-0.025em) para solidez visual de retail moderno.
- **Precios en Pesos Chilenos (CLP):** `font-black`, formato `$XX.XXX` con separador de miles.
- **Textos de lectura:** `font-normal` (400) o `font-medium` (500) con `leading-relaxed` (1.625) para máxima legibilidad.

---

## 4. Escala de Espaciado & Cuadrícula (Grid de 4px / 8px)

Nunca usar valores arbitrarios fuera de la escala armónica:
- `space-1` (4px): Separación micro entre iconos y textos (`gap-1`).
- `space-2` (8px): Espacio interior de botones compactos y badges (`p-2`, `gap-2`).
- `space-3` (12px): Padding interior de inputs y tarjetas móviles (`p-3`, `gap-3`).
- `space-4` (16px): Padding estándar de tarjetas de catálogo y márgenes móviles (`p-4`, `gap-4`).
- `space-6` (24px): Separación entre columnas de grilla de catálogo (`gap-6`, `py-6`).
- `space-8` (32px): Separación vertical estándar entre secciones de página (`py-8`, `my-8`).
- `space-12` (48px) a `space-16` (64px): Espaciado generoso de secciones mayores (`py-12`, `py-16`).

---

## 5. Especificaciones de Componentes Clave

### 5.1. Tarjeta de Producto (Product Card)
- **Radio de borde:** `rounded-2xl` (16px).
- **Fondo:** `bg-white` (claro) / `dark:bg-surface` (nocturno).
- **Borde:** `border border-stone-200/90` / `dark:border-subtle`.
- **Hover:** `hover:border-rose-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`.
- **Botón de compra:** Siempre visible con texto explícito *"Agregar al carrito"* e icono de cesta, sin depender únicamente de un signo `+` ambiguo.

### 5.2. Botones de Acción (CTAs)
- **Primario de Conversión:** `bg-brand-primary text-white font-extrabold rounded-xl shadow-xs hover:bg-rose-700 active:scale-95 transition-all`.
- **Filtros Inactivos:** `bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200 hover:bg-stone-200 rounded-xl`.
- **Filtros Activos:** `bg-rose-600 text-white shadow-xs font-bold rounded-xl`.

### 5.3. Navegación & Mega-Menú
- **Header:** Estilo *Vitrina Split Showcase* con micro-iconos monocromáticos (cero emojis en listas).
- **Móvil:** Drawer offcanvas deslizable con acordeones táctiles de mínimo 44px de altura.

---

## 6. Accesibilidad (WCAG AA) & Animación Defensiva

1. **Contraste de Color:** Mínimo 4.5:1 para texto normal y 3:1 para textos grandes o componentes interactivos.
2. **Anti-FOUC:** Todo tema oscuro debe resolverse de forma síncrona en el `<head>` antes de que el navegador comience a pintar píxeles.
3. **Motion Reducido:** `@media (prefers-reduced-motion: reduce)` desactiva animaciones y transiciones forzadas (`transition-duration: 0.01ms !important`).
