import ResourcePage from "./resourcePage";
import { papers } from "../data/mockData";
const columns = [
  { key: "title", label: "Paper" },
  { key: "grade", label: "Grade", grade: true },
  { key: "category", label: "Category" },
  { key: "status", label: "Status", badge: true },
];
export default function Papers() {
  return <ResourcePage eyebrow="Assessment" title="Papers"
    description="Organize past papers, model papers, and practice sets."
    action="Add paper" columns={columns} rows={papers} />;
}
