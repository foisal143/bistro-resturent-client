import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
  const { data: menus = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/menus');
      const data = await res.json();
      return data;
    },
  });
  return [menus, refetch];
};

export default useMenu;
