import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import MaterialCard from "../components/MaterialCard";
import { getStudentById, studentTutes } from "../data/studentMockData";

export default function StudentTutes() {
  const [pageState, setPageState] = useState("success");
  const [search, setSearch] = useState("");
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const records = studentTutes.filter((tute) => tute.grade === student.grade);

  const filteredRecords = records.filter((record) => {
    const searchText = search.toLowerCase();

    return (
      record.title.toLowerCase().includes(searchText) ||
      record.subject.toLowerCase().includes(searchText)
    );
  });

  const contentState =
    records.length === 0
      ? "empty"
      : filteredRecords.length === 0
        ? "no-results"
        : "success";

  const visibleState =
    pageState === "success" ? contentState : pageState;

  function handleRetry() {
    setPageState("loading");

    setTimeout(() => {
      setPageState("success");
    }, 800);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Tutes
      </h1>
      <p className="mt-2 text-slate-500">
        Grade {student.grade} learning materials.
      </p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
        <label
          htmlFor="tute-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search tutes
        </label>

        <input
          id="tute-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by title or subject..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-6">
        <PageState state={visibleState} onRetry={handleRetry}>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredRecords.map((record) => (
              <MaterialCard
                key={record.id}
                material={record}
                paymentStatus={student.paymentStatus}
                type="Tute"
              />
            ))}
          </div>
        </PageState>
      </div>
    </div>
  );
}
