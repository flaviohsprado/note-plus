import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ICustomError } from 'interfaces/customError.interface';
import {
   IUserLoginRequest,
   IUserLoginResponse,
} from 'interfaces/user.interface';
import { useToast } from 'react-native-paper-toast';
import { api } from 'services/Axios';
import StorageUtils from 'utils/storage.utils';
import { useUserStore } from '../useUserStore';

export const useAuth = () => {
   const navigation = useNavigation();
   const toaster = useToast();
   const { setUser } = useUserStore();
   const queryClient = useQueryClient();

   const { mutate } = useMutation<
      IUserLoginResponse,
      AxiosError<ICustomError>,
      IUserLoginRequest
   >({
      mutationFn: async ({ email, password }) => {
         console.log('url', api.defaults.baseURL);

         const { data } = await api.post<IUserLoginResponse>(
            '/public/auth/login',
            { email, password },
         );

         return data;
      },
      onSuccess: async (data) => {
         StorageUtils.set('accessToken', data.accessToken);

         queryClient.setQueryData(['user'], data);
      },
      onError: (error) => {
         toaster.show({
            message: String(error.response?.data?.message),
            type: 'error',
            duration: 3000,
         });

         return '';
      },
   });

   return {
      login: mutate,
      logout: () => {
         StorageUtils.remove('accessToken');
         queryClient.clear();
         //@ts-ignore
         navigation.navigate('Signin');
      },
   };
};
