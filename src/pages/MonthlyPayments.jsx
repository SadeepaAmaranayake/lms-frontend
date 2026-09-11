import ResourcePage from "./resourcePage";
import { payments } from "../data/mockData";
const columns = [
  { key: "student", label: "Student" },
  { key: "grade", label: "Grade", grade: true },
  { key: "month", label: "Month" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status", badge: true },
];
export default function MonthlyPayments() {
  return <ResourcePage eyebrow="Access control" title="Monthly Payments"
    description="See which temporary student records are paid, pending, or unpaid."
    action="Record payment" columns={columns} rows={payments} />;
}