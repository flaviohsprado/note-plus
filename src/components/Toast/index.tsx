import { useState } from 'react';
import { Snackbar, Title } from 'react-native-paper';

interface IToastProps {
   title: string;
   description: string;
}

export default function Toast({ title, description }: IToastProps) {
   const [visible, setVisible] = useState(true);

   const onDismissSnackBar = () => setVisible(false);

   console.log('Toast');

   return (
      <Snackbar
         visible={visible}
         onDismiss={onDismissSnackBar}
         action={{
            label: 'Close',
            onPress: () => {
               // Do something
            },
         }}
      >
         <Title>{title}</Title>
         {description}
      </Snackbar>
   );
}
