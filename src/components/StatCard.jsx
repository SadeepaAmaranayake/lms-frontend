export default function StatCard({ label, value, note, icon: Icon,
  accent = "indigo" }) {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700",
    cyan: "bg-cyan-50 text-cyan-700",
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
  };
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5
      shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            {value}
          </p>
        </div>
        <span className={`grid size-11 place-items-center rounded-xl
          ${colors[accent]}`}>
          <Icon size={21} />
        </span>
      </div>
      <p className="mt-4 text-xs text-slate-500">{note}</p>
    </article>
  );
}
