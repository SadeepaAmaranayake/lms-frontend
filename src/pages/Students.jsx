import ResourcePage from "./ResourcePage";
import { students } from "../data/mockData";
const columns = [
  { key: "name", label: "Student" },
  { key: "phone", label: "Phone" },
  { key: "grade", label: "Grade", grade: true },
  { key: "status", label: "September payment", badge: true },
];
export default function Students() {
  return <ResourcePage eyebrow="People" title="Students"
    description="Review student contact, grade, and payment information."
    action="Add student" columns={columns} rows={students} />;
}
