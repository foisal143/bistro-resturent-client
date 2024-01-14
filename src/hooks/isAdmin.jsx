import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';

const IsAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isadmin, isLoading } = useQuery({
    queryKey: ['isadmin'],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      const data = await res.json();
      return data.admin;
    },
  });
  return [isadmin, isLoading];
};

export default IsAdmin;
