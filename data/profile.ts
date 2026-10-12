import type { Localized, Text } from "./dictionary";

export const profile = {
  name: "Vicente Torres Gallo",
  shortName: "Vicente Torres",
  // Foto en public/images/profile/ (null muestra las iniciales)
  photo: "/images/profile/vicente.jpg" as string | null,
  // PDFs del CV en public/cv/, uno por idioma. Se generan desde /curriculum/es y /curriculum/en (ver README)
  cv: {
    es: "/cv/Vicente-Torres-Gallo-CV-ES.pdf",
    en: "/cv/Vicente-Torres-Gallo-CV-EN.pdf",
  } as Localized | null,
  email: "vicentorresgallo@gmail.com",
  // Solo aparece en el CV, no en la web
  phone: "+34 639 580 119",
  // URL pública en Vercel. Si cambias el nombre del proyecto en Vercel, actualízala aquí
  website: "https://vicente-torres-gallo.vercel.app",
  github: "https://github.com/VicTorresGallo",
  linkedin: "https://www.linkedin.com/in/vicentetorresgallo",
  location: { es: "Alicante, España", en: "Alicante, Spain" } as Localized,

  about: {
    es: [
      "Soy estudiante de Ingeniería Multimedia en la Universidad de Alicante. Me muevo entre el desarrollo de videojuegos y la programación web: he trabajado con Unity y Unreal Engine, he hecho modelado, rigging y animación en Blender y he programado en C++ un motor gráfico y de juego propios.",
      "Aprendo rápido y disfruto llevando la teoría a proyectos reales. Soy polivalente, organizado y trabajo bien en equipo y bajo presión. Busco una oportunidad para ganar experiencia en proyectos reales y aportar valor mientras termino mi formación.",
    ],
    en: [
      "I'm a Multimedia Engineering student at the University of Alicante, working across game development and web programming. I've built with Unity and Unreal Engine, done modelling, rigging and animation in Blender, and written my own graphics and game engine in C++.",
      "I learn fast and enjoy turning theory into real projects. I'm versatile, organised and work well in teams and under pressure. I'm looking for an opportunity to gain experience on real projects and add value while I finish my degree.",
    ],
  } as Record<"es" | "en", string[]>,

  experience: [
    {
      title: { es: "Programador y artista 2D/3D", en: "Programmer & 2D/3D artist" } as Localized,
      org: "Icy Beak Studios",
      period: { es: "sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" } as Localized,
      points: [
        { es: "Desarrollo del videojuego «Donut Panic!».", en: "Development of the game “Donut Panic!”." },
        { es: "1.er puesto en la GameJam Alicante 2025 con «Bubble Buddies».", en: "1st place at GameJam Alicante 2025 with “Bubble Buddies”." },
        { es: "«Cosmic Muncher», videojuego en ensamblador para Game Boy.", en: "“Cosmic Muncher”, a Game Boy game written in assembly." },
      ] as Localized[],
    },
  ],

  education: [
    {
      title: { es: "Grado en Ingeniería Multimedia", en: "BSc in Multimedia Engineering" } as Localized,
      org: "Universidad de Alicante",
      period: { es: "2021 – actualidad", en: "2021 – present" } as Localized,
      detail: {
        es: "Bases de datos, POO, ciberseguridad, desarrollo multiplataforma y web, desarrollo de videojuegos, estructuras de datos y algoritmos, diseño gráfico, modelado y animación, diseño UI/UX, redes y sistemas.",
        en: "Databases, OOP, cybersecurity, cross-platform and web development, game development, data structures and algorithms, graphic design, modelling and animation, UI/UX design, networks and systems.",
      } as Localized,
    },
    {
      title: { es: "Bachillerato Tecnológico y programación", en: "High school diploma, Technology & programming" } as Localized,
      org: "Colegio María Auxiliadora – Salesianas Alicante",
      period: { es: "2014 – 2020", en: "2014 – 2020" } as Localized,
    },
  ],

  skills: [
    { group: { es: "Lenguajes", en: "Languages" } as Localized, items: ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "ASM (Game Boy)"] },
    { group: { es: "Motores y 3D", en: "Engines & 3D" } as Localized, items: ["Unity", "Unreal Engine", "Blueprints", "SFML", "Blender", "3ds Max", "Meta Quest / VR"] },
    { group: { es: "Web y móvil", en: "Web & mobile" } as Localized, items: ["Angular", "React", "Node.js", "Express", "Ionic / Capacitor", "Android Studio", "Socket.IO"] },
    { group: { es: "Datos y sistemas", en: "Data & systems" } as Localized, items: ["MySQL", "SQLite", "MongoDB", "Linux", "Networking (TCP/IP)", "Git"] },
    {
      group: { es: "Inteligencia artificial", en: "Artificial intelligence" } as Localized,
      items: [
        "Claude Code",
        { es: "Desarrollo asistido por IA", en: "AI-assisted development" },
        { es: "Revisión de código generado", en: "Reviewing generated code" },
        { es: "Diagnóstico de errores con IA", en: "AI-assisted debugging" },
      ] as Text[],
    },
  ],

  languages: [
    { name: { es: "Español", en: "Spanish" } as Localized, level: { es: "Nativo", en: "Native" } as Localized },
    { name: { es: "Inglés", en: "English" } as Localized, level: { es: "Avanzado", en: "Advanced" } as Localized },
    { name: { es: "Valenciano", en: "Valencian" } as Localized, level: { es: "Avanzado", en: "Advanced" } as Localized },
  ],
};
