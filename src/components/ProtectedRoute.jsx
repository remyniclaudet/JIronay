import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { admin } = useContext(AuthContext);

  if (!admin) {
    return <Navigate to="/" />;
  }

  return children;
}
