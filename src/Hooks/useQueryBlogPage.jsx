import { useQuery } from "@tanstack/react-query";


export default function useQueryBlogPage(key,fn) {
  
    return useQuery({queryKey:[key],queryFn:fn,select: (data) => {
      console.log('Fetched data:', data);
      return data;
    }})

}