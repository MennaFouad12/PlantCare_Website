import { useMutation, useQueryClient } from "@tanstack/react-query";





export default function useMutationCommunity(fn) {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: (args) => {
        
        if (Array.isArray(args)) {
          return fn(...args);
        }
        
        return fn(args);
      },
        onSuccess: () => {
           
          queryClient.invalidateQueries({ queryKey: ['community'] });
          
        }
    })
}