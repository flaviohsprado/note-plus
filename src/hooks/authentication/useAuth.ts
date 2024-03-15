import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useUserStore } from 'hooks/useUserStore';
import { ICustomError } from 'interfaces/customError.interface';
import {
   IUserLoginRequest,
   IUserLoginResponse,
} from 'interfaces/user.interface';
import { useToast } from 'native-base';
import { api } from 'services/Axios';
import StorageUtils from 'utils/storage.utils';

export const useAuth = () => {
   const { setUser } = useUserStore();
   const toaster = useToast();
   const queryClient = useQueryClient();

   const { mutate } = useMutation<
      IUserLoginResponse,
      AxiosError<ICustomError>,
      IUserLoginRequest
   >({
      mutationFn: async ({ email, password }) => {
         const { data } = await api.post<IUserLoginResponse>(
            '/public/auth/login',
            { email, password }
         );

         return data;
      },
      onSuccess: async (data) => {
         StorageUtils.set('accessToken', data.accessToken);

         queryClient.setQueryData(['user'], data);

         setUser({
            id: data.id,
            username: data.username,
            email: data.email,
            file: data.file,
         });
      },
      onError: (error) => {
         toaster.show({
            title: 'Something went wrong',
            description: String(error.response?.data?.message),
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
         queryClient.setQueryData(['user'], null);
         setUser(undefined);
      },
   };
};
