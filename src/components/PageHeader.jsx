import { Plus } from "lucide-react";
export default function PageHeader({ eyebrow, title, description, action,
  onAction }) {
  return (
    <div
      className="flex flex-col gap-4 sm:flex-row sm:items-end
      sm:justify-between"
    >
      <div>
        <p
          className="mb-2 text-xs font-bold uppercase tracking-[0.16em]
          text-indigo-600"
        >
          {eyebrow}
        </p>
        <h1
          className="text-2xl font-bold tracking-tight text-slate-950
          sm:text-3xl"
        >
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
      {action && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex min-h-11 items-center justify-center gap-2
            rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white
            shadow-sm transition hover:bg-indigo-700 focus:outline-none
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Plus size={18} />
          {action}
        </button>
      )}
    </div>
  );
}
