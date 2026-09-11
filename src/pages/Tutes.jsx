import ResourcePage from "./ResourcePage";
import { tutes } from "../data/mockData";
const columns = [
  { key: "title", label: "Tute" },
  { key: "grade", label: "Grade", grade: true },
  { key: "uploaded", label: "Added" },
  { key: "status", label: "Status", badge: true },
];
export default function Tutes() {
  return <ResourcePage eyebrow="Learning material" title="Tutes"
    description="Track the worksheets and lesson packs prepared for students."
    action="Add tute" columns={columns} rows={tutes} />;
}
