// next/image no añade el basePath a los src locales, así que lo hacemos aquí.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
