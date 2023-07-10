const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  th: () => import("@/dictionaries/th.json").then((module) => module.default),
};

export const getDictionary = (locale: "en" | "th") => {
  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    return dictionaries[locale]();
  }
};