import useLanguage from "../i18n/useLanguage";

const stateKeys = {
  error: ["errorTitle", "errorMessage"],
  offline: ["offlineTitle", "offlineMessage"],
  unauthorized: ["unauthorizedTitle", "unauthorizedMessage"],
  empty: ["emptyTitle", "emptyMessage"],
  "no-results": ["noResultsTitle", "noResultsMessage"],
  "payment-required": ["paymentRequiredTitle", "paymentRequiredMessage"],
  "file-unavailable": ["fileUnavailableTitle", "fileUnavailableMessage"],
};

export default function PageState({
  state = "success",
  onRetry,
  children,
}) {
  const { t } = useLanguage();

  if (state === "success") {
    return children;
  }

  if (state === "loading") {
    return (
      <div className="grid min-h-64 place-items-center">
        <div className="text-center">
          <div className="mx-auto size-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

          <p className="mt-4 font-medium text-slate-700">
            {t("loading")}...
          </p>
        </div>
      </div>
    );
  }

  const [titleKey, messageKey] = stateKeys[state] ?? stateKeys.error;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        {t(titleKey)}
      </h2>

      <p className="mt-2 text-slate-500">
        {t(messageKey)}
      </p>

      {(state === "error" || state === "offline") && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          {t("tryAgain")}
        </button>
      )}
    </div>
  );
}
