import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';
import useAxiosWithAuth from './axiosSciure';

const IsAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSciure = useAxiosWithAuth();
  const { data: isadmin, isLoading } = useQuery({
    queryKey: ['isadmin'],
    queryFn: async () => {
      const response = await axiosSciure.get(`/users/admin/${user?.email}`);

      return response.data.admin;
    },
  });
  return [isadmin, isLoading];
};

export default IsAdmin;
