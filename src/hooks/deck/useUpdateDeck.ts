import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ICustomError } from "interfaces/customError.interface";
import { IDeck } from "interfaces/deck.interface";
import { useToast } from "native-base";
import { useState } from "react";
import { api } from "services/Axios";

export const useUpdateDeck = (id: string) => {
   const toaster = useToast();
   const queryClient = useQueryClient();

   const [updatedName, setUpdatedName] = useState('');

   const { mutate } = useMutation<IDeck, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const { data } = await api.put<IDeck>(`/categories/${id}`, { name: updatedName });

         return data;
      },
      onSuccess: (data) => {
         setUpdatedName('');

         toaster.show({
            title: "Deck updated",
            description: `Deck ${data.name} was updated successfully`,
            duration: 3000,
         });

         queryClient.refetchQueries({ queryKey: ['deck'] });
      },
      onError: (error) => {
         toaster.show({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            duration: 3000,
         });
      },
   });

   const handleUpdate = () => {
      if (!updatedName) {
         toaster.show({
            title: "Something went wrong",
            description: 'All fields are required',
            duration: 3000,
         });

         return;
      }

      mutate();
   };

   return {
      updatedName,
      setUpdatedName,
      handleUpdate,
   };
}