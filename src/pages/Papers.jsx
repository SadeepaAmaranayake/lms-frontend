import ResourcePage from "./ResourcePage";
import { papers } from "../data/mockData";
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
];

const columns = [
  { key: "title", label: "Paper" },
  { key: "grade", label: "Grade", grade: true },
  { key: "category", label: "Category" },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "title", label: "Paper title", required: true, fullWidth: true },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions, validate: validateGrade },
  { key: "category", label: "Category", type: "select", required: true,
    options: [
      { value: "Past Paper", label: "Past paper" },
      { value: "Model Paper", label: "Model paper" },
      { value: "Worksheet", label: "Worksheet" },
    ] },
  { key: "year", label: "Year", type: "number", min: "2000" },
  { key: "status", label: "Status", type: "select", required: true,
    defaultValue: "Draft", options: publicationOptions },
  { key: "description", label: "Description", multiline: true,
    fullWidth: true },
  { key: "file", label: "Material file", type: "file",
    accept: ".pdf,.doc,.docx", fullWidth: true,
    validate: validateMaterialFile },
];
export default function Papers() {
  return <ResourcePage 
    eyebrow="Assessment" 
    title="Papers"
    description="Organize past papers, model papers, and practice sets."
    action="Add paper" 
    columns={columns} rows={papers} 
    fields={fields}
    searchKeys={["title"]}
    searchPlaceholder="Search by title..."
    filters={materialFilters}
    pageSize={5}
    />;
}
