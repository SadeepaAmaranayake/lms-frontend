import { BookOpen, CreditCard, GraduationCap, Users } from "lucide-react";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { announcements, grades, payments, students } from "../data/MockData";
export default function Dashboard() {
  const totalStudents = grades.reduce((sum, grade) => sum + grade.students, 0);
  const paid = payments.filter((payment) => payment.status === "Paid").length;
  return (
    <div className="space-y-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em]
          text-indigo-600">Overview</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Good morning, Teacher
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Here is the current picture across your classes.
        </p>
      </div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total students" value={totalStudents}
          note="Across Grades 6-13" icon={Users} accent="indigo" />
        <StatCard label="Active grades" value={grades.length}
          note="Eight class groups" icon={GraduationCap} accent="cyan" />
        <StatCard label="Payments recorded" value={`${paid}/${payments.length}`}
          note="September sample" icon={CreditCard} accent="emerald" />
        <StatCard label="Published notices"
          value={announcements.filter((item) => item.status === "Published").length}
          note="Visible in mock data" icon={BookOpen} accent="amber" />
      </section>
      <section className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-5
          shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-950">Recent students</h2>
            <span className="text-xs text-slate-400">Mock records</span>
          </div>
          <div className="mt-5 space-y-1">
            {students.slice(0, 4).map((student) => (
              <div key={student.id} className="flex items-center gap-3 rounded-xl
                px-2 py-3 hover:bg-slate-50">
                <span className="grid size-10 place-items-center rounded-full
                  bg-indigo-50 font-bold text-indigo-700">
                  {student.name.charAt(0)}
                      </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {student.name}
                  </p>
                  <p className="text-xs text-slate-500">Grade {student.grade}</p>
                </div>
                <StatusBadge value={student.status} />
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-[#111b35]
          p-6 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em]
            text-lime-400">Next class</p>
          <h2 className="mt-4 text-2xl font-bold">Grade 8</h2>
          <p className="mt-2 text-slate-300">Wednesday, 4:00 PM - 6:00 PM</p>
          <div className="mt-8 rounded-xl bg-white/10 p-4">
            <p className="text-sm font-semibold">Theory and questions</p>
            <p className="mt-1 text-xs text-slate-400">51 enrolled students</p>
          </div>
        </article>
      </section>
    </div>
  );
}
