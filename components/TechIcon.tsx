import {
  siAndroidstudio,
  siAngular,
  siAutodesk,
  siBlender,
  siBootstrap,
  siCapacitor,
  siClaude,
  siCplusplus,
  siCss,
  siExpress,
  siGit,
  siHtml5,
  siIonic,
  siJavascript,
  siJsonwebtokens,
  siLeaflet,
  siLinux,
  siMeta,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpengl,
  siOpenjdk,
  siPython,
  siReact,
  siSfml,
  siSocketdotio,
  siSqlite,
  siTypescript,
  siUnity,
  siUnrealengine,
  siVercel,
} from "simple-icons";
import { ChipIcon, CodeIcon, DatabaseIcon, HashIcon, NetworkIcon, NodesIcon, SparklesIcon } from "./Icons";

type Brand = { path: string; title: string };

// Logos oficiales (Simple Icons, CC0). Se comparan con el texto de la etiqueta.
const brands: [RegExp, Brand][] = [
  [/^c\+\+$/, siCplusplus],
  [/^java$/, siOpenjdk],
  [/^python$/, siPython],
  [/^javascript$/, siJavascript],
  [/^typescript$/, siTypescript],
  [/^html/, siHtml5],
  [/^css$/, siCss],
  [/^unity/, siUnity],
  [/^unreal engine/, siUnrealengine],
  [/^sfml$/, siSfml],
  [/^blender$/, siBlender],
  [/^3ds max$/, siAutodesk],
  [/^meta quest|^vr$/, siMeta],
  [/^angular/, siAngular],
  [/^react$/, siReact],
  [/^node(\.js)?$/, siNodedotjs],
  [/^express$/, siExpress],
  [/^ionic/, siIonic],
  [/^capacitor$/, siCapacitor],
  [/^android studio$/, siAndroidstudio],
  [/^socket\.io$/, siSocketdotio],
  [/^mysql$/, siMysql],
  [/^sqlite$/, siSqlite],
  [/^mongodb$/, siMongodb],
  [/^linux$/, siLinux],
  [/^git$/, siGit],
  [/^claude/, siClaude],
  [/^opengl$/, siOpengl],
  [/^next\.js$/, siNextdotjs],
  [/^vercel$/, siVercel],
  [/^jwt$/, siJsonwebtokens],
  [/^bootstrap$/, siBootstrap],
  [/^leaflet$/, siLeaflet],
];

// Sin logo oficial (o sin marca): icono de línea propio
const generic: [RegExp, (p: { size: number }) => React.ReactNode][] = [
  [/^c#$/, HashIcon],
  [/^sql$/, DatabaseIcon],
  [/^asm|^ensamblador|^assembly|^game boy$/, ChipIcon],
  [/^blueprints$/, NodesIcon],
  [/^networking|^websockets$|^rest$/, NetworkIcon],
  [/\bia\b|\bai\b/, SparklesIcon],
  [/^ecs$|revisi[oó]n de c[oó]digo|reviewing generated/, CodeIcon],
];

export default function TechIcon({ label, size = 14 }: { label: string; size?: number }) {
  const key = label.toLowerCase().trim();
  const brand = brands.find(([re]) => re.test(key))?.[1];
  if (brand) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className="tech-icon">
        <path d={brand.path} />
      </svg>
    );
  }
  const Generic = generic.find(([re]) => re.test(key))?.[1];
  return Generic ? <span className="tech-icon">{Generic({ size })}</span> : null;
}
