# Poemarte

Web de Poemarte — *Banda Sonora de Palabras*.

## Stack

- **Astro** (output: static) — generación estática + endpoints SSR para Keystatic
- **Tailwind CSS v4** — estilos
- **GSAP + ScrollTrigger** — animaciones
- **Keystatic CMS** — edición visual de contenido
- **i18n** — castellano, catalán, inglés
- **Vercel adapter** — hosting

## Estructura

```
src/
├── components/      # Hero, Footer, Nav, Cursor + secciones por página
│   ├── sobre/       # secciones de /sobre
│   └── servicios/   # secciones de /servicios
├── content/         # colaboraciones (gestionadas por Keystatic)
│   └── colaboraciones/{es,ca,en}/
├── i18n/            # es.json, ca.json, en.json + helper t()
├── layouts/
│   └── Layout.astro # layout base con SEO, hreflang, cursor, transición
├── pages/
│   ├── index.astro          # HOME (es por defecto)
│   ├── sobre.astro          # SOBRE
│   ├── servicios.astro      # SERVICIOS
│   ├── contacto.astro       # CONTACTO
│   ├── ca/                  # versiones en catalán
│   ├── en/                  # versiones en inglés
│   ├── keystatic/[...].astro     # panel CMS
│   └── api/keystatic/[...].ts    # endpoints CMS
└── styles/
    └── global.css   # paleta, tipografías, scrollbar, cursor
```

## Comandos

```sh
npm run dev      # localhost:4321
npm run build    # build de producción
npm run preview  # preview del build
```

## CMS

Editor visual en `/keystatic` (solo dev por ahora).

## Deploy

Configurado con `@astrojs/vercel`. Push a `main` → deploy automático.
