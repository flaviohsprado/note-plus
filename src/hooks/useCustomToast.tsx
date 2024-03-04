import ToastAlert from 'components/global/Toaster';
import { useToast } from 'native-base';

interface IUseCustomToast {
   description: string;
   status: 'info' | 'warning' | 'success' | 'error';
   title: string;
}

export const useCustomToast = () => {
   const toast = useToast();

   const showToast = ({ description, status, title }: IUseCustomToast) =>
      toast.show({
         render: () => (
            <ToastAlert
               description={description}
               isClosable={true}
               status={status}
               title={title}
            />
         ),
         duration: 3000,
      });

   return { showToast };
};
