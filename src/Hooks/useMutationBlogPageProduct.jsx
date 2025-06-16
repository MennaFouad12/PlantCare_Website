import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationBlogPageProduct({ mutationFn, onSuccess, onError }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['BlogPageProduct'] });
      if (onSuccess) onSuccess(data);
    },
    onError: (error) => {
      if (onError) onError(error);
    }
  });
}