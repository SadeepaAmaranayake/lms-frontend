import useLanguage from "../../i18n/useLanguage";

export default function PaymentStatus({ status }) {
  const { t } = useLanguage();
  const paid = status === "paid";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
        paid
          ? "bg-emerald-100 text-emerald-700"
          : "bg-rose-100 text-rose-700"
      }`}
    >
      {t(status.toLowerCase())}
    </span>
  );
}
