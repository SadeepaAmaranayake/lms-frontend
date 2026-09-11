import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import FormField from "./FormField";
import LoadingSpinner from "./LoadingSpinner";
import SelectField from "./SelectField";

export default function ResourceForm({ fields, initialValues, onSubmit,
  onCancel, submitLabel }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function updateValue(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function validate() {
    const nextErrors = {};
    fields.forEach((field) => {
      const value = values[field.key];
      if (field.required && String(value ?? "").trim() === "") {
        nextErrors[field.key] = `${field.label} is required.`;
        return;
      }
      if (field.validate && value) {
        const message = field.validate(value, values);
        if (message) nextErrors[field.key] = message;
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    setSubmitError("");
    setSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to save.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <ErrorMessage>{submitError}</ErrorMessage>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const sharedProps = {
            key: field.key,
            label: field.label,
            required: field.required,
            value: values[field.key] ?? "",
            error: errors[field.key],
            className: field.fullWidth ? "sm:col-span-2" : "",
            onChange: (event) => updateValue(field.key, event.target.value),
          };

          if (field.type === "select") {
            return <SelectField {...sharedProps} options={field.options} />;
          }

          return (
            <FormField {...sharedProps}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              multiline={field.multiline}
              min={field.min}
              step={field.step}
            />
          );
        })}
      </div>
      <div className="flex flex-col-reverse gap-3 border-t border-slate-100
        pt-5 sm:flex-row sm:justify-end">
        <button type="button" onClick={onCancel} disabled={submitting}
          className="min-h-11 rounded-xl border border-slate-200 px-4 text-sm
            font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50">
          Cancel
        </button>
        <button type="submit" disabled={submitting}
          className="min-h-11 rounded-xl bg-indigo-600 px-5 text-sm font-semibold
            text-white hover:bg-indigo-700 disabled:cursor-not-allowed
            disabled:opacity-60">
          {submitting ? <LoadingSpinner label="Saving" /> : submitLabel}
        </button>
      </div>
    </form>
  );
}
