import { useState } from "react";
import { GraduationCap, Phone, UserRound } from "lucide-react";
import { useNavigate } from "react-router";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useLanguage from "../../i18n/useLanguage";
import LanguageToggle from "../components/LanguageToggle";
import {
  findStudentByPhone,
  normalizePhone,
} from "../data/studentMockData";

const grades = Array.from({ length: 8 }, (_, index) => index + 6);

export default function StudentLogin() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  function clearError() {
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError(t("nameRequired"));
      return;
    }

    if (!grade) {
      setError(t("selectGrade"));
      return;
    }

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

    const enteredName = name
      .trim()
      .replace(/\s+/g, " ")
      .toLocaleLowerCase();

    const registeredName = student.fullName
      .trim()
      .replace(/\s+/g, " ")
      .toLocaleLowerCase();

    if (
      enteredName !== registeredName ||
      Number(grade) !== student.grade
    ) {
      setError(t("detailsDoNotMatch"));
      return;
    }

    sessionStorage.setItem("student-phone", cleanedPhone);
    sessionStorage.setItem("pending-student-id", student.id);
    navigate("/student/otp");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="mb-4 flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="size-5" />
            </span>

            <LanguageToggle />
          </div>

          <CardTitle className="text-2xl">{t("loginTitle")}</CardTitle>

          <CardDescription>{t("loginDescription")}</CardDescription>
        </CardHeader>

        <CardContent>
          <Alert className="mb-6 border-amber-300 bg-amber-50">
            <AlertDescription className="text-amber-900">
              {t("loginDevNotice")}
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="student-name">{t("fullName")}</Label>

              <div className="relative">
                <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="student-name"
                  value={name}
                  autoComplete="name"
                  placeholder="Test Student"
                  className="h-11 pl-9"
                  aria-invalid={Boolean(error)}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearError();
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="student-phone">{t("phoneNumber")}</Label>

              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="student-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  autoComplete="tel"
                  placeholder="0771234567"
                  className="h-11 pl-9"
                  aria-invalid={Boolean(error)}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    clearError();
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t("gradeLabel")}</Label>

              <Select
                value={grade}
                onValueChange={(value) => {
                  setGrade(value);
                  clearError();
                }}
              >
                <SelectTrigger
                  className="h-11 w-full"
                  aria-invalid={Boolean(error)}
                >
                  <SelectValue placeholder={t("selectGrade")} />
                </SelectTrigger>

                <SelectContent>
                  {grades.map((gradeNumber) => (
                    <SelectItem
                      key={gradeNumber}
                      value={String(gradeNumber)}
                    >
                      {t("grade", { grade: gradeNumber })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="h-11 w-full">
              {t("continue")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}