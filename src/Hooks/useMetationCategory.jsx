
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { clearCartApi } from "../Apis/cartApi";




export default function useMutationCategory(fn) {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: (args) => {
        // If args is an array, spread it into the function
        if (Array.isArray(args)) {
          return fn(...args);
        }
        // Otherwise call normally
        return fn(args);
      },
        onSuccess: () => {
            //هنا بقوله اي ابديت هعملو سواء create ,update ,delete عدل علطول فالفانكشن اللي انا مديلها ال key دا
            queryClient.invalidateQueries({ queryKey: ['category'] })
          //  if(fn===clearCartApi)
          //   queryClient.setQueriesData('cart',null)
        }
    })
}

// useMutation: A hook from React Query that allows you to perform a mutation operation (e.g., POST, PUT, DELETE requests) 
// and handle its lifecycle (loading, error, success states).
// useQueryClient: A hook from React Query that provides access to the query client,
//  which is used for managing query data and performing cache operations.
