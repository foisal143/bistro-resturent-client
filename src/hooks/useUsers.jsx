import { useQuery } from '@tanstack/react-query';
import useAxiosWithAuth from './axiosSciure';

const useUsers = () => {
  const axiossciure = useAxiosWithAuth();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    // queryFn: async () => {
    //   const res = await fetch('http://localhost:5000/users');
    //   const data = await res.json();
    //   return data;
    // },
    queryFn: async () => {
      const res = await axiossciure.get('/users');
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
