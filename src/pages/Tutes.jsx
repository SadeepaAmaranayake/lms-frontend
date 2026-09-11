import ResourcePage from "./ResourcePage";
import { tutes } from "../data/mockData";
import { gradeOptions, publicationOptions } from "../data/formOptions";

const columns = [
  { key: "title", label: "Tute" },
  { key: "grade", label: "Grade", grade: true },
  { key: "uploaded", label: "Added" },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "title", label: "Tute title", required: true, fullWidth: true },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions },
  { key: "uploaded", label: "Added date", required: true,
    placeholder: "11 Sep 2026" },
  { key: "status", label: "Status", type: "select", required: true,
    defaultValue: "Draft", options: publicationOptions },
  { key: "description", label: "Description", multiline: true,
    fullWidth: true },
];
export default function Tutes() {
  return <ResourcePage eyebrow="Learning material" title="Tutes"
    description="Track the worksheets and lesson packs prepared for students."
    action="Add tute" columns={columns} rows={tutes} fields={fields} />;
}
