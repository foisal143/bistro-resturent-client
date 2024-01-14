import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';
const useCarts = () => {
  const { user } = useContext(AuthContext);
  const accessToken = localStorage.getItem('ac-token');

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await res.json();
      if (!data.error) {
        return data;
      }
      return [];
    },
  });

  return [carts, refetch];
};

export default useCarts;
