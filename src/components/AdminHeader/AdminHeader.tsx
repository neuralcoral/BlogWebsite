import { useAdmin } from '../../contexts/AdminContext';
import './AdminHeader.css';

const AdminHeader: React.FC = () => {
  const { isAdmin, logoutAdmin } = useAdmin();
  function handleLogout() {
    logoutAdmin();
    localStorage.removeItem('isAdminAuthenticated');
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
