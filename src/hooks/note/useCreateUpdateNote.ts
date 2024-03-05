import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCustomToast } from "hooks/useCustomToast";
import { ICustomError } from "interfaces/customError.interface";
import { IDeck } from "interfaces/deck.interface";
import { useState } from "react";
import { api } from "services/Axios";

export const useCreateOrUpdateNote = (id?: String, categoryId?: string) => {
   const { showToast } = useCustomToast();
   const queryClient = useQueryClient();

   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const { mutate: mutateUpdate } = useMutation<IDeck, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const { data } = await api.put<IDeck>(`/notes/${id}`, { title, content });

         return data;
      },
      onSuccess: (data) => {
         setTitle('');
         setContent('');

         showToast({
            title: "Note updated",
            description: "Your note has been updated",
            status: "success",
         });

         queryClient.refetchQueries({ queryKey: ['notes'] });
      },
      onError: (error) => {
         console.error(error.response?.data?.message);
         showToast({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            status: "error",
         });
      },
   });

   const { mutate: mutateCreate } = useMutation<IDeck, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const { data } = await api.post<IDeck>('/notes', { categoryId, title, content });

         return data;
      },
      onSuccess: (data) => {
         setTitle('');
         setContent('');

         showToast({
            title: "Note created",
            description: "Your note has been created",
            status: "success",
         });

         queryClient.refetchQueries({ queryKey: ['notes'] });
      },
      onError: (error) => {
         console.error(error.response?.data?.message);
         showToast({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            status: "error",
         });
      },
   });

   const handleSubmit = () => {
      if (!title || !content) {
         showToast({
            title: "Something went wrong",
            description: 'All fields are required',
            status: "warning",
         });

         return;
      }

      id ? mutateUpdate() : mutateCreate();
   };

   return {
      title,
      setTitle,
      content,
      setContent,
      handleSubmit,
   };
}