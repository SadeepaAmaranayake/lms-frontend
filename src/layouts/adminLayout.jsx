import { useState } from "react";
import { LogOut, Menu } from "lucide-react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("lms-admin");
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="md:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center
          justify-between border-b border-slate-200 bg-white/90 px-4
          backdrop-blur sm:px-7">
          <div className="flex items-center gap-3">
            <button aria-label="Open navigation" onClick={() => setMenuOpen(true)}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-700
                hover:bg-slate-50 md:hidden">
              <Menu size={20} />
            </button>
            <div>
              <p className="text-sm font-semibold text-slate-900">Teacher workspace</p>
              <p className="text-xs text-slate-500">September 2026</p>
            </div>
          </div>
          <button onClick={logout}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border
              border-slate-200 px-3 text-sm font-semibold text-slate-700
              hover:bg-slate-50">
            <LogOut size={17} />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </header>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-7 lg:p-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
}