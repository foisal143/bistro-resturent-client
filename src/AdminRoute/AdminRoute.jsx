import { useContext } from 'react';
import IsAdmin from '../hooks/isAdmin';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const [isadmin, isLoading] = IsAdmin();
  const { user, loader } = useContext(AuthContext);

  if (loader || isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isadmin) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
