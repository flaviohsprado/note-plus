import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useUserStore } from 'hooks/useUserStore';
import { ICustomError } from 'interfaces/customError.interface';
import { IUserSignupResponse } from 'interfaces/user.interface';
import { useState } from 'react';
import { useToast } from 'react-native-paper-toast';
import { api } from 'services/Axios';
import StorageUtils from 'utils/storage.utils';

export const useSignup = () => {
   const navigation = useNavigation();
   const toaster = useToast();
   const { setUser } = useUserStore();

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [email, setEmail] = useState('');

   const { mutate } = useMutation<IUserSignupResponse, AxiosError<ICustomError>>({
      mutationFn: async () => {
         console.log('url', api.defaults.baseURL);

         const { data } = await api.post<IUserSignupResponse>('/users', {
            email,
            username,
            password,
         });

         return data;
      },
      onSuccess: (data) => {
         StorageUtils.set('accessToken', data.accessToken);

         setUser({
            id: data.id,
            name: data.username,
            email: data.email,
            avatar: data.file.url,
         });

         //@ts-ignore
         navigation.navigate('Home');
      },
      onError: (error) => {
         console.log('error', JSON.stringify(error));
         toaster.show({
            type: 'error',
            message:
               'Error on signup - ' + String(JSON.stringify(error)),
            duration: 3000,
         });
      },
   });

   const handleSubmit = () => {
      if (!username || !email || !password || !confirmPassword) {
         toaster.show({
            type: 'warning',
            message: 'All fields are required',
            duration: 3000,
         });

         return;
      }

      if (password !== confirmPassword) {
         toaster.show({
            type: 'warning',
            message: 'Password and confirm password are different',
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
      handleSubmit,
   };
};
