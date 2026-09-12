import { CalendarDays, Clock, Video } from "lucide-react";

export default function ClassCard({ classItem, onJoin }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Grade {classItem.grade}
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-900">
            {classItem.subject}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{classItem.teacher}</p>
        </div>
        <span className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
          <Video size={20} />
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} />
          {classItem.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock size={16} />
          {classItem.time}
        </span>
      </div>

      {classItem.zoomAvailable ? (
        <button
          type="button"
          onClick={() => onJoin(classItem)}
          className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Open development Zoom link
        </button>
      ) : (
        <p className="mt-5 rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-500">
          Zoom link is not available yet.
        </p>
      )}
    </article>
  );
}
