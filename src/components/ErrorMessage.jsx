export default function ErrorMessage({ children }) {
  if (!children) return null;

  return (
    <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50
      px-4 py-3 text-sm text-rose-700">
      {children}
    </p>
  );
}
