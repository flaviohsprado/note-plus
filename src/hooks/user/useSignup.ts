import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ICustomError } from 'interfaces/customError.interface';
import { IDocumentPickerFile } from 'interfaces/file.interface';
import { IUserSignupResponse } from 'interfaces/user.interface';
import { useToast } from 'native-base';
import { useState } from 'react';
import { api } from 'services/Axios';
import StorageUtils from 'utils/storage.utils';

export const useSignup = () => {
   const toaster = useToast();
   const queryClient = useQueryClient();

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [email, setEmail] = useState('');
   const [file, setFile] = useState<IDocumentPickerFile>();

   const { mutate } = useMutation<IUserSignupResponse, AxiosError<ICustomError>>({
      mutationFn: async () => {
         const formData = new FormData();

         if (file)
            formData.append('file', {
               uri: file?.uri,
               name: file?.name,
               type: file?.mimeType,
            });

         formData.append('username', username);
         formData.append('email', email);
         formData.append('password', password);

         const { data } = await api.post<IUserSignupResponse>('/users', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         return data;
      },
      onSuccess: (data) => {
         StorageUtils.set('accessToken', data.accessToken);

         queryClient.setQueryData(['user'], data);
      },
      onError: (error) => {
         toaster.show({
            title: "Something went wrong",
            description: String(error.response?.data?.message),
            duration: 3000,
         });
      },
   });

   const handleSubmit = () => {
      if (!username || !email || !password || !confirmPassword) {
         toaster.show({
            title: "Something went wrong",
            description: 'All fields are required',
            duration: 3000,
         });

         return;
      }

      if (password !== confirmPassword) {
         toaster.show({
            title: "Something went wrong",
            description: 'Password and confirm password do not match',
            duration: 3000,
         });

         return;
      }

      mutate();
   };

   return {
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      setFile,
      handleSubmit,
   };
};
