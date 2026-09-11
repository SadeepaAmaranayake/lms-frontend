import { useId } from "react";

export default function FormField({ label, error, multiline = false,
  className = "", ...inputProps }) {
  const generatedId = useId();
  const id = inputProps.id ?? generatedId;
  const Input = multiline ? "textarea" : "input";

  return (
    <label className={`block ${className}`} htmlFor={id}>
      <span className="text-sm font-semibold text-slate-700">
        {label}{inputProps.required && <span className="text-rose-600"> *</span>}
      </span>
      <Input
        {...inputProps}
        id={id}
        rows={multiline ? 4 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 min-h-11 w-full rounded-xl border bg-white px-3.5
          text-sm text-slate-900 outline-none transition placeholder:text-slate-400
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
          ${multiline ? "py-3" : ""}
          ${error ? "border-rose-400" : "border-slate-200"}`}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-xs text-rose-600">
          {error}
        </span>
      )}
    </label>
  );
}
