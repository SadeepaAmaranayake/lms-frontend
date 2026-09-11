import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router";
import PageHeader from "../components/PageHeader";
import { grades } from "../data/mockData";
export default function Grades() {
  return (
    <div className="space-y-7">
      <PageHeader eyebrow="Class groups" title="Grades 6-13"
        description="Open a grade to review its students, schedule, and content." />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {grades.map((grade) => (
          <Link key={grade.id} to={`/grades/${grade.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5
              shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300
              hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl
                bg-indigo-50 font-bold text-indigo-700">{grade.id}</span>
              <ArrowRight size={19} className="text-slate-300 transition
                group-hover:translate-x-1 group-hover:text-indigo-600" />
            </div>
            <h2 className="mt-6 text-lg font-bold text-slate-950">{grade.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <Users size={16} /> {grade.students} students
            </p>
            <p className="mt-4 border-t border-slate-100 pt-4 text-xs
              text-slate-500">Next class: {grade.nextClass}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
