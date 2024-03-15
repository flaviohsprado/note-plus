import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCustomToast } from "hooks/useCustomToast";
import { ICustomError } from "interfaces/customError.interface";
import { IImagePickerAsset } from "interfaces/file.interface";
import { IUser } from "interfaces/user.interface";
import { useState } from "react";
import { api } from "services/Axios";

export const useUpdateAvatar = (id: string) => {
   const { showToast } = useCustomToast();
   const queryClient = useQueryClient();

   const [file, setFile] = useState<IImagePickerAsset>();

   const { mutate } = useMutation<IUser, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const formData = new FormData();

         formData.append('file', {
            uri: file?.uri,
            name: file?.fileName || `image.jpg`,
            type: file?.mimeType,
         });

         const { data } = await api.put<IUser>(`/users/${id}/avatar`, formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         return data;
      },
      onSuccess: (data) => {
         setFile(undefined);

         showToast({
            title: "Avatar updated",
            description: `Your avatar was updated successfully`,
            status: 'success',
         });

         queryClient.refetchQueries({ queryKey: ['user'] });
      },
      onError: (error) => {
         showToast({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            status: 'error',
         });
      },
   });

   const handleSubmit = () => mutate();

   return {
      file,
      setFile,
      handleSubmit,
   };
}