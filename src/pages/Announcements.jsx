import ResourcePage from "./ResourcePage";
import { announcements } from "../data/mockData";

const announcementFilters = [
  {
    key: "audience",
    label: "Audience",
    options: [
      {
        value: "All grades",
        label: "All grades",
      },
      {
        value: "Grades 6-9",
        label: "Grades 6-9",
      },
      {
        value: "Grade 10",
        label: "Grade 10",
      },
    ],
  },
];


const columns = [
  { key: "title", label: "Announcement" },
  { key: "audience", label: "Audience" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status", badge: true },
];
export default function Announcements() {
  return <ResourcePage 
    eyebrow="Communication" 
    title="Announcements"
    description="Prepare notices for one grade, several grades, or everyone."
    action="New announcement" 
    columns={columns} 
    rows={announcements}
    searchKeys={["title"]}
    searchPlaceholder="Search announcements..."
    filters={announcementFilters}
    pageSize={5}
    />;
}