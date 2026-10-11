# Mantenimiento del portfolio

Notas para editar el contenido, regenerar el CV y publicar.

## Editar el contenido

Todo el contenido está en `data/`, separado del diseño:

| Archivo | Qué contiene |
|---|---|
| `data/profile.ts` | Datos personales y de contacto, sobre mí, experiencia, formación, habilidades e idiomas. También la foto, los PDF del CV y la URL pública (`website`). |
| `data/projects.ts` | Proyectos: textos, tecnologías, rol, ficha, enlaces, portada, galería y vídeo. |
| `data/cv.ts` | Textos del CV (más condensados que los de la web). |
| `data/dictionary.ts` | Textos de la interfaz en los dos idiomas. |

### Imágenes

- **Foto de perfil:** `public/images/profile/`, con su ruta en `photo` dentro de `data/profile.ts`.
- **Proyectos:** `public/images/projects/<proyecto>/`. En `data/projects.ts`, `cover` es la portada (mejor en 16:9) y `gallery` la galería. Sin `cover`, la tarjeta muestra una portada generada. Para capturas de móvil, añade `portraitGallery: true`.

## Regenerar el CV en PDF

El CV son dos páginas A4 de la web: `/curriculum/es` y `/curriculum/en`. Contacto, habilidades e idiomas salen de `data/profile.ts`; el resto, de `data/cv.ts`. Después de cambiar algo, hay que volver a generar los PDF de `public/cv/`.

Con Edge en Windows:

```bash
npm run build
npx serve out -l 4321
# en otra terminal:
"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=6000 --print-to-pdf="public/cv/Vicente-Torres-Gallo-CV-ES.pdf" http://localhost:4321/curriculum/es/
"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=6000 --print-to-pdf="public/cv/Vicente-Torres-Gallo-CV-EN.pdf" http://localhost:4321/curriculum/en/
```

O a mano: abre `/curriculum/es` con `npm run dev` e imprime con **Guardar como PDF**, márgenes **ninguno** y **gráficos de fondo** activados.

## Publicar

La web se publica en Vercel desde la rama `main`: **cada `git push` la actualiza automáticamente**.

Configuración inicial en Vercel (solo la primera vez):

1. <https://vercel.com> → **Continue with GitHub**.
2. **Add New… → Project** e importa el repositorio.
3. **Project Name:** `vicente-torres-gallo` (la URL será `https://vicente-torres-gallo.vercel.app`). El resto, como viene.
4. **Deploy**.

Si la URL final es otra, actualízala en `website` (`data/profile.ts`), en el enlace `demo` del proyecto «Portfolio» (`data/projects.ts`) y en los enlaces del `README.md`. Después regenera los PDF del CV.

### Dominio propio (opcional)

En Vercel: **Project → Settings → Domains → Add** y sigue las instrucciones de DNS. Después actualiza `website` en `data/profile.ts`.
