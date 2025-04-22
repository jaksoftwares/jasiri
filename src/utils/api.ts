export const fetchAPI = async (url: string) => {\n  const res = await fetch(url);\n  const data = await res.json();\n  return data;\n};
