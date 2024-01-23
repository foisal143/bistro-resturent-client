import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';
import useAxiosWithAuth from './axiosSciure';
const useCarts = () => {
  const { user, loader } = useContext(AuthContext);

  const axiosSciure = useAxiosWithAuth();
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ['carts'],
    enabled: !loader,
    queryFn: async () => {
      const response = await axiosSciure.get(`/carts?email=${user?.email}`);
      const data = response.data;
      if (!data.error) {
        return data;
      }
      return [];
    },
  });

  return [carts, refetch];
};

export default useCarts;
