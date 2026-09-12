const states = [
  "success",
  "loading",
  "empty",
  "error",
  "no-results",
  "unauthorized",
  "payment-required",
  "file-unavailable",
  "offline",
];

export default function DevStateControls({ value, onChange }) {
  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <div className="mb-5 rounded-xl border border-amber-300 bg-amber-50 p-4">
      <label
        htmlFor="development-state"
        className="block text-sm font-semibold text-amber-900"
      >
        Development-only page state
      </label>

      <select
        id="development-state"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm"
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}