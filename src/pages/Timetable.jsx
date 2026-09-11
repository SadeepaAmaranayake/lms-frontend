import ResourcePage from "./resourcePage";
import { timetable } from "../data/mockData";
const columns = [
  { key: "grade", label: "Grade", grade: true },
  { key: "day", label: "Day" },
  { key: "time", label: "Time" },
  { key: "topic", label: "Topic" },
];
export default function Timetable() {
  return <ResourcePage eyebrow="Schedule" title="Timetable"
    description="Keep the weekly class plan clear for every grade."
    action="Add class" columns={columns} rows={timetable} />;
}
