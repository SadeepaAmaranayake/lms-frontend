import { useState } from "react";
import DevStateControls from "../../components/DevStateControls";
import PageState from "../../components/PageState";
import PaymentStatus from "../components/PaymentStatus";
import { getStudentById } from "../data/studentMockData";

export default function StudentPayments() {
  const [pageState, setPageState] = useState("success");
  const [search, setSearch] = useState("");
  const student = getStudentById(sessionStorage.getItem("student-id"));
  const filteredPayments = student.payments.filter((payment) =>
    `${payment.month} ${payment.year} ${payment.reference}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const contentState =
    student.payments.length === 0
      ? "empty"
      : filteredPayments.length === 0
        ? "no-results"
        : "success";
  const visibleState = pageState === "success" ? contentState : pageState;

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Payments</h1>
      <p className="mt-2 text-slate-500">Your mock payment history.</p>

      <div className="mt-6">
        <DevStateControls value={pageState} onChange={setPageState} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search month, year or reference..."
          aria-label="Search payments"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-6">
        <PageState state={visibleState} onRetry={() => setPageState("success")}>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-5 py-3 font-semibold">Period</th>
                  <th className="px-5 py-3 font-semibold">Amount</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-5 py-4">
                      {payment.month} {payment.year}
                    </td>
                    <td className="px-5 py-4">
                      LKR {payment.amount.toLocaleString()}
                    </td>
                    <td className="px-5 py-4">
                      <PaymentStatus status={payment.status} />
                    </td>
                    <td className="px-5 py-4">{payment.paymentDate}</td>
                    <td className="px-5 py-4">{payment.reference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageState>
      </div>
    </div>
  );
}
