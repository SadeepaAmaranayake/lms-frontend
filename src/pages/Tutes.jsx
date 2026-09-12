import ResourcePage from "./ResourcePage";
import { tutes } from "../data/mockData";
import {
  gradeOptions,
  publicationOptions,
  validateGrade,
  validateMaterialFile,
} from "../data/formOptions";

const materialFilters = [
  {
    key: "grade",
    label: "Grade",
    options: gradeOptions,
  },
  {
    key: "status",
    label: "Publication state",
    options: publicationOptions,
  },
  {
  key: "file",
  label: "Material file",
  type: "file",
  accept: ".pdf,.doc,.docx",
  fullWidth: true,
  validate: validateMaterialFile,
},
];

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
  return <ResourcePage 
  eyebrow="Learning material" 
  title="Tutes"
  description="Track the worksheets and lesson packs prepared for students."
  action="Add tute" 
  columns={columns} 
  rows={tutes} 
  fields={fields} 
  searchKeys={["title"]}
  searchPlaceholder="Search by title..."
  filters={materialFilters}
  pageSize={5}
  />;
}
