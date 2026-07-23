# 07_joyeria

Landing de joyería artesanal hecha con React + Vite.

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

## Comandos

```bash
npm run dev
```

```bash
npm run build
```
