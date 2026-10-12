import type { Localized, Text } from "./dictionary";

export type LinkKind = "repo" | "download" | "demo" | "video" | "itch" | "web" | "doc";
export type FactKey = "context" | "platform" | "tech" | "team" | "duration";

export type Project = {
  id: string;
  category: "games" | "web";
  title: Text;
  year: string;
  // Rutas dentro de public/. Sin cover se muestra una portada generada.
  cover?: string;
  // "contain" muestra la imagen entera (útil para logos) sobre coverBg
  coverFit?: "cover" | "contain";
  coverBg?: string;
  gallery?: { src: string; caption?: Localized }[];
  // Capturas verticales (móvil): la galería las muestra enteras en columnas estrechas
  portraitGallery?: boolean;
  // Para pixel art: evita que el navegador difumine la imagen al escalarla
  pixelated?: boolean;
  featured?: boolean;
  highlight?: Localized;
  tags: Text[];
  // Texto corto de la tarjeta
  summary: Localized;
  // Texto largo de la página del proyecto (un párrafo por elemento)
  body?: Record<"es" | "en", string[]>;
  features?: Localized[];
  role?: Localized;
  // Lista de tareas concretas que se muestra bajo "Mi rol"
  roleDetails?: Localized[];
  facts?: Partial<Record<FactKey, Text>>;
  // ID de un vídeo de YouTube para incrustarlo en la página del proyecto
  youtube?: string;
  // Juego jugable en el navegador: página dentro de public/ que se carga en un iframe al pulsar «Jugar»
  play?: { src: string; aspect?: string; hint?: Localized };
  links?: { kind: LinkKind; url: string; label?: Text }[];
};

const gh = (repo: string) => `https://github.com/VicTorresGallo/${repo}`;
const img = (project: string, file: string) => `/images/projects/${project}/${file}`;

