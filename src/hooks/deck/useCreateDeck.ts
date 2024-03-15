import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCustomToast } from "hooks/useCustomToast";
import { ICustomError } from "interfaces/customError.interface";
import { IDeck } from "interfaces/deck.interface";
import { useState } from "react";
import { api } from "services/Axios";

export const useCreateDeck = () => {
   const { showToast } = useCustomToast();
   const queryClient = useQueryClient();

   const [parentId, setParentId] = useState('');
   const [name, setName] = useState('');

   const { mutate } = useMutation<IDeck, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const { data } = await api.post<IDeck>('/categories', {
            parentId,
            name
         });

         return data;
      },
      onSuccess: (data) => {
         setName('');

         showToast({
            title: "Categoria criada!",
            description: `Categoria ${data.name} criada com sucesso!`,
            status: "success",
         });

         queryClient.refetchQueries({ queryKey: ['decks'] });
         queryClient.refetchQueries({ queryKey: ['deck'] });
      },
      onError: (error) => {
         showToast({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            status: "error",
         });
      },
   });

   const handleSubmit = () => {
      if (!name) {
         showToast({
            title: "Algo deu errado",
            description: 'O campo nome é obrigatório',
            status: "warning",
         });

         return;
      }

      mutate();
   };

   return {
      name,
      setName,
      setParentId,
      handleSubmit,
   };
}