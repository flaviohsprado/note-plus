import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Fab, Icon } from 'native-base';
import { Keyboard } from 'react-native';

interface IFABStackButtonsProps {
   text: string;
   handleSubmit: () => void;
}

export default function FABStackButtons({
   text,
   handleSubmit,
}: IFABStackButtonsProps) {
   const navigation = useNavigation();

   const handleTextChange = () => {
      handleSubmit();
   };

   const handleEraseText = () => {
      text = '';
      Keyboard.dismiss();
   };

   return (
      <>
         <Fab
            renderInPortal={false}
            shadow={2}
            size="md"
            icon={
               <Icon color="white" as={MaterialIcons} name="check" size="6" />
            }
            onPress={handleTextChange}
            colorScheme={'emerald'}
            bottom={200}
         />
         <Fab
            renderInPortal={false}
            shadow={2}
            size="sm"
            icon={
               <Icon
                  color="white"
                  as={MaterialIcons}
                  name="arrow-back"
                  size="6"
               />
            }
            onPress={navigation.goBack}
            colorScheme={'gray'}
            bottom={140}
         />
      </>
   );
}
