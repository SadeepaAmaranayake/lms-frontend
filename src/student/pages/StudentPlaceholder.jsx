export default function StudentPlaceholder({ title }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-slate-500">
          This page will be built in the next stage.
        </p>
      </div>
    </div>
  );
}