# Portafolio · Giovanni Raffa

Sitio personal de Giovanni Raffa, estudiante de último semestre de Ingeniería Informática en la Universidad de La Sabana. Reúne proyectos, experiencia y datos de contacto.

**En vivo:** https://giovanniraffa.netlify.app

## Stack

- [Astro 4](https://astro.build): sitio estático, HTML generado en el build y JavaScript mínimo en el cliente.
- [Tailwind CSS 3](https://tailwindcss.com): estilos con un sistema de colores y tipografías propio (`tailwind.config.mjs`).
- `astro:assets`: las capturas se optimizan en el build (WebP, varios tamaños y `srcset`).
- `react-icons`: los íconos se renderizan en el servidor, no envían React al navegador.
- `@astrojs/sitemap`, metadatos Open Graph y datos estructurados (JSON-LD) para SEO.

## Estructura

```text
src/
├── assets/          # Retrato y capturas de proyectos (se optimizan en el build)
├── components/      # Secciones: Hero, Projects, Experience, About, Contact…
├── data/
│   ├── projects.ts  # Contenido de los proyectos
│   └── site.ts      # Nombre, enlaces, correo y navegación
├── layouts/         # Layout base con SEO
└── pages/index.astro
public/              # og.png, favicon, robots.txt
```

### Agregar un proyecto

1. Copia las capturas (idealmente 16:9) a `src/assets/projects/`.
2. Agrega un objeto al arreglo de `src/data/projects.ts` con título, descripción, puntos destacados, tecnologías, enlaces e imágenes.

No hay que tocar ningún componente.

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor local en `localhost:4321`                  |
| `npm run build`   | Revisa tipos (`astro check`) y genera `./dist/`     |
| `npm run preview` | Sirve el build localmente                           |
