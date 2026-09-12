import { NavLink, Outlet, useNavigate } from "react-router";
import {
  BookOpen,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  LogOut,
  User,
  Video,
} from "lucide-react";

const navigation = [
  {
    to: "/student/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    to: "/student/classes",
    label: "Classes",
    icon: Video,
  },
  {
    to: "/student/tutes",
    label: "Tutes",
    icon: BookOpen,
  },
  {
    to: "/student/papers",
    label: "Papers",
    icon: FileText,
  },
  {
    to: "/student/courses",
    label: "Courses",
    icon: GraduationCap,
  },
  {
    to: "/student/payments",
    label: "Payments",
    icon: CreditCard,
  },
  {
    to: "/student/profile",
    label: "Profile",
    icon: User,
  },
];

export default function StudentLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("student-authenticated");
    sessionStorage.removeItem("student-phone");
    navigate("/student/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <aside className="w-full bg-[#111b35] text-white md:min-h-screen md:w-64">
        <div className="border-b border-white/10 px-5 py-6">
          <h1 className="text-xl font-bold">LessonFlow</h1>
          <p className="mt-1 text-sm text-slate-400">Student Portal</p>
        </div>

        <nav className="space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
                    isActive
                      ? "bg-indigo-500 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`
                }
              >
                <Icon size={19} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-300 hover:bg-red-500/10"
          >
            <LogOut size={19} />
            Log out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}