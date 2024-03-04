import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCustomToast } from "hooks/useCustomToast";
import { ICustomError } from "interfaces/customError.interface";
import { IDeck } from "interfaces/deck.interface";
import { useState } from "react";
import { api } from "services/Axios";

export const useUpdateNote = (id: string) => {
   const { showToast } = useCustomToast();
   const queryClient = useQueryClient();

   const [updatedTitle, setUpdatedTitle] = useState('');
   const [updatedContent, setUpdatedContent] = useState('');

   const { mutate } = useMutation<IDeck, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const { data } = await api.put<IDeck>(`/notes/${id}`, { title: updatedTitle, content: updatedContent });

         return data;
      },
      onSuccess: (data) => {
         setUpdatedTitle('');
         setUpdatedContent('');

         showToast({
            title: "Note updated",
            description: "Your note has been updated",
            status: "success",
         });

         queryClient.refetchQueries({ queryKey: ['note'] });
      },
      onError: (error) => {
         showToast({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            status: "error",
         });
      },
   });

   const handleUpdate = () => {
      if (!updatedTitle || !updatedContent) {
         showToast({
            title: "Something went wrong",
            description: 'All fields are required',
            status: "warning",
         });

         return;
      }

      mutate();
   };

   return {
      updatedTitle,
      setUpdatedTitle,
      updatedContent,
      setUpdatedContent,
      handleUpdate,
   };
}