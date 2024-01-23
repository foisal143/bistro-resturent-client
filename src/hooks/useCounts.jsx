import { useQuery } from '@tanstack/react-query';
import useAxiosWithAuth from './axiosSciure';
import { useContext } from 'react';
import { AuthContext } from '../AuthPorvaider/AuthProvaider';

const useCounts = () => {
  const { loader } = useContext(AuthContext);
  const axiosSciure = useAxiosWithAuth();
  const { data: allCounts = {} } = useQuery({
    queryKey: ['allcounts'],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSciure.get('/counts');
      return res.data;
    },
  });

  return [allCounts];
};

export default useCounts;
