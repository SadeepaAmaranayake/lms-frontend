import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import MaterialCard from "../components/MaterialCard";
import {
  getStudentById,
  studentPapers,
} from "../data/studentMockData";

export default function StudentPapers() {
  const [pageState, setPageState] = useState("success");
  const [search, setSearch] = useState("");
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const records = studentPapers.filter((paper) => paper.grade === student.grade);
  const filteredRecords = records.filter((paper) =>
    `${paper.title} ${paper.subject} ${paper.year} ${paper.paperType}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const contentState =
    records.length === 0
      ? "empty"
      : filteredRecords.length === 0
        ? "no-results"
        : "success";
  const visibleState = pageState === "success" ? contentState : pageState;

  return (
    <div>
      <p className="text-sm font-medium text-indigo-600">Grade {student.grade}</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">Papers</h1>
      <p className="mt-2 text-slate-500">Past and model papers for your grade.</p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search papers..."
          aria-label="Search papers"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-6">
        <PageState state={visibleState} onRetry={() => setPageState("success")}>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredRecords.map((paper) => (
              <MaterialCard
                key={paper.id}
                material={paper}
                paymentStatus={student.paymentStatus}
                type="Paper"
              />
            ))}
          </div>
        </PageState>
      </div>
    </div>
  );
}
