import type { ImageMetadata } from "astro";

import riffkeys1 from "../assets/projects/riffkeys-1.png";
import riffkeys2 from "../assets/projects/riffkeys-2.png";
import riffkeys3 from "../assets/projects/riffkeys-3.png";
import oblicuaVideo from "../assets/projects/oblicua-video.png";
import oblicua2 from "../assets/projects/oblicua-2.png";
import oblicua3 from "../assets/projects/oblicua-3.png";
import nextplayer1 from "../assets/projects/nextplayer-1.png";
import nextplayer2 from "../assets/projects/nextplayer-2.png";
import nextplayer3 from "../assets/projects/nextplayer-3.png";
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
    slug: "riffkeys",
    title: "Riffkeys",
    badge: "En desarrollo",
    tagline: "De la tab al piano: convierte canciones de guitarra en arreglos para dos manos.",
    description:
      "Tocar metal en piano implica pasar a mano tablaturas de guitarra a partitura. Riffkeys automatiza ese paso: importa un Guitar Pro, MusicXML, MIDI o una tab en texto, reparte las pistas entre las dos manos y adapta cada nota al registro del piano. El resultado se ve como notas cayendo y como partitura, y se exporta para seguir trabajándolo en MuseScore.",
    highlights: [
      "Importa Guitar Pro, MusicXML y MIDI, más un parser propio de tablaturas en texto que detecta cuerdas, afinaciones bajadas y trastes de dos cifras.",
      "Arreglador a dos manos: sugiere qué toca cada mano, mueve octavas, une notas dobladas y reduce acordes a lo que una mano alcanza.",
      "Notas cayendo en Canvas a 60 fps sincronizadas con un reproductor propio en Web Audio, y teclado MIDI conectado por USB con Web MIDI.",
      "Exporta a MIDI y MusicXML con tonalidad estimada (Krumhansl-Schmuckler); las pruebas verifican que lo exportado se vuelve a importar sin perder notas.",
    ],
    note: "En desarrollo activo. Próximos módulos: práctica con el teclado MIDI (aciertos, bucles y tempo progresivo) y notas cayendo en perspectiva sobre el video de las manos.",
    tech: ["React", "TypeScript", "Vite", "alphaTab", "Web Audio", "Web MIDI", "Vitest"],
    links: [
      { label: "Probar Riffkeys", href: "https://riffkeys.netlify.app/", kind: "demo" },
      { label: "Código", href: "https://github.com/gianni28/riffkeys", kind: "code" },
    ],
    images: [
      { src: riffkeys1, alt: "Riffkeys mostrando un riff de guitarra como notas cayendo para las dos manos" },
      { src: riffkeys2, alt: "Partitura para piano generada por Riffkeys a partir de una tablatura" },
      { src: riffkeys3, alt: "Riffkeys en la versión para celular" },
    ],
  },
  {
    slug: "oblicua",
    title: "Oblicua",
    badge: "Nuevo",
    tagline: "Texto, imágenes y video en perspectiva sobre cualquier superficie, aunque la cámara se mueva.",
    description:
      "Nació para poner el título de mis covers de piano sobre el atril de los videos y terminó siendo un editor de video en el navegador: tocas una superficie y Oblicua detecta sus esquinas, le pones texto, una imagen o incluso otro video, y lo sigue fotograma a fotograma aunque la cámara se mueva. El letrero toma la luz de la escena, queda detrás de las manos que pasan por delante y se exporta en MP4 con el audio original, en vertical para redes o en el formato del video. También graba desde la página en 1080p o 4K.",
    highlights: [
      "Seguimiento de superficies con visión por computador escrita desde cero: Lucas-Kanade piramidal, homografías con RANSAC, recuperación con descriptores tipo ORB cuando la superficie sale del encuadre y suavizado Savitzky-Golay.",
      "Detección de la superficie con un toque (transformada de Hough) y modo especial para pantallas y vidrios que sigue el marco en vez de los reflejos.",
      "Las personas quedan por delante del letrero gracias a la segmentación de MediaPipe, y el letrero se ajusta a la luz y el tono de la escena.",
      "Composición en la GPU con WebGL y exportación con WebCodecs: resolución original, sin perder calidad y con el audio copiado sin recomprimir.",
      "Todo corre en el navegador, sin servidor: los videos nunca salen del dispositivo. Interfaz táctil pensada para iPhone.",
    ],
    tech: ["JavaScript", "Visión por computador", "WebGL", "WebCodecs", "MediaPipe", "Mediabunny", "Canvas API", "Netlify"],
    links: [
      { label: "Probar Oblicua", href: "https://oblicua.netlify.app/", kind: "demo" },
      { label: "Código", href: "https://github.com/gianni28/oblicua", kind: "code" },
    ],
    images: [
      { src: oblicua2, alt: "Oblicua mostrando el título «Fear of the Dark» en perspectiva sobre un cuadro" },
      { src: oblicuaVideo, alt: "Editor de video de Oblicua con la línea de tiempo y el letrero sobre el cuadro" },
      { src: oblicua3, alt: "Oblicua en la versión para celular" },
    ],
  },
  {
    slug: "nextplayer",
    title: "NextPlayer",
    badge: "v2",
    tagline: "Ranking de los futbolistas que más se revalorizaron en el último año.",
    description:
      "Empezó en 2024 como un proyecto universitario con un scraper propio, Express y Firebase. En 2026 lo reescribí desde cero: un pipeline de datos combina un dataset abierto con valores consultados directamente a Transfermarkt, calcula el ranking y la app lo sirve como un sitio estático que carga al instante. Filtra por posición, liga y edad, y abre la ficha de cada jugador con la evolución de su valor.",
    highlights: [
      "Pipeline en TypeScript que procesa el historial de valoraciones y lo pone al día consultando Transfermarkt (valor y fichajes de miles de jugadores), con caché, reanudación y detección de bloqueos.",
      "Arquitectura sin servidor: el ranking se publica como JSON estático, sin cold starts ni costos de backend.",
      "Cuentas opcionales con Firebase Authentication y reglas de Firestore para guardar favoritos de forma segura.",
      "Gráficas SVG propias, filtros compartibles en la URL, modo oscuro y pruebas automáticas con Vitest en CI.",
    ],
    tech: ["React", "TypeScript", "Vite", "GitHub Actions", "Firebase", "Netlify"],
    links: [
      { label: "Ver demo", href: "https://nextplayer0.netlify.app/", kind: "demo" },
      { label: "Código", href: "https://github.com/gianni28/nextplayer", kind: "code" },
    ],
    images: [
      { src: nextplayer1, alt: "Portada de NextPlayer con el jugador que más subió y el inicio del ranking" },
      { src: nextplayer2, alt: "Ficha de un jugador en NextPlayer con la gráfica de su valor de mercado" },
      { src: nextplayer3, alt: "NextPlayer en la versión para celular, en modo oscuro" },
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
