import type { Localized } from "./dictionary";

// Contenido del CV (app/curriculum/[lang]). Los datos de contacto, habilidades
// e idiomas se toman de data/profile.ts; aquí van los textos condensados del CV.

export const cvLabels = {
  es: {
    headline: "Ingeniero Multimedia · Desarrollo de videojuegos y web",
    contact: "Contacto",
    skills: "Habilidades",
    languages: "Idiomas",
    other: "Otros",
    otherItems: ["Permiso de conducir B", "Vehículo propio"],
    profile: "Perfil",
    experience: "Experiencia",
    projects: "Proyectos destacados",
    education: "Formación",
    portfolio: "Portfolio",
  },
  en: {
    headline: "Multimedia Engineer · Game & web development",
    contact: "Contact",
    skills: "Skills",
    languages: "Languages",
    other: "Other",
    otherItems: ["Driving licence (B)", "Own vehicle"],
    profile: "Profile",
    experience: "Experience",
    projects: "Selected projects",
    education: "Education",
    portfolio: "Portfolio",
  },
};

export const cvSummary: Localized = {
  es: "Estudiante de Ingeniería Multimedia en la Universidad de Alicante, centrado en el desarrollo de videojuegos y experiencias interactivas, con base sólida en desarrollo web full-stack. He creado juegos en Unity, Unreal Engine 5, C++ con SFML, un motor propio en C++ y ensamblador para Game Boy, y gané la GameJam Alicante 2025. Aprendo rápido, me organizo bien y trabajo cómodo en equipo. Busco prácticas o un primer empleo donde aportar en proyectos reales.",
  en: "Multimedia Engineering student at the University of Alicante, focused on game development and interactive experiences, with a solid full-stack web background. I've built games in Unity, Unreal Engine 5, C++ with SFML, a custom C++ engine and Game Boy assembly, and won GameJam Alicante 2025. I learn fast, stay organised and work well in teams. I'm looking for an internship or first job where I can contribute to real projects.",
};

export const cvExperience = [
  {
    title: { es: "Programador y artista 2D/3D", en: "Programmer & 2D/3D artist" } as Localized,
    org: "Icy Beak Studios",
    period: { es: "Sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" } as Localized,
    points: [
      {
        es: "«Donut Panic!»: FPS de estilo noventero sobre un motor gráfico y de juego propios en C++, en un equipo de 5. Programación y arte 2D/3D.",
        en: "“Donut Panic!”: ’90s-style FPS built on our own C++ graphics and game engine, in a team of 5. Programming and 2D/3D art.",
      },
      {
        es: "1.er puesto en la GameJam Alicante 2025 con «Bubble Buddies», plataformas 3D en Unity controlado con la voz y hecho en menos de 48 h.",
        en: "1st place at GameJam Alicante 2025 with “Bubble Buddies”, a voice-controlled 3D platformer made in Unity in under 48 h.",
      },
      {
        es: "«Cosmic Muncher» para Game Boy en ensamblador con motor ECS: artista principal, programación y diseño de niveles.",
        en: "“Cosmic Muncher” for Game Boy in assembly with an ECS engine: lead artist, programming and level design.",
      },
    ] as Localized[],
  },
];

export const cvProjects = [
  {
    name: "EscAPE",
    meta: { es: "Unreal Engine 5.5 · VR · 2026", en: "Unreal Engine 5.5 · VR · 2026" } as Localized,
    text: {
      es: "Experiencia de realidad virtual para Meta Quest 3. Proyecto individual con Blueprints y código base en C++.",
      en: "Virtual reality experience for Meta Quest 3. Solo project using Blueprints and C++ base code.",
    } as Localized,
  },
  {
    name: "Escape Room Lab",
    meta: { es: "Unity 6 · C# · 2026", en: "Unity 6 · C# · 2026" } as Localized,
    text: {
      es: "Prueba técnica para Virtual Zone: escape room 3D con puzles de físicas, sonido, post-procesado y modelos en Blender.",
      en: "Technical test for Virtual Zone: 3D escape room with physics puzzles, audio, post-processing and Blender models.",
    } as Localized,
  },
  {
    name: "Forgotten Wonders",
    meta: { es: "C++ · SFML · 2025–2026", en: "C++ · SFML · 2025–2026" } as Localized,
    text: {
      es: "RPG con combates por minijuegos, en un equipo de 5. Responsable de mapas, transiciones entre niveles, guardado del mundo y cámara.",
      en: "RPG with minigame-based combat, in a team of 5. In charge of maps, level transitions, world saving and camera.",
    } as Localized,
  },
  {
    name: { es: "Registro de Fichajes", en: "Time Clock App" } as Localized,
    meta: { es: "Angular · Ionic · Node · MySQL · 2025", en: "Angular · Ionic · Node · MySQL · 2025" } as Localized,
    text: {
      es: "App multiplataforma de control horario con fichajes geolocalizados, roles de usuario y panel de administración.",
      en: "Cross-platform time-tracking app with geolocated clock-ins, user roles and an admin panel.",
    } as Localized,
  },
  {
    name: { es: "ToDo App + microservicios", en: "ToDo App + microservices" } as Localized,
    meta: { es: "Angular · Express · MongoDB · 2024", en: "Angular · Express · MongoDB · 2024" } as Localized,
    text: {
      es: "SPA con dos servicios REST propios: API CRUD y autenticación con JWT y bcrypt.",
      en: "SPA backed by two custom REST services: a CRUD API and JWT/bcrypt authentication.",
    } as Localized,
  },
];

export const cvEducation = [
  {
    title: { es: "Grado en Ingeniería Multimedia", en: "BSc in Multimedia Engineering" } as Localized,
    org: "Universidad de Alicante",
    period: { es: "2021 – actualidad", en: "2021 – present" } as Localized,
    detail: {
      es: "Desarrollo de videojuegos, programación orientada a objetos, estructuras de datos y algoritmos, desarrollo web y multiplataforma, bases de datos, modelado y animación, diseño UI/UX, redes, sistemas y ciberseguridad.",
      en: "Game development, object-oriented programming, data structures and algorithms, web and cross-platform development, databases, modelling and animation, UI/UX design, networks, systems and cybersecurity.",
    } as Localized,
  },
  {
    title: { es: "Bachillerato Tecnológico", en: "High school diploma (Technology)" } as Localized,
    org: "Colegio María Auxiliadora – Salesianas Alicante",
    period: { es: "2014 – 2020", en: "2014 – 2020" } as Localized,
  },
];
