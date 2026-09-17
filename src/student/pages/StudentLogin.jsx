import { useEffect, useState } from "react";
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
import { GenerativeTree } from "@/components/ui/generative-tree";

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
  const [showTree, setShowTree] = useState(() =>
    window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches
  );

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setShowTree(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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
    <main className="grid min-h-svh lg:grid-cols-2">
      <section
        aria-hidden="true"
        className="relative hidden min-h-svh overflow-hidden bg-[#0a0a0a] lg:block"
      >
        {showTree ? (
          <GenerativeTree
            className="absolute inset-0"
            style={{ pointerEvents: "none" }}
            speed={0.65}
            particleAmount={0.5}
            hue={170}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#193954,#0a0a0a_70%)]" />
        )}
      </section>

      <section className="flex min-h-svh items-center justify-center bg-slate-50 px-4 py-8 sm:px-8">
          <Card className="w-full max-w-md shadow-xl">
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
                className="mt-6 block text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                {t("meetTeacher")}
              </Link>
            </CardContent>
          </Card>
      </section>
    </main>
  );
}
