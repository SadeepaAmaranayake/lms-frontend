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
import { NavLink } from "react-router";
import useLanguage from "../../i18n/useLanguage";
import LanguageToggle from "./LanguageToggle";

const navigation = [
  { to: "/student/dashboard", labelKey: "dashboard", icon: Home },
  { to: "/student/classes", labelKey: "classes", icon: Video },
  { to: "/student/tutes", labelKey: "tutes", icon: BookOpen },
  { to: "/student/papers", labelKey: "papers", icon: FileText },
  { to: "/student/courses", labelKey: "courses", icon: GraduationCap },
  { to: "/student/payments", labelKey: "payments", icon: CreditCard },
  { to: "/student/profile", labelKey: "profile", icon: User },
];

export default function StudentSidebar({ student, onLogout }) {
  const { t } = useLanguage();

  return (
    <aside className="w-full bg-[#111b35] text-white md:min-h-screen md:w-64 md:shrink-0">
      <div className="border-b border-white/10 px-5 py-6">
        <h1 className="text-xl font-bold">LessonFlow</h1>
        <p className="mt-1 text-sm text-slate-400">{t("studentPortal")}</p>
        <p className="mt-4 truncate text-sm font-medium">{student.fullName}</p>
        <p className="text-xs text-slate-400">
          {t("grade", { grade: student.grade })}
        </p>
        <div className="mt-4">
          <LanguageToggle dark />
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto p-3 md:block md:space-y-1 md:p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 rounded-lg px-3 py-3 text-sm md:gap-3 md:px-4 ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "text-slate-300 hover:bg-white/10"
                }`
              }
            >
              <Icon size={19} />
              {t(item.labelKey)}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-300 hover:bg-red-500/10"
        >
          <LogOut size={19} />
          {t("logout")}
        </button>
      </div>
    </aside>
  );
}
