import React, { createContext, useState, useContext, ReactNode } from 'react';

type AdminContextType = {
  isAdmin: boolean;
  loginAdmin: () => void;
  logoutAdmin: () => void;
};

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  loginAdmin: () => {},
  logoutAdmin: () => {}
});

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(!!localStorage.getItem('isAdminAuthenticated'));

  const loginAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdminAuthenticated', 'true');
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    console.log('LOGGING OUT');
    localStorage.removeItem('isAdminAuthenticated');
  };

  return <AdminContext.Provider value={{ isAdmin, loginAdmin, logoutAdmin }}>{children}</AdminContext.Provider>;
};

export const useAdmin = () => useContext(AdminContext);
