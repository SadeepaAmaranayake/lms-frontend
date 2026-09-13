import { LockKeyhole } from "lucide-react";
import useLanguage from "../../i18n/useLanguage";

export default function LockedContent({ reason }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <div className="flex items-start gap-3">
        <LockKeyhole className="mt-0.5 shrink-0" size={19} />
        <div>
          <p className="font-semibold">{t("contentLocked")}</p>
          <p className="mt-1 text-sm text-amber-800">
            {reason ?? t("defaultLockedReason")}
          </p>
        </div>
      </div>
    </div>
  );
}
