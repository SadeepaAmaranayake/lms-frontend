import ResourcePage from "./ResourcePage";
import { courses } from "../data/MockData";
const columns = [
  { key: "title", label: "Course" },
  { key: "grade", label: "Grade", grade: true },
  { key: "type", label: "Access" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status", badge: true },
];
export default function Courses() {
  return <ResourcePage eyebrow="Course library" title="Courses"
    description="Review free and paid course records before adding lessons."
    action="Add course" columns={columns} rows={courses} />;
}