# 07_joyeria

Landing de joyería artesanal hecha con React + Vite. Es una sola página con
las secciones de hero, colecciones, pieza destacada, artesanía, testimonios y
newsletter. Proyecto del curso de Cibertec.

## Requisitos

- Node.js 18 o superior
- npm (viene con Node)

## Instalación

```bash
git clone https://github.com/jadx2/07_joyeria.git
cd 07_joyeria
npm install
```

## Comandos

```bash
npm run dev
```

Levanta el servidor de desarrollo (Vite) en `http://localhost:5173`.

```bash
npm run build
```

Genera la versión de producción en `dist/`.

```bash
npm run preview
```

Sirve el `dist/` ya construido para revisarlo en local.

```bash
npm run lint
```

Pasa oxlint sobre el código.

```bash
npm run format
```

Formatea todo con Prettier.

## Estructura

```
src/
  main.jsx              punto de entrada, importa los estilos
  App.jsx               arma las secciones de la página
  components/           componentes reutilizables (Button, Tag, Container...)
  sections/             cada sección de la landing
  data/                 los datos de cada sección (slides, colecciones...)
  assets/images/        las imágenes locales
  styles/               reset.css, variables.css, global.css
```

## Sistema de diseño

Todos los estilos usan variables CSS definidas en `src/styles/variables.css`.
No hardcodear colores ni tamaños: si falta un valor, se agrega ahí primero.

### Colores

| Variable             | Valor                       | Uso                           |
| -------------------- | --------------------------- | ----------------------------- |
| `--color-bg`         | `#faf7f2`                   | Fondo general, marfil         |
| `--color-bg-alt`     | `#efe7d6`                   | Fondo de secciones alternas   |
| `--color-text`       | `#1c1a16`                   | Texto principal, casi negro   |
| `--color-text-muted` | `#7a6e5f`                   | Texto secundario, gris cálido |
| `--color-primary`    | `#b8976a`                   | Oro principal                 |
| `--color-accent`     | `#c9a96e`                   | Oro claro, para detalles      |
| `--color-light`      | `#faf7f2`                   | Texto sobre fondo oscuro      |
| `--color-border`     | `rgba(184, 151, 106, 0.25)` | Bordes sutiles                |

### Tipografías

| Variable         | Fuente           | Uso                        |
| ---------------- | ---------------- | -------------------------- |
| `--font-display` | Playfair Display | Títulos (`h1`, `h2`, `h3`) |
| `--font-body`    | Jost             | Todo el resto del texto    |

### Espaciados

| Variable      | Valor   | Uso                        |
| ------------- | ------- | -------------------------- |
| `--space-xs`  | `8px`   | Espaciado mínimo           |
| `--space-sm`  | `16px`  | Espaciado pequeño          |
| `--space-md`  | `24px`  | Espaciado medio            |
| `--space-lg`  | `40px`  | Espaciado grande           |
| `--space-xl`  | `64px`  | Espaciado extra            |
| `--space-2xl` | `144px` | Separación entre secciones |

### Layout y otros

| Variable          | Valor        | Uso                            |
| ----------------- | ------------ | ------------------------------ |
| `--container-max` | `1023px`     | Ancho máximo del contenido     |
| `--container-pad` | `56px`       | Padding lateral                |
| `--transition`    | `300ms ease` | Transición base de la interfaz |

## Cómo contribuir

Antes de escribir código, lee [CONTRIBUTING.md](CONTRIBUTING.md): convenciones
de nombres, BEM, y el flujo de ramas y PRs.

## Integrantes

<!-- TODO: cada integrante se agrega aquí (nombre y usuario de GitHub) -->
