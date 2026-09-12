import { Navigate, Outlet } from "react-router";

export default function RequiredStudent() {
  const signedIn =
    sessionStorage.getItem("student-authenticated") === "true";

  return signedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/student/login" replace />
  );
}