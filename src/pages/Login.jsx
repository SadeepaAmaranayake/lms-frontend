import { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { useNavigate } from "react-router";

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
      <section className="hidden bg-[#111b35] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-indigo-500 text-lg font-bold">
            L
          </span>
          <span className="text-lg font-bold">LessonFlow</span>
        </div>

        <div className="max-w-lg">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
            Single-teacher LMS
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight">
            Run every class from one clear workspace.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Manage students, classes, payments and learning materials.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Frontend development version
        </p>
      </section>

      <section className="grid place-items-center bg-muted/40 px-5 py-12">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <div className="mb-3 grid size-11 place-items-center rounded-xl bg-primary font-bold text-primary-foreground lg:hidden">
              L
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Admin portal
            </p>

            <CardTitle className="text-3xl">Welcome back</CardTitle>

            <CardDescription>
              Sign in using the temporary administrator details.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email address</Label>

                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  />

                  <Input
                    id="admin-email"
                    type="email"
                    value={email}
                    required
                    autoComplete="username"
                    placeholder="teacher@example.com"
                    className="h-11 pl-9"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "login-error" : undefined}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>

                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  />

                  <Input
                    id="admin-password"
                    type="password"
                    value={password}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-11 pl-9"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "login-error" : undefined}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                  />
                </div>
              </div>

              {error && (
                <p
                  id="login-error"
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                >
                  {error}
                </p>
              )}

              <Button type="submit" className="h-11 w-full">
                Sign in
              </Button>
            </form>

            <div className="mt-6 rounded-lg border bg-muted p-4 text-sm">
              <p className="font-semibold">Development login</p>
              <p className="mt-2 text-muted-foreground">
                Email: admin@lessonflow.lk
              </p>
              <p className="text-muted-foreground">
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}