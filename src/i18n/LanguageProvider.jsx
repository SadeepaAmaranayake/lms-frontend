import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

function translate(language, key, replacements = {}) {
  const template = translations[language]?.[key]
    ?? translations.en[key]
    ?? key;

  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replaceAll(`{{${name}}}`, String(value)),
    template,
  );
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem("lms-language") === "si" ? "si" : "en");

  useEffect(() => {
    localStorage.setItem("lms-language", language);
    document.documentElement.lang = language === "si" ? "si" : "en";
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key, replacements) => translate(language, key, replacements),
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
