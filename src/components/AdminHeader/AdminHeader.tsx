import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import './AdminHeader.css';
import React from 'react';

const AdminHeader: React.FC = () => {
  const { isAdmin, logoutAdmin } = useAdmin();
  const navigate = useNavigate();
  function handleLogout() {
    logoutAdmin();
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/');
  }
  return (
    <div className={`${isAdmin ? 'admin-header' : ''}`}>
      {isAdmin && (
        <div className="logout-button" onClick={handleLogout}>
          Logout
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
