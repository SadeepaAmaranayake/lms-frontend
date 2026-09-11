import { ArrowLeft, BookOpen, CalendarDays, Users } from "lucide-react";
import { Link, useParams } from "react-router";
import StatCard from "../components/StatCard";
import { grades, students, timetable, tutes } from "../data/MockData";
export default function GradeDetails() {
  const { gradeNumber } = useParams();
  const number = Number(gradeNumber);
  const grade = grades.find((item) => item.id === number);
  if (!grade) {
    return <p className="text-rose-700">That grade does not exist.</p>;
  }
  const gradeStudents = students.filter((item) => item.grade === number);
  const classes = timetable.filter((item) => item.grade === number);
  const materials = tutes.filter((item) => item.grade === number);
  return (
    <div className="space-y-7">
      <Link to="/grades" className="inline-flex items-center gap-2 text-sm
        font-semibold text-indigo-700 hover:text-indigo-900">
        <ArrowLeft size={17} /> Back to all grades
      </Link>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em]
          text-indigo-600">Class group</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">{grade.name}</h1>
        <p className="mt-2 text-sm text-slate-500">
          Temporary overview for this class group.
        </p>
      </div>
      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total students" value={grade.students}
          note={`${gradeStudents.length} sample records shown`} icon={Users} />
        <StatCard label="Scheduled classes" value={classes.length}
          note={grade.nextClass} icon={CalendarDays} accent="cyan" />
        <StatCard label="Tutes" value={materials.length}
          note="Published and draft" icon={BookOpen} accent="amber" />
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-bold text-slate-950">Sample students</h2>
        {gradeStudents.length > 0 ? (
          <div className="mt-4 space-y-3">
            {gradeStudents.map((student) => (
                  <div key={student.id} className="flex justify-between rounded-xl
                bg-slate-50 p-4 text-sm">
                <span className="font-semibold">{student.name}</span>
                <span className="text-slate-500">{student.phone}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            No sample students were added for this grade.
          </p>
        )}
      </section>
    </div>
  );
}