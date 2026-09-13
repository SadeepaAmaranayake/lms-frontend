import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import useLanguage from "../../i18n/useLanguage";
import LockedContent from "../components/LockedContent";
import {
  getStudentById,
  studentCourses,
} from "../data/studentMockData";

export default function StudentCourses() {
  const [pageState, setPageState] = useState("success");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const filteredCourses = studentCourses.filter((course) =>
    `${course.title} ${course.subject}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const contentState =
    studentCourses.length === 0
      ? "empty"
      : filteredCourses.length === 0
        ? "no-results"
        : "success";
  const visibleState = pageState === "success" ? contentState : pageState;

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">{t("courses")}</h1>
      <p className="mt-2 text-slate-500">
        {t("coursesDescription")}
      </p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t("searchCourses")}
          aria-label={t("searchCourses")}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-6">
        <PageState state={visibleState} onRetry={() => setPageState("success")}>
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredCourses.map((course) => {
              const purchased = student.purchasedCourseIds.includes(course.id);

              return (
                <article
                  key={course.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-indigo-600">
                    {course.subject}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {course.description}
                  </p>

                  <div className="mt-5">
                    {purchased ? (
                      <button
                        type="button"
                        onClick={() => window.alert(t("courseAlert"))}
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                      >
                        {t("openCourse")}
                      </button>
                    ) : (
                      <LockedContent reason={t("courseLocked")} />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </PageState>
      </div>
    </div>
  );
}
