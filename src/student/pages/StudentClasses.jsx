import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import useLanguage from "../../i18n/useLanguage";
import ClassCard from "../components/ClassCard";
import {
  getStudentById,
  studentClasses,
} from "../data/studentMockData";

export default function StudentClasses() {
  const [pageState, setPageState] = useState("success");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const gradeClasses = studentClasses.filter(
    (classItem) => classItem.grade === student.grade,
  );
  const filteredClasses = gradeClasses.filter((classItem) =>
    `${classItem.subject} ${classItem.teacher}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const contentState =
    gradeClasses.length === 0
      ? "empty"
      : filteredClasses.length === 0
        ? "no-results"
        : "success";
  const visibleState = pageState === "success" ? contentState : pageState;

  function handleJoin() {
    window.alert(t("zoomAlert"));
  }

  return (
    <div>
      <p className="text-sm font-medium text-indigo-600">
        {t("grade", { grade: student.grade })}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{t("classes")}</h1>
      <p className="mt-2 text-slate-500">{t("classesDescription")}</p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t("searchClasses")}
          aria-label={t("searchClasses")}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-6">
        <PageState state={visibleState} onRetry={() => setPageState("success")}>
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredClasses.map((classItem) => (
              <ClassCard
                key={classItem.id}
                classItem={classItem}
                onJoin={handleJoin}
              />
            ))}
          </div>
        </PageState>
      </div>
    </div>
  );
}
