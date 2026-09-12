import ResourcePage from "./ResourcePage";
import { payments } from "../data/mockData";
import {
   gradeOptions,
   paymentOptions,
   validateGrade,
   validatePositiveAmount,
   } from "../data/formOptions";

const paymentFilters = [
  {
    key: "month",
    label: "Month",
    options: [
      {
        value: "September 2026",
        label: "September 2026",
      },
    ],
  },
  {
    key: "status",
    label: "Status",
    options: paymentOptions,
  },
];

const columns = [
  { key: "student", label: "Student" },
  { key: "grade", label: "Grade", grade: true },
  { key: "month", label: "Month" },
  {
    key: "amount",
    label: "Amount",
    type: "number",
    required: true,
    min: "1",
    step: "0.01",
    placeholder: "2500",
    validate: validatePositiveAmount,
  },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "student", label: "Student", required: true, fullWidth: true },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions },
  { key: "month", label: "Billing month", required: true,
    placeholder: "September 2026" },
  { key: "amount", label: "Amount", required: true,
    placeholder: "LKR 2,000" },
  { key: "status", label: "Status", type: "select", required: true,
    defaultValue: "Pending", options: paymentOptions },
  { key: "method", label: "Payment method", type: "select", options: [
    { value: "Cash", label: "Cash" },
    { value: "Bank transfer", label: "Bank transfer" },
    { value: "Card", label: "Card" },
    { value: "Other", label: "Other" },
  ] },
  { key: "reference", label: "Receipt or reference number", fullWidth: true },
];
export default function MonthlyPayments() {
  return <ResourcePage 
    eyebrow="Access control"
      title="Monthly Payments"
      description="See which temporary student records are paid, pending, or unpaid."
      action="Record payment"
      columns={columns}
      rows={payments}
      fields={fields}
      searchKeys={["student", "month"]}
      searchPlaceholder="Search student or month..."
      filters={paymentFilters}
      pageSize={5}
   />;
}
