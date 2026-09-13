import useLanguage from "../../i18n/useLanguage";

export default function LanguageToggle({ dark = false }) {
  const { language, setLanguage, t } = useLanguage();
  const inactiveClass = dark
    ? "text-slate-300 hover:bg-white/10"
    : "text-slate-600 hover:bg-slate-100";

  return (
    <div
      role="group"
      aria-label={t("languageLabel")}
      className={`inline-flex rounded-lg border p-1 ${
        dark ? "border-white/15 bg-white/5" : "border-slate-200 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
          language === "en" ? "bg-indigo-600 text-white" : inactiveClass
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage("si")}
        className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
          language === "si" ? "bg-indigo-600 text-white" : inactiveClass
        }`}
      >
        සිංහල
      </button>
    </div>
  );
}
