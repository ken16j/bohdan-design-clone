const BASE_PATH = process.env.NODE_ENV === "production" ? "/bohdan-design-clone" : "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
