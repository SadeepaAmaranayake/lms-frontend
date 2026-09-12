import { BookOpen, CalendarDays, CreditCard } from "lucide-react";
import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import ClassCard from "../components/ClassCard";
import PaymentStatus from "../components/PaymentStatus";
import {
  getStudentById,
  studentClasses,
} from "../data/studentMockData";

export default function StudentDashboard() {
  const [pageState, setPageState] = useState("success");
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const nextClass = studentClasses.find(
    (classItem) => classItem.grade === student.grade,
  );

  function handleJoin() {
    window.alert("Development only: no real Zoom link is connected yet.");
  }

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

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
      </div>

      <PageState state={pageState} onRetry={() => setPageState("success")}>
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
            {nextClass?.subject ?? "No upcoming class"}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {nextClass ? `${nextClass.date} at ${nextClass.time}` : "Check again later"}
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <CreditCard className="text-emerald-600" />

          <p className="mt-4 text-sm text-slate-500">
            Payment status
          </p>

          <div className="mt-2">
            <PaymentStatus status={student.paymentStatus} />
          </div>
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

        <section className="mt-8">
        <h2 className="text-xl font-bold text-slate-900">
          Upcoming class
        </h2>

          <div className="mt-4">
            {nextClass ? (
              <ClassCard classItem={nextClass} onJoin={handleJoin} />
            ) : (
              <PageState state="empty" />
            )}
          </div>
        </section>
      </PageState>
    </div>
  );
}
