import { Navigate, Route, Routes } from "react-router";
import AdminLayout from "./layouts/adminLayout";
import Announcements from "./pages/announcements";
import Courses from "./pages/courses";
import Dashboard from "./pages/dashboard";
import GradeDetails from "./pages/gradeDetails";
import Grades from "./pages/grades";
import Login from "./pages/login";
import MonthlyPayments from "./pages/monthlyPayments";
import Papers from "./pages/papers";
import Settings from "./pages/settings";
import Students from "./pages/students";
import Timetable from "./pages/timeTable";
import Tutes from "./pages/tutes";
import ZoomLinks from "./pages/zoomLinks";
function RequireAdmin() {
  const signedIn = sessionStorage.getItem("lms-admin") === "true";
  return signedIn ? <AdminLayout /> : <Navigate to="/login" replace />;
}
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAdmin />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/grades/:gradeNumber" element={<GradeDetails />} />
        <Route path="/students" element={<Students />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/zoom-links" element={<ZoomLinks />} />
        <Route path="/tutes" element={<Tutes />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/payments" element={<MonthlyPayments />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}