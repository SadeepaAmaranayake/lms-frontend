import { useState } from "react";
import { useNavigate } from "react-router";
import useLanguage from "../../i18n/useLanguage";
import LanguageToggle from "../components/LanguageToggle";
import {
  findStudentByPhone,
  normalizePhone,
} from "../data/studentMockData";

export default function StudentLogin() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedPhone = normalizePhone(phone);

    if (!/^[0-9]{9,15}$/.test(cleanedPhone)) {
      setError(t("invalidPhone"));
      return;
    }

    const student = findStudentByPhone(cleanedPhone);

    if (!student) {
      setError(t("accountNotFound"));
      return;
    }

    sessionStorage.setItem("student-phone", cleanedPhone);
    sessionStorage.setItem("pending-student-id", student.id);
    navigate("/student/otp");
  }

  return (
    <div className="grid min-h-screen place-items-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-lg">
        <div className="mb-6 flex justify-end">
          <LanguageToggle />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          {t("loginTitle")}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {t("loginDescription")}
        </p>

        <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
          {t("loginDevNotice")}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              {t("phoneNumber")}
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setError("");
              }}
              placeholder="0771234567"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700"
          >
            {t("continue")}
          </button>
        </form>
      </div>
    </div>
  );
}
