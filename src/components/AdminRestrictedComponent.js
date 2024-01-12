// AdminRestrictedComponent.js
import React from "react";
import { useAuth } from "./AuthContext";

const AdminRestrictedComponent = ({ children }) => {
  const { user } = useAuth();

  // Check if user is logged in and has admin privileges
  const isAdmin = user && user.email === "admin@gmail.com";

  if (!isAdmin) {
    return <div>You do not have permission to access this content.</div>;
  }

  return <>{children}</>;
};

export default AdminRestrictedComponent;
