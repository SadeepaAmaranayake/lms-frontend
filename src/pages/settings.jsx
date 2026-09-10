import { useState } from "react";
import PageHeader from "../components/PageHeader";
export default function Settings() {
  const [saved, setSaved] = useState(false);
  function handleSave(event) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }
  return (
    <div className="space-y-7">
      <PageHeader eyebrow="Preferences" title="Settings"
        description="Update the sample teacher profile and class defaults." />
      <form onSubmit={handleSave} className="max-w-3xl rounded-2xl border
        border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Teacher name</span>
            <input defaultValue="Nimal Perera" className="mt-2 min-h-12 w-full
              rounded-xl border border-slate-200 px-4 outline-none
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Contact number</span>
            <input defaultValue="077 000 0000" className="mt-2 min-h-12 w-full
              rounded-xl border border-slate-200 px-4 outline-none
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Subject</span>
            <input defaultValue="Your subject" className="mt-2 min-h-12 w-full
              rounded-xl border border-slate-200 px-4 outline-none
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-semibold text-slate-700">
              Default monthly fee
            </span>
            <input defaultValue="LKR 2,000" className="mt-2 min-h-12 w-full
              rounded-xl border border-slate-200 px-4 outline-none
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
          </label>
        </div>
        <div className="mt-7 flex items-center gap-4">
          <button className="min-h-11 rounded-xl bg-indigo-600 px-5 text-sm
            font-semibold text-white hover:bg-indigo-700">Save changes</button>
          {saved && <p className="text-sm font-semibold text-emerald-700">
            Saved temporarily.
          </p>}
        </div>
      </form>
    </div>
  );
}