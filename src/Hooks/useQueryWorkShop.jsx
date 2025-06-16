import { useQuery } from "@tanstack/react-query";


export default function useQueryWorkShop(key, fn) {

  return useQuery({
    queryKey: [key],
    queryFn: fn,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    select: (data) => {
      console.log('Fetched data:', data);
      return data;
    },
  });



}