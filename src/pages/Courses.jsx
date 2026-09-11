import ResourcePage from "./ResourcePage";
import { courses } from "../data/mockData";
import { gradeOptions, publicationOptions } from "../data/formOptions";

const columns = [
  { key: "title", label: "Course" },
  { key: "grade", label: "Grade", grade: true },
  { key: "type", label: "Access" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "title", label: "Course title", required: true, fullWidth: true },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions },
  { key: "type", label: "Access", type: "select", required: true,
    defaultValue: "Free", options: [
      { value: "Free", label: "Free" },
      { value: "Paid", label: "Paid" },
    ] },
  { key: "price", label: "Price", required: true, defaultValue: "Free",
    placeholder: "Free or LKR 3,500" },
  { key: "status", label: "Status", type: "select", required: true,
    defaultValue: "Draft", options: publicationOptions },
  { key: "description", label: "Description", multiline: true,
    fullWidth: true },
];
export default function Courses() {
  return <ResourcePage eyebrow="Course library" title="Courses"
    description="Review free and paid course records before adding lessons."
    action="Add course" columns={columns} rows={courses} fields={fields} />;
}
