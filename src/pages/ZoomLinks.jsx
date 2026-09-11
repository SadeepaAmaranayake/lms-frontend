import ResourcePage from "./resourcePage";
import { zoomLinks } from "../data/mockData";
const columns = [
  { key: "title", label: "Class" },
  { key: "grade", label: "Grade", grade: true },
  { key: "date", label: "Date" },
  { key: "status", label: "Status", badge: true },
];
export default function ZoomLinks() {
  return <ResourcePage eyebrow="Live classes" title="Zoom Links"
    description="Organize the meeting entry for each online class."
    action="Add Zoom link" columns={columns} rows={zoomLinks} />;
}