import { NavLink } from "react-router";
import {
  BarChart3, BookOpen, CalendarDays, ChevronRight, CreditCard,
  FileText, GraduationCap, Link2, Megaphone, Settings, Users,
  X, Video,
} from "lucide-react";
const items = [
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/grades", label: "Grades 6-13", icon: GraduationCap },
  { to: "/students", label: "Students", icon: Users },
  { to: "/timetable", label: "Timetable", icon: CalendarDays },
  { to: "/zoom-links", label: "Zoom Links", icon: Video },
  { to: "/tutes", label: "Tutes", icon: BookOpen },
  { to: "/papers", label: "Papers", icon: FileText },
  { to: "/courses", label: "Courses", icon: Link2 },
  { to: "/payments", label: "Monthly Payments", icon: CreditCard },
  { to: "/announcements", label: "Announcements", icon: Megaphone },
  { to: "/settings", label: "Settings", icon: Settings },
];
export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button aria-label="Close navigation" onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-950/40 md:hidden" />
      )}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col
        bg-[#111b35] text-white transition-transform duration-200 md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b
          border-white/10 px-5">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl
              bg-indigo-500 font-bold">L</span>
            <div>
              <p className="font-bold">LessonFlow</p>
              <p className="text-xs text-slate-400">Teacher Admin</p>
            </div>
          </div>
          <button aria-label="Close menu" onClick={onClose}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden">
            <X size={20} />
          </button>
        </div>
         <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="px-3 pb-3 text-xs font-bold uppercase tracking-[0.16em]
            text-slate-500">Manage</p>
          <div className="space-y-1">
            {items.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={onClose}
                className={({ isActive }) => `flex min-h-11 items-center gap-3
                  rounded-xl px-3 text-sm font-medium transition
                  ${isActive
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-950/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={19} />
                <span className="flex-1">{label}</span>
                <ChevronRight size={15} className="opacity-50" />
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-sm font-semibold">Mock data mode</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              No database is connected.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
