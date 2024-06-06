import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authentication";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.getAuthToken()) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
