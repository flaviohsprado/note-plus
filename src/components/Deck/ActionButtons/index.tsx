import { MaterialIcons } from '@expo/vector-icons';
import { Icon, IconButton, View } from 'native-base';
import { useRef, useState } from 'react';

interface DeleteButtonProps {
   handleDelete: () => void;
   handleCancel: () => void;
   show: boolean;
}

export default function ActionButtons({
   handleDelete,
   handleCancel,
   show,
}: DeleteButtonProps) {
   const [isOpen, setIsOpen] = useState(false);
   const onClose = () => setIsOpen(false);
   const cancelRef = useRef(null);

   const handleConfirmDelete = () => {
      setIsOpen(true);

      console.log('cancelRef', cancelRef);

      if (cancelRef.current) handleDelete();
   };

   return (
      <View
         style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            display: show ? 'flex' : 'none',
         }}
      >
         <IconButton
            style={{
               backgroundColor: 'grey',
               borderRadius: 16,
               marginBottom: 15,
               marginRight: 15,
            }}
            icon={
               <Icon
                  as={<MaterialIcons name={'arrow-back'} />}
                  size={9}
                  color={'white'}
               />
            }
            onPress={handleCancel}
         />
         <IconButton
            style={{
               backgroundColor: 'red',
               borderRadius: 16,
               marginBottom: 50,
               marginRight: 15,
            }}
            icon={
               <Icon
                  as={<MaterialIcons name={'delete'} />}
                  size={9}
                  color={'white'}
               />
            }
            onPress={handleDelete}
         />
      </View>
   );
}
