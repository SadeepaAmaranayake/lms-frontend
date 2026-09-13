import { FileWarning, LockKeyhole } from "lucide-react";
import useLanguage from "../../i18n/useLanguage";

export default function MaterialCard({ material, paymentStatus, type }) {
  const { t } = useLanguage();
  const paymentLocked =
    material.requiresPayment && paymentStatus !== "paid";

  let message = null;
  if (paymentLocked) message = t("paymentRequiredFile");
  if (!material.fileAvailable) message = t("fileUnavailable");
  const typeLabel = t(type.toLowerCase());

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-indigo-600">{typeLabel}</p>
          <h2 className="mt-1 font-bold text-slate-900">{material.title}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {material.subject}
            {material.year ? ` · ${material.year}` : ""}
            {material.paperType ? ` · ${material.paperType}` : ""}
          </p>
        </div>
        {message ? (
          <LockKeyhole className="shrink-0 text-amber-600" size={20} />
        ) : (
          <FileWarning className="shrink-0 text-indigo-600" size={20} />
        )}
      </div>

      {message ? (
        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          {message}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => window.alert(t("materialAlert"))}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          {t("openMaterial", { type: typeLabel })}
        </button>
      )}
    </article>
  );
}
