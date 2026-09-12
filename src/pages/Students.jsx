import ResourcePage from "./ResourcePage";
import { students } from "../data/mockData";
import { 
   gradeOptions,
   paymentOptions,
   validateDuplicateStudentPhone,
   validateGrade,
   validateSriLankanPhone,
   } from "../data/formOptions";

const studentFilters = [
  {
    key: "grade",
    label: "Grade",
    options: gradeOptions,
  },
];

const columns = [
  { key: "name", label: "Student" },
  {
    key: "phone",
    label: "Student phone",
    required: true,
    placeholder: "0771234567",
    validate: (value, values, context) =>
      validateSriLankanPhone(value) ||
      validateDuplicateStudentPhone(value, values, context),
  },  
  {
    key: "grade",
    label: "Grade",
    type: "select",
    required: true,
    options: gradeOptions,
    validate: validateGrade,
  },
  { key: "status", label: "September payment", badge: true },
];
const fields = [
  { key: "name", label: "Full name", required: true, fullWidth: true },
  { key: "phone", label: "Student phone", required: true,
    placeholder: "0771234567", validate: validateSriLankanPhone },
  { key: "parentPhone", label: "Parent phone", placeholder: "+94771234567",
    validate: validateSriLankanPhone },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions },
  { key: "school", label: "School" },
  { key: "status", label: "Payment status", type: "select", required: true,
    defaultValue: "Pending", options: paymentOptions },
];
export default function Students() {
  return <ResourcePage 
      eyebrow="People"
      title="Students"
      description="Review student contact, grade, and payment information."
      action="Add student"
      columns={columns}
      rows={students}
      fields={fields}
      searchKeys={["name", "phone"]}
      searchPlaceholder="Search by name or phone..."
      filters={studentFilters}
      pageSize={5}
    />;
}
