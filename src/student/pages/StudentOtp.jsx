import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { getStudentById } from "../data/studentMockData";

const DEVELOPMENT_OTP = "123456";

export default function StudentOtp() {
  const navigate = useNavigate();
  const phone = sessionStorage.getItem("student-phone");
  const pendingStudentId = sessionStorage.getItem("pending-student-id");
  const student = getStudentById(pendingStudentId);

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  if (!phone || !student) {
    return <Navigate to="/student/login" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (otp !== DEVELOPMENT_OTP) {
      setError("Incorrect test code.");
      return;
    }

    sessionStorage.setItem("student-authenticated", "true");
    sessionStorage.setItem("student-id", student.id);
    sessionStorage.removeItem("pending-student-id");
    navigate("/student/dashboard", { replace: true });
  }

  return (
    <div className="grid min-h-screen place-items-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900">
          Verify phone number
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Test verification for {phone}
        </p>

        <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
          Development only: use test code <strong>123456</strong>.
          No SMS is being sent.
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="otp"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Six-digit code
            </label>

            <input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");
                setOtp(value);
                setError("");
              }}
              placeholder="123456"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-center text-2xl tracking-[0.4em] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Verify
          </button>

          <button
            type="button"
            onClick={() => navigate("/student/login")}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:bg-slate-50"
          >
            Change phone number
          </button>

          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed text-sm text-slate-400"
          >
            Resend SMS unavailable during development
          </button>
        </form>
      </div>
    </div>
  );
}
