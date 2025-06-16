import { useQuery } from "@tanstack/react-query";

export default function useQueryCommunity(key,fn) {
  
    return useQuery({queryKey:[key],queryFn:fn,select:(data)=>data})
}