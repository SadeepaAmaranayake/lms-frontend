import { Inbox } from "lucide-react";

export default function EmptyState({ title = "No records yet",
  description = "Create the first record to get started." }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white
      px-5 py-14 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-full
        bg-slate-100 text-slate-500">
        <Inbox size={22} />
      </span>
      <h2 className="mt-4 font-bold text-slate-900">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}
