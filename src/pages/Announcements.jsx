import ResourcePage from "./ResourcePage";
import { announcements } from "../data/mockData";
const columns = [
  { key: "title", label: "Announcement" },
  { key: "audience", label: "Audience" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status", badge: true },
];
export default function Announcements() {
  return <ResourcePage eyebrow="Communication" title="Announcements"
    description="Prepare notices for one grade, several grades, or everyone."
    action="New announcement" columns={columns} rows={announcements} />;
}