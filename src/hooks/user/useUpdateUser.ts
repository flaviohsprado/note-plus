import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCustomToast } from "hooks/useCustomToast";
import { ICustomError } from "interfaces/customError.interface";
import { IUser } from "interfaces/user.interface";
import { useState } from "react";
import { api } from "services/Axios";

export const useUpdateUser = (id: string) => {
   const { showToast } = useCustomToast();
   const queryClient = useQueryClient();

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const { mutate } = useMutation<IUser, AxiosError<ICustomError>>({
      mutationFn: async () => {
         let payload: Partial<{ username: string; email: string; password: string; }> = {};

         if (typeof username === 'string' && username.length) payload.username = username;
         if (typeof email === 'string' && email.length) payload.email = email;
         if (typeof password === 'string' && password.length) payload.password = password;

         if (Object.keys(payload).length === 0) return null as any;

         try {
            const { data } = await api.put<IUser>(`/users/${id}`, payload);
            return data;
         } catch (error) {
            console.error('Error updating user:', error);
            throw error;
         }
      },
      onSuccess: (data) => {
         setUsername('');
         setEmail('');
         setPassword('');
         setConfirmPassword('');

         showToast({
            title: "User updated",
            description: `Your information was updated successfully`,
            status: 'success',
         });

         queryClient.setQueryData(['user'], data);
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

   const handleSubmit = () => {
      if (password !== confirmPassword) {
         showToast({
            title: "Something went wrong",
            description: 'Password and confirm password do not match',
            status: 'warning',
         });

         return;
      }

      mutate();
   }

   return {
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      handleSubmit,
   };
}