import ResourcePage from "./ResourcePage";
import { timetable } from "../data/mockData";
import { 
   dayOptions,
   gradeOptions,
   validateGrade,
   validateTimeRange,
   } from "../data/formOptions";

const columns = [
  { key: "grade", label: "Grade", grade: true },
  { key: "day", label: "Day" },
  { key: "time", label: "Time" },
  { key: "topic", label: "Topic" },
];
const fields = [
  { key: "grade", label: "Grade", type: "select", required: true,
    options: gradeOptions, validate: validateGrade },
  { key: "day", label: "Day", type: "select", required: true,
    options: dayOptions },
  { key: "time", label: "Time", required: true,
    placeholder: "4:00 PM - 5:30 PM", validate: validateTimeRange },
  { key: "topic", label: "Topic", required: true },
  { key: "location", label: "Location or delivery mode", fullWidth: true,
    placeholder: "Online or classroom name" },
];
export default function Timetable() {
  return <ResourcePage eyebrow="Schedule" title="Timetable"
    description="Keep the weekly class plan clear for every grade."
    action="Add class" columns={columns} rows={timetable} fields={fields} />;
}
