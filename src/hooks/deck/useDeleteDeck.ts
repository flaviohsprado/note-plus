import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ICustomError } from "interfaces/customError.interface";
import { IDeck } from "interfaces/deck.interface";
import { useToast } from "native-base";
import { api } from "services/Axios";

export const useDeleteDeck = (ids: string[]) => {
   const toaster = useToast();
   const queryClient = useQueryClient();

   const { mutate } = useMutation<void, AxiosError<ICustomError>>({
      mutationFn: async () => {
         console.log('Ids', ids);
         await Promise.all(
            ids.map(async (id) => api.delete<IDeck>('/categories', { params: { id } }))
         );
      },
      onSuccess: (data) => {
         toaster.show({
            title: "Decks deleted",
            description: `Decks ${ids.join(', ')} were deleted successfully`,
            duration: 3000,
         });

         queryClient.refetchQueries({ queryKey: ['decks'] });
      },
      onError: (error) => {
         toaster.show({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            duration: 3000,
         });
      },
   });

   return {
      handleDelete: mutate
   };
}