import { useId } from "react";

export default function SelectField({ label, options, error, className = "",
  ...selectProps }) {
  const generatedId = useId();
  const id = selectProps.id ?? generatedId;

  return (
    <label className={`block ${className}`} htmlFor={id}>
      <span className="text-sm font-semibold text-slate-700">
        {label}{selectProps.required && <span className="text-rose-600"> *</span>}
      </span>
      <select
        {...selectProps}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 min-h-11 w-full rounded-xl border bg-white px-3.5
          text-sm text-slate-900 outline-none transition focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-100
          ${error ? "border-rose-400" : "border-slate-200"}`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-xs text-rose-600">
          {error}
        </span>
      )}
    </label>
  );
}
