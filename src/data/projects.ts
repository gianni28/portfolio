import type { ImageMetadata } from "astro";

import oblicua1 from "../assets/projects/oblicua-1.png";
import oblicua2 from "../assets/projects/oblicua-2.png";
import oblicua3 from "../assets/projects/oblicua-3.png";
import nextplayer1 from "../assets/projects/proyecto1-1.webp";
import nextplayer2 from "../assets/projects/proyecto1-2.webp";
import nextplayer3 from "../assets/projects/proyecto1-3.webp";
import medico1 from "../assets/projects/proyecto2-1.webp";
import medico2 from "../assets/projects/proyecto2-2.webp";
import medico3 from "../assets/projects/proyecto2-3.webp";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "demo" | "code" | "video";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  badge?: string;
  description: string;
  highlights: string[];
  note?: string;
  tech: string[];
  links: ProjectLink[];
  images: { src: ImageMetadata; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "oblicua",
    title: "Oblicua",
    badge: "Nuevo",
    tagline: "Texto e imágenes en perspectiva sobre cualquier foto, directo en el navegador.",
    description:
      "Nació para poner el título de mis covers de piano sobre el atril de los videos y terminó siendo una herramienta general: subes una foto, marcas las cuatro esquinas de una superficie y el texto o la imagen se adapta a su ángulo. Exporta la foto completa o solo el contenido en PNG transparente, listo para usar en un editor de video.",
    highlights: [
      "Transformación proyectiva (homografía) implementada desde cero sobre Canvas 2D, sin librerías.",
      "Remuestreo bilineal con alfa premultiplicado y fusión «multiplicar» para que el texto se vea impreso en la superficie.",
      "Procesamiento 100 % local: las fotos nunca salen del dispositivo.",
      "Interfaz táctil con lupa de precisión, arrastrar y soltar y pegado desde el portapapeles.",
    ],
    tech: ["JavaScript", "Canvas API", "HTML", "CSS", "Netlify"],
    links: [{ label: "Probar Oblicua", href: "https://oblicua.netlify.app/", kind: "demo" }],
    images: [
      { src: oblicua2, alt: "Oblicua mostrando el título «Fear of the Dark» en perspectiva sobre un cuadro" },
      { src: oblicua1, alt: "Vista general de Oblicua con el ejemplo y el panel de controles" },
      { src: oblicua3, alt: "Oblicua en la versión para celular" },
    ],
  },
  {
    slug: "nextplayer",
    title: "NextPlayer",
    tagline: "Descubre a los futbolistas que más se han revalorizado en el mercado.",
    description:
      "Aplicación web en React que reúne a los jugadores de fútbol con mayor revalorización en el mercado actual. Combina web scraping para obtener los datos, una base de datos en la nube y un despliegue separado de frontend y backend.",
    highlights: [
      "Datos de mercado obtenidos con web scraping y almacenados en Firebase.",
      "Registro e inicio de sesión de usuarios.",
      "Frontend desplegado en Vercel y backend en Render.",
    ],
    note: "El primer inicio de sesión puede tardar unos segundos: el backend está en el plan gratuito de Render.",
    tech: ["React", "Firebase", "Web scraping", "Vercel", "Render"],
    links: [
      { label: "Ver demo", href: "https://frontend-next-player.vercel.app/login", kind: "demo" },
      { label: "Código", href: "https://github.com/gianni28/frontendNextPlayer", kind: "code" },
    ],
    images: [
      { src: nextplayer1, alt: "Pantalla de inicio de sesión de NextPlayer" },
      { src: nextplayer2, alt: "Listado de jugadores revalorizados en NextPlayer" },
      { src: nextplayer3, alt: "Detalle de jugadores en NextPlayer" },
    ],
  },
  {
    slug: "centro-medico",
    title: "Centro médico de La Sabana",
    tagline: "Gestión de médicos, pacientes y citas para un centro médico.",
    description:
      "Aplicación de escritorio en Java para la gestión de un centro médico, con vistas diseñadas en Scene Builder y persistencia de datos. Los pacientes pueden agendar citas con médicos específicos, lo que ordena el flujo de trabajo del centro.",
    highlights: [
      "Operaciones CRUD completas para médicos y pacientes.",
      "Agendamiento de citas con un médico específico.",
      "Interfaz en JavaFX diseñada con Scene Builder y datos persistentes.",
    ],
    tech: ["Java", "JavaFX", "Scene Builder"],
    links: [
      { label: "Ver video", href: "https://youtu.be/oU_JBw_fEJA", kind: "video" },
      { label: "Código", href: "https://github.com/gianni28/centro-medico-de-la-sabana", kind: "code" },
    ],
    images: [
      { src: medico1, alt: "Pantalla principal del Centro médico de La Sabana" },
      { src: medico2, alt: "Formulario de registro en el Centro médico de La Sabana" },
      { src: medico3, alt: "Otra vista de la aplicación del Centro médico de La Sabana" },
    ],
  },
];