export const projects: Project[] = [
  {
    id: "bubble-buddies",
    category: "games",
    title: "Bubble Buddies",
    year: "2025",
    featured: true,
    cover: img("bubble-buddies", "og.jpg"),
    gallery: [
      { src: img("bubble-buddies", "shot-1.jpg") },
      { src: img("bubble-buddies", "shot-2.jpg") },
      { src: img("bubble-buddies", "shot-3.jpg") },
      { src: img("bubble-buddies", "shot-4.jpg") },
      { src: img("bubble-buddies", "shot-5.jpg") },
      { src: img("bubble-buddies", "shot-6.jpg") },
      {
        src: img("bubble-buddies", "shot-7.jpg"),
        caption: { es: "El equipo recogiendo el primer premio de la GameJam Alicante 2025", en: "The team receiving first prize at GameJam Alicante 2025" },
      },
    ],
    highlight: { es: "🏆 1.er puesto · GameJam Alicante 2025", en: "🏆 1st place · GameJam Alicante 2025" },
    tags: ["Unity", "Blender", "Game Jam", { es: "Control por voz", en: "Voice control" }],
    summary: {
      es: "Plataformas 3D controlado con la voz, hecho en menos de 48 horas. Primer puesto en la GameJam Alicante 2025.",
      en: "Voice-controlled 3D platformer made in under 48 hours. First place at GameJam Alicante 2025.",
    },
    body: {
      es: [
        "Eres un ácaro del polvo con ansiedad social metido en una pompa de jabón. Tienes que cruzar el baño para reunirte con el patito de goma de la bañera, el único compañero que crees que te entiende de verdad.",
        "Para avanzar, apuntas con la cámara hacia donde quieres ir y haces ruido al micrófono. El juego parte de la idea de las «burbujas sociales»: trata la conexión, la confianza y cómo salir del aislamiento a través de amistades inesperadas.",
        "Lo desarrollamos en equipo con Icy Beak Studio en menos de 48 horas durante la Global Game Jam 2025, en la sede GameJam Alicante organizada por MultitecUA, donde ganamos el primer puesto. Todos los assets los creamos nosotros durante la jam.",
      ],
      en: [
        "You're a dust mite with social anxiety inside a soap bubble. You have to cross the bathroom to reunite with the rubber duck in the bathtub, the one companion you believe truly understands you.",
        "To move, you point the camera where you want to go and make noise into your microphone. The game builds on the idea of «social bubbles»: it explores connection, trust and breaking out of isolation through unexpected friendships.",
        "We built it as a team with Icy Beak Studio in under 48 hours during Global Game Jam 2025, at the GameJam Alicante site run by MultitecUA, where we won first place. We made every asset ourselves during the jam.",
      ],
    },
    features: [
      { es: "Movimiento controlado con el micrófono (o con la tecla W).", en: "Movement driven by the microphone (or the W key)." },
      { es: "Puntos de control para reaparecer con la tecla R.", en: "Checkpoints to respawn with the R key." },
      { es: "Escenario 3D de un baño a escala de ácaro.", en: "A 3D bathroom at dust-mite scale." },
      { es: "Música dinámica que cambia según lo que pasa en el juego.", en: "Dynamic music that reacts to what happens in the game." },
      { es: "Físicas de burbujas.", en: "Bubble physics." },
      { es: "Todos los assets creados por el equipo durante la jam.", en: "All assets made by the team during the jam." },
    ],
    facts: {
      context: { es: "Global Game Jam 2025 · sede GameJam Alicante (MultitecUA)", en: "Global Game Jam 2025 · GameJam Alicante site (MultitecUA)" },
      platform: "Windows",
      tech: "Unity · Blender · Audacity",
      team: "Icy Beak Studio",
      duration: { es: "Menos de 48 horas", en: "Under 48 hours" },
    },
    links: [{ kind: "itch", url: "https://jsala.itch.io/bubblebuddies" }],
  },
  {
    id: "escape-vr",
    category: "games",
    title: "EscAPE",
    year: "2026",
    featured: true,
    cover: img("escape-vr", "cover.jpg"),
    youtube: "6AQKNCSsWTs",
    links: [{ kind: "video", url: "https://youtu.be/6AQKNCSsWTs" }],
    tags: ["Unreal Engine 5.5", "VR", "Meta Quest 3", "Blueprints", "C++"],
    summary: {
      es: "Experiencia de realidad virtual de 3 a 5 minutos para Meta Quest 3, desarrollada en Unreal Engine 5.5.",
      en: "A 3–5 minute virtual reality experience for Meta Quest 3, built in Unreal Engine 5.5.",
    },
    body: {
      es: [
        "EscAPE es una experiencia corta de realidad virtual pensada para Meta Quest 3, con una duración de entre 3 y 5 minutos.",
        "Es un proyecto individual de la Universidad de Alicante, desarrollado entre enero y mayo de 2026 en Unreal Engine 5.5, combinando Blueprints para la lógica de juego con código base en C++.",
      ],
      en: [
        "EscAPE is a short virtual reality experience designed for Meta Quest 3, lasting between 3 and 5 minutes.",
        "It's a solo project for the University of Alicante, developed from January to May 2026 in Unreal Engine 5.5, combining Blueprints for gameplay logic with C++ base code.",
      ],
    },
    role: {
      es: "Proyecto individual: desarrollé la experiencia completa, con la lógica de juego en Blueprints y código base en C++ dentro de Unreal Engine.",
      en: "Solo project: I built the whole experience, with gameplay logic in Blueprints and C++ base code in Unreal Engine.",
    },
    facts: {
      context: { es: "Universidad de Alicante", en: "University of Alicante" },
      team: { es: "Individual", en: "Solo" },
      platform: "Meta Quest 3",
      tech: "Unreal Engine 5.5 · Blueprints · C++",
      duration: { es: "Enero – mayo 2026", en: "January – May 2026" },
    },
  },
  {
    id: "escape-room-lab",
    category: "games",
    title: "Escape Room Lab",
    year: "2026",
    featured: true,
    cover: img("escape-room-lab", "scale.jpg"),
    gallery: [
      { src: img("escape-room-lab", "menu.jpg"), caption: { es: "Menú de inicio con la historia del Dr. Vidal", en: "Start menu with Dr. Vidal's story" } },
      { src: img("escape-room-lab", "scale.jpg"), caption: { es: "Puzle 1: equilibrar la balanza para abrir la vitrina", en: "Puzzle 1: balance the scale to open the display case" } },
      { src: img("escape-room-lab", "note.jpg"), caption: { es: "Puzle 2: la nota escondida con el código", en: "Puzzle 2: the hidden note with the code" } },
      { src: img("escape-room-lab", "cubes.jpg"), caption: { es: "Puzle 3: colocar los cubos en orden y bien orientados", en: "Puzzle 3: place the cubes in order and correctly oriented" } },
      { src: img("escape-room-lab", "solved.jpg"), caption: { es: "Código correcto: la cerradura se ilumina y se abre la puerta", en: "Correct code: the lock lights up and the door opens" } },
      { src: img("escape-room-lab", "ending.jpg"), caption: { es: "Pantalla final al escapar", en: "Ending screen after escaping" } },
    ],
    tags: ["Unity 6", "C#", "URP", "Blender", { es: "Físicas", en: "Physics" }],
    summary: {
      es: "Escape room 3D en primera persona hecho como prueba técnica para Virtual Zone, con puzles basados en físicas.",
      en: "First-person 3D escape room built as a technical test for Virtual Zone, with physics-based puzzles.",
    },
    body: {
      es: [
        "El jugador es un periodista que investiga los experimentos del Dr. Vidal. Tras tomar un café drogado, despierta encerrado en su laboratorio y tiene que descubrir el código que abre la puerta antes de que Vidal vuelva.",
        "Para escapar hay que equilibrar una balanza con las pesas que hay por la sala. Al hacerlo se abre una vitrina con cuatro cubos numerados. Después hay que encontrar una nota escondida con el código y encajar los cubos en ese orden y bien orientados (un 6 girado parece un 9).",
        "El juego se hizo como prueba técnica de prácticas para Virtual Zone y se entregó con build para Windows, menú de inicio con la historia, pantalla final, sonido y post-procesado.",
      ],
      en: [
        "You play a journalist investigating Dr. Vidal's experiments. After a drugged coffee, you wake up locked in his lab and must find the code that opens the door before Vidal returns.",
        "To escape, you balance a scale with weights scattered around the room. That opens a display case with four numbered cubes. Then you find a hidden note with the code and slot the cubes in that order, correctly oriented (an upside-down 6 looks like a 9).",
        "It was built as an internship technical test for Virtual Zone and delivered with a Windows build, a start menu with the story, an ending screen, audio and post-processing.",
      ],
    },
    features: [
      { es: "Controlador en primera persona: coger, soltar, rotar y acercar objetos con física.", en: "First-person controller: pick up, drop, rotate and zoom objects with physics." },
      { es: "Balanza con Rigidbody que se inclina según el peso real de las pesas y detecta el equilibrio.", en: "Rigidbody scale that tilts with the real weight of the weights and detects balance." },
      { es: "Cerradura de cubos que comprueba el orden y la orientación, con feedback de acierto y error.", en: "Cube lock that checks order and orientation, with success and failure feedback." },
      { es: "Iluminación trabajada y post-procesado (Bloom, Vignette, Tonemapping) en URP.", en: "Crafted lighting and post-processing (Bloom, Vignette, Tonemapping) in URP." },
      { es: "Sonido completo: pasos, golpes según la fuerza del choque, música y efectos de interfaz.", en: "Full audio: footsteps, impacts scaled by collision force, music and UI sounds." },
      { es: "Pesas modeladas en Blender.", en: "Weights modelled in Blender." },
    ],
    role: {
      es: "Desarrollo completo: programación en C#, diseño de puzles, ambientación, sonido y modelado de las pesas.",
      en: "Full development: C# programming, puzzle design, level dressing, audio and weight modelling.",
    },
    facts: {
      context: { es: "Prueba técnica para Virtual Zone", en: "Technical test for Virtual Zone" },
      platform: "Windows",
      tech: "Unity 6 · URP · Input System · Blender",
      team: { es: "Individual", en: "Solo" },
    },
    links: [
      { kind: "repo", url: gh("Escape-Room-Lab") },
      { kind: "download", url: "https://drive.google.com/drive/folders/166joykuvenDGUOKrfLaLsOWbfPDy-2ou?usp=sharing" },
    ],
  },
  {
    id: "donut-panic",
    category: "games",
    title: "Donut Panic!",
    year: "2024–2025",
    featured: true,
    cover: img("donut-panic", "shot-1.jpg"),
    gallery: [
      { src: img("donut-panic", "shot-2.jpg") },
      { src: img("donut-panic", "shot-3.jpg") },
      { src: img("donut-panic", "shot-4.jpg") },
      { src: img("donut-panic", "shot-5.jpg") },
    ],
    tags: ["FPS", "C++", "OpenGL", "ECS", { es: "Motor propio", en: "Custom engine" }, { es: "Arte 2D/3D", en: "2D/3D art" }],
    summary: {
      es: "Shooter en primera persona frenético con estilo de los 90, hecho sobre un motor gráfico y de juego propio en C++ y OpenGL.",
      en: "Frantic ’90s-style first-person shooter, built on our own C++ and OpenGL graphics and game engine.",
    },
    body: {
      es: [
        "Donut Panic! es un FPS frenético en el que juegas como Donutello Crema, un repostero que se enfrenta a una invasión alienígena decidida a devorar nuestro bien más preciado: ¡nuestros donuts!",
        "Se inspira en clásicos como Zombies Ate My Neighbors y DOOM II, y mezcla el caos de los 90 con energía arcade: enemigos por todas partes, explosiones y humor absurdo.",
        "Es un run-and-gun: el objetivo no es solo acabar con los enemigos, sino rescatar los donuts antes de que se los coman. Si se pierden todos, se falla el nivel.",
        "No usa un motor comercial: lo desarrollamos sobre un motor gráfico y un motor de juego propios, programados desde cero en C++ con OpenGL y una arquitectura ECS.",
        "Es el videojuego de Icy Beak Studios para el proyecto de videojuegos (ABP) del grado en Ingeniería Multimedia de la Universidad de Alicante, curso 2024-25, desarrollado por un equipo de cinco personas.",
      ],
      en: [
        "Donut Panic! is a frantic FPS where you play as Donutello Crema, a pastry chef facing an alien invasion set on devouring our most precious possession: our donuts!",
        "Inspired by cult classics like Zombies Ate My Neighbors and DOOM II, it mixes ’90s chaos with arcade energy: enemies everywhere, explosions and absurd humour.",
        "It's a run-and-gun: the goal isn't just to take out enemies but to rescue the donuts before they get eaten. Lose them all and you fail the level.",
        "It doesn't use a commercial engine: we built it on our own graphics engine and game engine, written from scratch in C++ with OpenGL and an ECS architecture.",
        "It's Icy Beak Studios' game for the video game project (ABP) of the Multimedia Engineering degree at the University of Alicante, 2024-25, made by a team of five.",
      ],
    },
    features: [
      { es: "Motor gráfico propio en C++ con OpenGL.", en: "Custom C++ graphics engine with OpenGL." },
      { es: "Motor de juego propio con arquitectura ECS (entidades y componentes).", en: "Custom game engine with an ECS (entity-component) architecture." },
      { es: "IA de los enemigos con árboles de comportamiento.", en: "Enemy AI built with behaviour trees." },
      { es: "Mecánica de rescate: hay que salvar los donuts antes de que se los coman; si se pierden todos, se falla el nivel.", en: "Rescue mechanic: save the donuts before they get eaten; lose them all and you fail the level." },
      { es: "Modelos, rigging y animaciones hechos en Blender.", en: "Models, rigging and animations made in Blender." },
    ],
    role: { es: "Programación y arte 2D/3D.", en: "Programming and 2D/3D art." },
    facts: {
      context: { es: "ABP Ingeniería Multimedia · UA 2024-25", en: "Multimedia Engineering ABP · UA 2024-25" },
      platform: "Windows · Linux",
      tech: { es: "C++ · OpenGL · ECS · motor gráfico y de juego propios · Blender", en: "C++ · OpenGL · ECS · custom graphics & game engine · Blender" },
      team: { es: "Icy Beak Studios (5 personas)", en: "Icy Beak Studios (5 people)" },
      duration: { es: "Sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" },
    },
    youtube: "IiTsO4Xpy4U",
    links: [
      { kind: "itch", url: "https://cletus2000.itch.io/donut-panic" },
      { kind: "web", url: "https://eps.ua.es/es/ingenieria-multimedia/videojuegos/webs-grupos/curso-2024-25/grupo-icy-beak-studios-videojuego-donut-panic.html", label: "EPS · UA" },
      { kind: "video", url: "https://www.youtube.com/watch?v=IiTsO4Xpy4U" },
      {
        kind: "doc",
        url: "https://www.canva.com/design/DAGodpv4tRQ/wcNYYz76tsBY-i-4dC1nMw/view",
        label: { es: "Presentación (Canva)", en: "Presentation (Canva)" },
      },
    ],
  },
  {
    id: "cosmic-muncher",
    category: "games",
    title: "Cosmic Muncher",
    year: "2024",
    cover: img("cosmic-muncher", "og.png"),
    pixelated: true,
    gallery: [
      { src: img("cosmic-muncher", "shot-1.png") },
      { src: img("cosmic-muncher", "shot-2.png") },
      { src: img("cosmic-muncher", "shot-4.png") },
      { src: img("cosmic-muncher", "shot-5.png") },
      {
        src: img("cosmic-muncher", "shot-3.jpg"),
        caption: { es: "Funcionando en una Game Boy original", en: "Running on an original Game Boy" },
      },
    ],
    tags: ["Game Boy", { es: "Ensamblador", en: "Assembly" }, "ECS", "Pixel art"],
    summary: {
      es: "Juego para la Game Boy original programado en ensamblador en siete semanas, con un motor ECS propio.",
      en: "Original Game Boy game written in assembly in seven weeks, with a custom ECS engine.",
    },
    body: {
      es: [
        "Controlas a Marciano Delgado, un alienígena curioso que solo quiere llevarse unos cuantos donuts. Para conseguirlos tiene que esquivar a los guardias que patrullan cada nivel, como el somnoliento guardia Cuesta, y recoger corazones para ganar vidas extra.",
        "Lo hicimos un equipo de tres personas en siete semanas para la Universidad de Alicante, programado en ensamblador para la Game Boy original con un motor basado en ECS (Entity Component System). La ROM ocupa 32 kB y funciona en la consola real.",
      ],
      en: [
        "You control Marciano Delgado, a curious alien who just wants to grab a few donuts. To get them, he must dodge the guards patrolling each level, like the sleepy guard Cuesta, and collect hearts for extra lives.",
        "A team of three built it in seven weeks for the University of Alicante, written in assembly for the original Game Boy on top of an ECS (Entity Component System) engine. The ROM is 32 kB and runs on real hardware.",
      ],
    },
    role: {
      es: "Artista principal, programador y diseño de niveles.",
      en: "Lead artist, programmer and level design.",
    },
    facts: {
      context: { es: "Universidad de Alicante", en: "University of Alicante" },
      platform: "Game Boy (DMG)",
      tech: { es: "Ensamblador (gbtelera) · GBT-Player · OpenMPT", en: "Assembly (gbtelera) · GBT-Player · OpenMPT" },
      team: { es: "3 personas", en: "3 people" },
      duration: { es: "7 semanas", en: "7 weeks" },
    },
    youtube: "mj4YTr-U1gk",
    play: {
      src: "/games/cosmic-muncher/",
      aspect: "10 / 9",
      hint: {
        es: "Flechas para moverte y Enter para Start. En móvil aparece un mando táctil. Es el juego original de Game Boy, emulado con EmulatorJS.",
        en: "Arrow keys to move and Enter for Start. On mobile a touch gamepad appears. This is the original Game Boy game, emulated with EmulatorJS.",
      },
    },
    links: [{ kind: "itch", url: "https://roscarul.itch.io/cosmic-muncher" }],
  },
  {
    id: "forgotten-wonders",
    category: "games",
    title: "Forgotten Wonders",
    year: "2025–2026",
    cover: img("forgotten-wonders", "title.jpg"),
    coverFit: "contain",
    coverBg: "#e6d9bd",
    gallery: [
      { src: img("forgotten-wonders", "shot-1.jpg"), caption: { es: "Menú principal", en: "Main menu" } },
      { src: img("forgotten-wonders", "shot-2.jpg"), caption: { es: "La casa de Leonardo, el lobby desde el que se viaja a los mundos", en: "Leonardo's house, the lobby leading to the worlds" } },
      { src: img("forgotten-wonders", "shot-3.jpg"), caption: { es: "Minijuego de plataformas durante un combate", en: "Platforming minigame during a battle" } },
      { src: img("forgotten-wonders", "shot-4.jpg"), caption: { es: "Combate: prueba de reflejos para atacar al enemigo", en: "Combat: reflex skill check to attack the enemy" } },
    ],
    tags: ["C++", "SFML", "RPG", { es: "Minijuegos", en: "Minigames" }, "A*", { es: "Patrones de diseño", en: "Design patterns" }],
    summary: {
      es: "RPG narrativo en el que los combates se ganan superando minijuegos, con enemigos que te persiguen usando A*.",
      en: "Narrative RPG where battles are won by beating minigames, with enemies that chase you using A*.",
    },
    body: {
      es: [
        "Steven lleva meses sin noticias de su amigo Leonardo, un escritor que se había retirado con su familia a una casita en mitad del bosque. Cuando por fin recibe una carta suya invitándole, llega a la casa y la encuentra vacía. A través de una puerta oculta en el armario descubre unos mundos perdidos que representan los recuerdos y las emociones de los personajes.",
        "La historia trata la reclusión y la ansiedad de querer cumplir expectativas. El jugador explora los mundos, recupera las páginas del manuscrito que Leonardo estaba escribiendo y abre la puerta hacia el último nivel.",
        "Los combates son por turnos: los ataques del jugador son pruebas de reflejos y los de los enemigos se esquivan en minijuegos como bullet hell o escalada de plataformas. Se inspira en Undertale, Omori y WarioWare.",
      ],
      en: [
        "Steven hasn't heard from his friend Leonardo in months, a writer who withdrew with his family to a cabin deep in the woods. When a letter finally invites him over, he finds the house empty. Through a hidden door in the wardrobe he discovers lost worlds that embody the characters' memories and emotions.",
        "The story deals with isolation and the anxiety of living up to expectations. The player explores the worlds, recovers the pages of the manuscript Leonardo was writing and opens the door to the final level.",
        "Combat is turn-based: the player's attacks are reflex skill checks, and enemy attacks are dodged in minigames such as bullet hell or platform climbing. Inspired by Undertale, Omori and WarioWare.",
      ],
    },
    features: [
      { es: "Dos armas con minijuegos de ataque distintos: Guantes del monje y Raíz Espinosa.", en: "Two weapons with different attack minigames: Monk's Gloves and Thorny Root." },
      { es: "Enemigos con pathfinding A* y un ajuste fino para no engancharse en esquinas.", en: "Enemies with A* pathfinding plus fine-grained steering to avoid snagging on corners." },
      { es: "Bucle de juego interpolado y máquina de estados.", en: "Interpolated game loop and state machine." },
      { es: "Patrones Singleton, State, Factory (enemigos e ítems) y Fachada para el render.", en: "Singleton, State, Factory (enemies and items) and Facade (rendering) patterns." },
      { es: "Lobby con un diario que cambia de mundo, guardado en cualquier punto y pociones de curación.", en: "Lobby with a diary to switch worlds, save anywhere and healing potions." },
    ],
    role: {
      es: "Mi responsabilidad principal fue la creación y gestión de los mapas, y además trabajé a fondo en la navegación entre niveles, el render y el sistema de guardado. El mayor reto fue la transición entre mapas junto con la generación y el guardado dinámico de ítems y enemigos: reestructuré la lógica de cambio de nivel varias veces hasta conseguir un funcionamiento estable. En el vídeo de gameplay soy el primero que habla.",
      en: "My main responsibility was building and managing the maps, and I also worked extensively on level navigation, rendering and the save system. The biggest challenge was map transitions together with dynamic spawning and saving of items and enemies: I restructured the level-switching logic several times until it was stable. I'm the first speaker in the gameplay video.",
    },
    roleDetails: [
      { es: "Carga e implementación de mapas, y su diseño e integración en el motor del juego.", en: "Map loading and implementation, and their design and integration into the game engine." },
      { es: "Colisiones con el mapa.", en: "Map collisions." },
      { es: "Cambio entre niveles con persistencia de las entidades de cada mapa.", en: "Level switching with per-map entity persistence." },
      { es: "Navegación entre mapas: castillo, segundo mundo y minijuegos.", en: "Navigation between maps: castle, second world and minigames." },
      { es: "Enemigos por mapa: puntos de aparición y gestión de entidades por nivel.", en: "Per-map enemies: spawn points and per-level entity management." },
      { es: "Cámara que sigue al jugador.", en: "Camera that follows the player." },
      { es: "Ampliación y correcciones del guardado: estado del mundo e inventario.", en: "Save system extensions and fixes: world state and inventory." },
      { es: "Integración del estado de combate en el flujo del juego.", en: "Integrating the combat state into the game flow." },
      { es: "Cambios en el render para dar soporte a mapas y escenas.", en: "Rendering changes to support maps and scenes." },
    ],
    facts: {
      context: { es: "Universidad de Alicante", en: "University of Alicante" },
      platform: { es: "PC (teclado y ratón)", en: "PC (keyboard & mouse)" },
      tech: "C++ · SFML",
      team: { es: "5 personas", en: "5 people" },
    },
    links: [
      {
        kind: "doc",
        url: "https://www.canva.com/design/DAHKIPDw-7M/iq0vZarT4QA9YElSnrQBFQ/view",
        label: { es: "Presentación (Canva)", en: "Presentation (Canva)" },
      },
      {
        kind: "video",
        url: "https://www.canva.com/design/DAHJeyyNGig/cgKtTXxpApaG9jzleHPEAg/watch",
        label: { es: "Vídeo de gameplay (Canva)", en: "Gameplay video (Canva)" },
      },
    ],
  },
  {
    id: "pong",
    category: "games",
    title: { es: "Pong multijugador", en: "Multiplayer Pong" },
    year: "2024",
    cover: img("pong", "shot-1.jpg"),
    tags: ["Node.js", "Express", "Socket.IO", "WebSockets", "JavaScript"],
    summary: {
      es: "Pong 2D en red para dos jugadores con un motor de red en tiempo real sobre Node.js y Socket.IO.",
      en: "Networked 2D Pong for two players with a real-time network engine on Node.js and Socket.IO.",
    },
    body: {
      es: [
        "Pong multijugador 2D creado para mostrar cómo funcionan los WebSockets en comunicaciones bidireccionales en tiempo real.",
        "El backend es un motor de red sobre Node.js y Socket.IO. La versión final incluye un servidor web que hace de servidor de juegos y entrega el frontend (HTML y JavaScript), y un servidor WebSocket que permite jugar a dos personas desde equipos distintos. También hay una versión contra la máquina.",
      ],
      en: [
        "Multiplayer 2D Pong built to show how WebSockets handle real-time two-way communication.",
        "The backend is a network engine on Node.js and Socket.IO. The final version includes a web server acting as the game server that delivers the HTML/JavaScript frontend, and a WebSocket server that lets two players on different machines play together. There's also a player-vs-CPU version.",
      ],
    },
    facts: {
      platform: { es: "Navegador web", en: "Web browser" },
      context: { es: "Sistemas Distribuidos · UA", en: "Distributed Systems · UA" },
      tech: "Node.js · Express · Socket.IO · HTML5 · JavaScript",
    },
    links: [
      { kind: "repo", url: gh("pong") },
      { kind: "doc", url: "https://docs.google.com/document/d/1poSl6GfQr8qUEsPZxYqMHNNIufLCq1-aRHoeDzGEuVA/edit?usp=sharing", label: { es: "Memoria", en: "Report (ES)" } },
    ],
  },
  {
    id: "registro-fichajes",
    category: "web",
    title: { es: "Registro de Fichajes", en: "Time Clock App" },
    year: "2025",
    featured: true,
    cover: img("registro-fichajes", "login.jpg"),
    coverFit: "contain",
    coverBg: "#121212",
    portraitGallery: true,
    gallery: [
      { src: img("registro-fichajes", "login.jpg"), caption: { es: "Inicio de sesión", en: "Login" } },
      { src: img("registro-fichajes", "admin.jpg"), caption: { es: "Panel de administrador: usuarios, trabajos y fichajes", en: "Admin panel: users, jobs and clock-ins" } },
      { src: img("registro-fichajes", "users.jpg"), caption: { es: "Gestión de usuarios con búsqueda y roles", en: "User management with search and roles" } },
      { src: img("registro-fichajes", "clock-in.jpg"), caption: { es: "Registrar un fichaje con fecha, hora y ubicación (pixelada en la captura)", en: "Clocking in with date, time and location (blurred in the screenshot)" } },
      { src: img("registro-fichajes", "history.jpg"), caption: { es: "Consulta de fichajes por día en el calendario", en: "Browsing clock-ins by day in the calendar" } },
    ],
    tags: ["Angular", "Ionic", "Capacitor", "TypeScript", "Node.js", "MySQL", { es: "Geolocalización", en: "Geolocation" }],
    summary: {
      es: "Aplicación multiplataforma de control horario: los trabajadores fichan con su ubicación y el administrador gestiona usuarios, trabajos y fichajes.",
      en: "Cross-platform time-tracking app: employees clock in with their location and the admin manages users, jobs and clock-ins.",
    },
    body: {
      es: [
        "Sistema de registro horario capaz de gestionar los fichajes de los trabajadores de una organización para llevar el control de las horas y los trabajos realizados.",
        "Cada trabajador inicia sesión, elige el trabajo que va a realizar y ficha la entrada y la salida. La aplicación guarda la fecha, la hora y la ubicación del fichaje, que se muestra en un mapa con Leaflet y OpenStreetMap.",
        "El frontend está hecho con Angular e Ionic, y Capacitor permite empaquetarlo como aplicación móvil además de web. El backend está en Node y guarda los datos en una base de datos MySQL (MariaDB).",
      ],
      en: [
        "Time-tracking system that manages the clock-ins of an organisation's employees to keep track of hours and work done.",
        "Each employee logs in, picks the job they're about to do and clocks in and out. The app stores the date, time and location of each clock-in, shown on a map with Leaflet and OpenStreetMap.",
        "The frontend uses Angular and Ionic, with Capacitor to package it as a mobile app as well as a web app. The backend runs on Node and stores data in a MySQL (MariaDB) database.",
      ],
    },
    features: [
      { es: "Dos roles: trabajador (USER) y administrador (ADMIN), cada uno con su propia interfaz.", en: "Two roles: employee (USER) and administrator (ADMIN), each with its own interface." },
      { es: "Fichajes con geolocalización (latitud y longitud) y mapa interactivo.", en: "Geolocated clock-ins (latitude and longitude) with an interactive map." },
      { es: "Panel de administración para gestionar usuarios, trabajos y fichajes.", en: "Admin panel to manage users, jobs and clock-ins." },
      { es: "Consulta del historial de fichajes por día desde un calendario.", en: "Clock-in history browsable by day from a calendar." },
      { es: "Acceso a la API protegido con API key.", en: "API access protected by API key." },
    ],
    facts: {
      context: { es: "Universidad de Alicante", en: "University of Alicante" },
      platform: "Web · Android · iOS",
      tech: "Angular · Ionic · Capacitor · Node.js · MySQL · Leaflet",
    },
    links: [{ kind: "repo", url: gh("Registro-Fichajes") }],
  },
  {
    id: "todo-app",
    category: "web",
    title: { es: "ToDo App + microservicios", en: "ToDo App + microservices" },
    year: "2024",
    cover: img("todo-app", "cover.jpg"),
    gallery: [
      { src: img("todo-app", "login.jpg"), caption: { es: "Pantalla de inicio de sesión (Angular + Bootstrap)", en: "Login screen (Angular + Bootstrap)" } },
      { src: img("todo-app", "tasks.jpg"), caption: { es: "Lista de tareas, con el registro de peticiones de la API CRUD", en: "Task list, with the CRUD API request log" } },
      { src: img("todo-app", "auth.jpg"), caption: { es: "Inicio de sesión con JWT: peticiones a la API Auth y token en la consola", en: "JWT login: Auth API requests and token in the console" } },
      { src: img("todo-app", "architecture.jpg"), caption: { es: "Arquitectura distribuida: SPA, WS Auth, WS CRUD y MongoDB", en: "Distributed architecture: SPA, WS Auth, WS CRUD and MongoDB" } },
    ],
    tags: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "REST", "Bootstrap"],
    summary: {
      es: "SPA en Angular apoyada en dos servicios backend propios: una API CRUD sobre MongoDB y un servicio de autenticación.",
      en: "Angular SPA backed by two custom services: a CRUD API on MongoDB and an authentication service.",
    },
    body: {
      es: [
        "Aplicación de tareas tipo SPA (Single Page Application) creada con Angular que trabaja con dos servicios web propios.",
        "WS CRUD es una API REST genérica sobre MongoDB que permite listar, crear, modificar y borrar elementos de cualquier colección. WS Auth gestiona el registro y el inicio de sesión con tokens JWT y contraseñas cifradas con bcrypt.",
      ],
      en: [
        "A to-do SPA (Single Page Application) built with Angular that works with two custom web services.",
        "WS CRUD is a generic REST API on MongoDB to list, create, update and delete items in any collection. WS Auth handles sign-up and login with JWT tokens and bcrypt-hashed passwords.",
      ],
    },
    features: [
      { es: "Endpoints REST: GET, POST, PUT y DELETE sobre /api/{colección}/{id}.", en: "REST endpoints: GET, POST, PUT and DELETE on /api/{collection}/{id}." },
      { es: "Autenticación con JWT y contraseñas cifradas con bcrypt.", en: "JWT authentication and bcrypt-hashed passwords." },
      { es: "Middleware de seguridad y registro con Helmet y Morgan.", en: "Security and logging middleware with Helmet and Morgan." },
    ],
    facts: {
      context: { es: "Sistemas Distribuidos · UA", en: "Distributed Systems · UA" },
      tech: "Angular 17 · Bootstrap · Node.js · Express · MongoDB",
    },
    links: [
      { kind: "repo", url: gh("to-do-app"), label: "Frontend" },
      { kind: "repo", url: gh("api-crud"), label: "API CRUD" },
      { kind: "repo", url: gh("api-auth"), label: "API Auth" },
      { kind: "doc", url: "https://docs.google.com/document/d/1HnlB97Ls2eb_H3hq8QbuBi5fV5gmjWpiSHNhCFoiXY4/edit?usp=sharing", label: { es: "Memoria del frontend", en: "Frontend report (ES)" } },
      { kind: "doc", url: "https://docs.google.com/document/d/1BZaRO0IpqdqwuUkASlkJ3onB2Vq3lBayakRqLkncPIE/edit?usp=sharing", label: { es: "Documentación WS Auth", en: "WS Auth docs (ES)" } },
    ],
  },
  {
    id: "portfolio",
    category: "web",
    title: "Portfolio",
    year: "2026",
    cover: img("portfolio", "cover.jpg"),
    gallery: [
      { src: img("portfolio", "cover.jpg"), caption: { es: "Portada con presentación y enlaces de contacto", en: "Hero with intro and contact links" } },
      { src: img("portfolio", "games.jpg"), caption: { es: "Sección de videojuegos con tarjetas de proyecto", en: "Games section with project cards" } },
      { src: img("portfolio", "web.jpg"), caption: { es: "Sección de proyectos web", en: "Web projects section" } },
      { src: img("portfolio", "detail.jpg"), caption: { es: "Página de detalle de un proyecto", en: "Project detail page" } },
      { src: img("portfolio", "background.jpg"), caption: { es: "Trayectoria, habilidades e idiomas", en: "Background, skills and languages" } },
    ],
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    summary: {
      es: "Esta misma web: portfolio bilingüe hecho con Next.js y publicado automáticamente en Vercel.",
      en: "This very site: a bilingual portfolio built with Next.js and deployed automatically to Vercel.",
    },
    body: {
      es: [
        "Portfolio personal en español e inglés, con una página de detalle para cada proyecto.",
        "Está hecho con Next.js y React en TypeScript y se exporta como web estática. Cada cambio que subo a GitHub se compila y se publica automáticamente en Vercel.",
      ],
      en: [
        "Personal portfolio in Spanish and English, with a detail page for every project.",
        "It's built with Next.js and React in TypeScript and exported as a static site. Every change pushed to GitHub is built and deployed automatically to Vercel.",
      ],
    },
    features: [
      { es: "Contenido separado del diseño en archivos de datos tipados.", en: "Content kept separate from the design in typed data files." },
      { es: "Cambio de idioma sin recargar, que recuerda la preferencia.", en: "Language switch without reloading, remembering the preference." },
      { es: "Diseño adaptado a móvil.", en: "Mobile-friendly layout." },
    ],
    facts: {
      context: { es: "Proyecto personal", en: "Personal project" },
      team: { es: "Individual", en: "Solo" },
      tech: "Next.js · React · TypeScript · Vercel",
    },
    links: [
      { kind: "repo", url: gh("Portfolio-Vicente-Torres-") },
      { kind: "demo", url: "https://vicente-torres-gallo.vercel.app" },
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
