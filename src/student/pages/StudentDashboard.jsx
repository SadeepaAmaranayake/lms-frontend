import { BookOpen, CalendarDays, CreditCard } from "lucide-react";
import { studentMockData } from "../data/studentMockData";

export default function StudentDashboard() {
  const student = studentMockData;

  return (
    <div>
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Student Portal
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Welcome, {student.fullName}
        </h1>

        <p className="mt-2 text-slate-500">
          Grade {student.grade} · {student.school}
        </p>
      </div>

      {student.paymentStatus !== "paid" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          Your payment is currently unpaid. Some paid content may be
          unavailable.
        </div>
      )}

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <CalendarDays className="text-indigo-600" />

          <p className="mt-4 text-sm text-slate-500">Next class</p>

          <h2 className="mt-1 text-lg font-bold text-slate-900">
            {student.nextClass.subject}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {student.nextClass.date} at {student.nextClass.time}
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <CreditCard className="text-emerald-600" />

          <p className="mt-4 text-sm text-slate-500">
            Payment status
          </p>

          <h2 className="mt-1 text-lg font-bold capitalize text-slate-900">
            {student.paymentStatus}
          </h2>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <BookOpen className="text-amber-600" />

          <p className="mt-4 text-sm text-slate-500">
            Purchased courses
          </p>

          <h2 className="mt-1 text-lg font-bold text-slate-900">
            {student.purchasedCourseIds.length}
          </h2>
        </article>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Upcoming class
        </h2>

        <div className="mt-4 rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">
            {student.nextClass.subject}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {student.nextClass.date} at {student.nextClass.time}
          </p>

          {student.nextClass.zoomAvailable ? (
            <button
              type="button"
              className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
            >
              Join Zoom class
            </button>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              Zoom link is not available yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}