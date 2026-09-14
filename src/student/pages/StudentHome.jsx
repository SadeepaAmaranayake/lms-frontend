import {
  ArrowRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import teacherProfile from "../../assets/teacher-profile.jpg";
import teacherClassroom from "../../assets/teacher-classroom.jpg";
import useLanguage from "../../i18n/useLanguage";
import LanguageToggle from "../components/LanguageToggle";

export default function StudentHome({ embedded = false }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const signedIn =
    sessionStorage.getItem("student-authenticated") === "true";

  function handleContinue() {
    navigate(
      signedIn ? "/student/dashboard" : "/student/login"
    );
  }

  return (
    <main className={embedded ? "space-y-8" : "min-h-screen bg-muted/40"}>
      {!embedded && <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary font-bold text-primary-foreground">
              L
            </span>

            <span className="font-bold">LessonFlow</span>
          </div>

          <LanguageToggle />
        </div>
      </header>}

      <section className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
        embedded ? "" : "mx-auto max-w-6xl px-5 py-12 lg:py-20"
      }`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
            {t("teacherWelcome")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {t("meetTeacher")}
          </h1>

          <h2 className="mt-6 text-2xl font-semibold">
            {t("teacherName")}
          </h2>

          <p className="mt-1 font-medium text-primary">
            {t("teacherSubject")}
          </p>

          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
            {t("teacherDescription")}
          </p>

          <Button
            type="button"
            className="mt-8 h-11"
            onClick={handleContinue}
          >
            {signedIn
              ? t("openDashboard")
              : t("continueToLogin")}

            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

          <img
            src={teacherProfile}
            alt={t("teacherName")}
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className={embedded ? "" : "border-t bg-background"}>
        <div className={`grid gap-6 md:grid-cols-3 ${
          embedded ? "" : "mx-auto max-w-6xl px-5 py-12"
        }`}>
          <Card>
            <CardHeader>
              <GraduationCap className="size-7 text-primary" />
              <CardTitle>{t("teacherApproachTitle")}</CardTitle>
              <CardDescription>
                {t("teacherApproachDescription")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="size-7 text-primary" />
              <CardTitle>{t("teacherClassesTitle")}</CardTitle>
              <CardDescription>
                {t("teacherClassesDescription")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden py-0">
            <img
              src={teacherClassroom}
              alt={t("teacherClassesTitle")}
              className="h-full min-h-56 w-full object-cover"
            />

            <CardContent className="sr-only">
              {t("teacherClassesDescription")}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
