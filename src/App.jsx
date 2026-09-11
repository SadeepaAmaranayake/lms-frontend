import { Navigate, Route, Routes } from "react-router";
import AdminLayout from "./layouts/AdminLayout";
import Announcements from "./pages/Announcements";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import GradeDetails from "./pages/GradeDetails";
import Grades from "./pages/Grades";
import Login from "./pages/Login";
import MonthlyPayments from "./pages/MonthlyPayments";
import Papers from "./pages/Papers";
import Settings from "./pages/Settings";
import Students from "./pages/Students";
import Timetable from "./pages/Timetable";
import Tutes from "./pages/Tutes";
import ZoomLinks from "./pages/ZoomLinks";
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
