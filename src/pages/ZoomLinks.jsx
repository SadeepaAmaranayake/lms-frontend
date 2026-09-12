import ResourcePage from "./ResourcePage";
import { zoomLinks } from "../data/mockData";
import {
   gradeOptions, 
   scheduleOptions,
   validateDate,
   validateGrade,
   validateZoomUrl,
   } from "../data/formOptions";

const columns = [
  { key: "title", label: "Class" },
  { key: "grade", label: "Grade", grade: true },
  {
    key: "date",
    label: "Class date and time",
    required: true,
    placeholder: "16 Sep 2026, 4:00 PM",
    validate: validateDate,
  },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "title", label: "Class title", required: true, fullWidth: true },
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions },
  { key: "date", label: "Class date and time", required: true,
    placeholder: "16 Sep 2026, 4:00 PM" },
  {
    key: "meetingUrl",
    label: "Zoom meeting URL",
    type: "url",
    required: true,
    fullWidth: true,
    placeholder: "https://zoom.us/j/123456789",
    validate: validateZoomUrl,
  },
  { key: "status", label: "Status", type: "select", required: true,
    defaultValue: "Scheduled", options: scheduleOptions },
];
export default function ZoomLinks() {
  return <ResourcePage eyebrow="Live classes" title="Zoom Links"
    description="Organize the meeting entry for each online class."
    action="Add Zoom link" columns={columns} rows={zoomLinks} fields={fields} />;
}
