import { Navigate, Outlet } from "react-router";
import { getStudentById } from "../data/studentMockData";

export default function RequiredStudent() {
  const signedIn =
    sessionStorage.getItem("student-authenticated") === "true";
  const studentId = sessionStorage.getItem("student-id");
  const studentExists = Boolean(getStudentById(studentId));

  return signedIn && studentExists ? (
    <Outlet />
  ) : (
    <Navigate to="/student/login" replace />
  );
}
