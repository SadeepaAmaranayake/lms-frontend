import { Navigate, Outlet, useNavigate } from "react-router";
import { getStudentById } from "../data/studentMockData";
import StudentSidebar from "./StudentSidebar";

export default function StudentLayout() {
  const navigate = useNavigate();
  const student = getStudentById(sessionStorage.getItem("student-id"));

  if (!student) {
    return <Navigate to="/student/login" replace />;
  }

  function handleLogout() {
    sessionStorage.removeItem("student-authenticated");
    sessionStorage.removeItem("student-phone");
    sessionStorage.removeItem("student-id");
    sessionStorage.removeItem("pending-student-id");
    navigate("/student/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <StudentSidebar student={student} onLogout={handleLogout} />

      <main className="min-w-0 flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
