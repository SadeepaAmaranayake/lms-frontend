import { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { useNavigate } from "react-router";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (email === "admin@lessonflow.lk" && password === "admin123") {
      sessionStorage.setItem("lms-admin", "true");
      navigate("/dashboard");
      return;
    }
    setError("Use the temporary email and password shown below.");
  }
  return (
    <main className="grid min-h-screen bg-slate-950 lg:grid-cols-2">
      <section className="hidden bg-[#111b35] p-12 text-white lg:flex
        lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl
            bg-indigo-500 text-lg font-bold">L</span>
          <span className="text-lg font-bold">LessonFlow</span>
        </div>
        <div className="max-w-lg">
          <p className="text-sm font-bold uppercase tracking-[0.18em]
            text-lime-400">Single-teacher LMS</p>
          <h1 className="mt-5 text-5xl font-bold leading-tight">
            Run every class from one clear workspace.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This first version uses temporary data while you build the frontend.
          </p>
        </div>
        <p className="text-sm text-slate-500">Frontend learning build</p>
      </section>
      <section className="grid place-items-center bg-slate-50 px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <span className="grid size-11 place-items-center rounded-xl
  bg-indigo-600 font-bold text-white">L</span>
          </div>
          <p className="text-sm font-bold text-indigo-600">ADMIN PORTAL</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Welcome back</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in with the temporary details to open the dashboard.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <span className="mt-2 flex items-center gap-3 rounded-xl border
                border-slate-200 bg-white px-4 focus-within:border-indigo-500">
                <Mail size={18} className="text-slate-400" />
                <input type="email" required value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 w-full outline-none"
                  placeholder="teacher@example.com" />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <span className="mt-2 flex items-center gap-3 rounded-xl border
                border-slate-200 bg-white px-4 focus-within:border-indigo-500">
                <LockKeyhole size={18} className="text-slate-400" />
                <input type="password" required value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="min-h-12 w-full outline-none" placeholder="Password" />
              </span>
            </label>
            {error && <p className="rounded-xl bg-rose-50 p-3 text-sm
              text-rose-700">{error}</p>}
            <button className="min-h-12 w-full rounded-xl bg-indigo-600
              font-semibold text-white hover:bg-indigo-700">
              Sign in
            </button>
          </form>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4
            text-sm text-amber-900">
            <p><strong>Email:</strong> admin@lessonflow.lk</p>
            <p className="mt-1"><strong>Password:</strong> admin123</p>
          </div>
        </div>
      </section>
         </main>
  );
}