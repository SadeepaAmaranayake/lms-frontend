import { LockKeyhole } from "lucide-react";

export default function LockedContent({ reason = "This content is locked." }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <div className="flex items-start gap-3">
        <LockKeyhole className="mt-0.5 shrink-0" size={19} />
        <div>
          <p className="font-semibold">Content locked</p>
          <p className="mt-1 text-sm text-amber-800">{reason}</p>
        </div>
      </div>
    </div>
  );
}
