import { useState } from "react";
import { GraduationCap, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import teacherClassroom from "../../assets/teacher-classroom.jpg";
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

    if (!/^07\d{8}$/.test(cleanedPhone)) {
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
    <main className="min-h-svh bg-slate-100">
      <div className="mx-auto grid min-h-svh max-w-7xl lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-8 lg:px-8 lg:py-8">
        {/* Visual panel: shown only on larger screens */}
        <section className="relative hidden min-h-[640px] overflow-hidden rounded-3xl bg-slate-950 text-white lg:flex lg:flex-col lg:justify-between">
          <img
            src={teacherClassroom}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />

          <div className="relative p-10">
            <p className="text-xl font-bold">LessonFlow</p>
            <p className="mt-1 text-sm text-white/80">
              {t("studentPortal")}
            </p>
          </div>

          <div className="relative p-10">
            <p className="text-sm font-semibold text-indigo-200">
              {t("teacherWelcome")}
            </p>

            <h1 className="mt-3 max-w-lg text-4xl font-bold leading-tight">
              {t("meetTeacher")}
            </h1>

            <p className="mt-3 text-white/85">
              {t("teacherSubject")}
            </p>

            <Link
              to="/student"
              className="mt-6 inline-flex rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              {t("meetTeacher")}
            </Link>
          </div>
        </section>

        {/* Form panel: visible on every screen size */}
        <div className="flex items-center justify-center px-4 py-8 sm:px-8 lg:px-0">
          <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="size-5" />
                </span>

                <LanguageToggle />
              </div>

              <CardTitle className="text-2xl">
                {t("loginTitle")}
              </CardTitle>

              <CardDescription>
                {t("loginDescription")}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {import.meta.env.DEV && (
                <Alert className="mb-6 border-amber-300 bg-amber-50">
                  <AlertDescription className="text-amber-900">
                    {t("loginDevNotice")}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="student-phone">
                    {t("phoneNumber")}
                  </Label>

                  <div className="relative">
                    <Phone
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    />

                    <Input
                      id="student-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      value={phone}
                      placeholder="0771234567"
                      className="h-12 pl-9"
                      aria-invalid={Boolean(error)}
                      onChange={(event) => {
                        setPhone(event.target.value);
                        setError("");
                      }}
                    />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="h-12 w-full">
                  {t("continue")}
                </Button>
              </form>

              <Link
                to="/student"
                className="mt-6 block text-center text-sm text-muted-foreground underline-offset-4 hover:underline lg:hidden"
              >
                {t("meetTeacher")}
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}