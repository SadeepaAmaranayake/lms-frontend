import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import PaymentStatus from "../components/PaymentStatus";
import { getStudentById } from "../data/studentMockData";

export default function StudentProfile() {
  const [pageState, setPageState] = useState("success");
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const fields = [
    ["Full name", student.fullName],
    ["Phone number", student.phone],
    ["Grade", `Grade ${student.grade}`],
    ["School", student.school],
    ["Registration date", student.registrationDate],
    ["Account status", student.status],
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
      <p className="mt-2 text-slate-500">
        Profile information is controlled by the administrator.
      </p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
      </div>

      <PageState state={pageState} onRetry={() => setPageState("success")}>
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(([label, value]) => (
              <div key={label}>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-1 font-semibold capitalize text-slate-900">
                  {value}
                </p>
              </div>
            ))}
            <div>
              <p className="text-sm text-slate-500">Payment status</p>
              <div className="mt-2">
                <PaymentStatus status={student.paymentStatus} />
              </div>
            </div>
          </div>
        </section>
      </PageState>
    </div>
  );
}
