# Astro Template - Configuración Básica HSH

Este es un template preconfigurado de Astro con todas las herramientas y configuraciones básicas necesarias para iniciar proyectos rápidamente.

## 🚀 Características

- ✅ **Multi-idioma** (Español, Inglés, Francés) con i18n nativo de Astro
- ✅ **React** integrado y listo para usar
- ✅ **Tailwind CSS v4** configurado con colores personalizados HSH
- ✅ **Iconos** via astro-icon con Tabler Icons
- ✅ **SEO optimizado** con meta tags, Open Graph, y Twitter Cards
- ✅ **Sitemap** automático con soporte multi-idioma
- ✅ **Layouts base** compartidos (BaseHeadLayout, BaseLayout)
- ✅ **Estructura de carpetas** organizada (ui, features, pages)
- ✅ **TypeScript** con path aliases configurados

## 📁 Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── i18n/
│   │   ├── ui.ts              # Traducciones
│   │   └── utils.ts           # Utilidades i18n
│   ├── ui/
│   │   ├── _shared/
│   │   │   ├── components/    # Componentes compartidos
│   │   │   ├── layouts/       # Layouts base
│   │   │   │   ├── BaseHeadLayout.astro
│   │   │   │   └── BaseLayout.astro
│   │   │   └── constants/     # Constantes compartidas
│   │   ├── pages/             # Componentes específicos por página
│   │   └── styles/
│   │       ├── global.css
│   │       └── variables.css  # Colores HSH
│   └── pages/
│       ├── index.astro        # Redirect a /en/
│       ├── en/index.astro
│       ├── es/index.astro
│       └── fr/index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Colores HSH Disponibles

Los siguientes colores están disponibles en Tailwind:

- `hsh-black` - #222222
- `hsh-white` - #ffffff
- `hsh-white-soft` - #f5f5f5
- `hsh-black-soft` - #292828
- `hsh-purple` - #8C6B91
- `hsh-orange` - #FE9F06
- `hsh-blue-dark` - #383D5C
- `hsh-gray` - #6b6b6b
- `hsh-green-dark` - #42584C
- `hsh-red-dark` - #883529
- `hsh-zyan` - #125F74

Uso: `bg-hsh-purple`, `text-hsh-orange`, `border-hsh-blue-dark`

## 🌍 Sistema Multi-idioma

### Añadir nuevas traducciones

Edita `src/i18n/ui.ts`:

```typescript
export const ui = {
  es: {
    'nav.home': 'Inicio',
    // ... más traducciones
  },
  en: {
    'nav.home': 'Home',
    // ... más traducciones
  },
  fr: {
    'nav.home': 'Accueil',
    // ... más traducciones
  },
} as const;
```

### Usar traducciones en páginas

```astro
---
import { useTranslations } from "@i18n/utils";

const t = useTranslations('es');
---

<h1>{t('nav.home')}</h1>
```

### Traducciones con variables

```typescript
// En ui.ts
'footer.rights': '© {{year}} Todos los derechos reservados.'

// En tu componente
const t = useTranslations('es');
t('footer.rights', { year: new Date().getFullYear() })
// Resultado: "© 2025 Todos los derechos reservados."
```

## 🧩 Uso de Iconos

```astro
---
import { Icon } from 'astro-icon/components';
---

<!-- Tabler Icons -->
<Icon name="tabler:home" />
<Icon name="tabler:user" class="w-6 h-6" />
```

Busca iconos disponibles en: https://tabler.io/icons

## 🚀 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias                            |
| `npm run dev`             | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`           | Construir sitio de producción en `./dist/`      |
| `npm run preview`         | Vista previa de la build localmente             |
| `npm run astro ...`       | Ejecutar comandos de Astro CLI                  |

## ⚙️ Configuración Inicial

### 1. Actualizar la URL del sitio

En `astro.config.mjs`, cambia:

```javascript
export default defineConfig({
  site: "https://tu-dominio.com", // ← Actualizar aquí
  // ...
});
```

### 2. Personalizar meta tags por defecto

Edita los archivos en `src/pages/[lang]/index.astro` para cambiar el título y descripción.

### 3. Añadir favicon

Coloca tus archivos de favicon en la carpeta `public/`:
- `public/favicon.svg`
- `public/apple-touch-icon.png`
- `public/og-image.jpg` (para redes sociales)

## 📝 Path Aliases Configurados

- `@ui/*` → `src/ui/*`
- `@i18n/*` → `src/i18n/*`
- `@features/*` → `src/features/*`

Ejemplo de uso:

```astro
import BaseLayout from "@ui/_shared/layouts/BaseLayout.astro";
import { useTranslations } from "@i18n/utils";
```

## 🛠️ Tecnologías Incluidas

- [Astro](https://astro.build/) - Framework web moderno
- [React](https://react.dev/) - Biblioteca de UI
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework de CSS
- [astro-icon](https://github.com/natemoo-re/astro-icon) - Sistema de iconos
- [Tabler Icons](https://tabler.io/icons) - Set de iconos
- [Partytown](https://partytown.builder.io/) - Optimización de scripts externos

## 📖 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
