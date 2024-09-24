import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');

  if (!isAdminAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AdminRoute;
