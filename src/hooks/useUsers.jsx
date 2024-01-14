import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
    },
  });
  return [users, refetch];
};

export default useUsers;
