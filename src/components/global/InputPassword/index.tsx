import { MaterialIcons } from '@expo/vector-icons';
import { FormControl, Icon, Input, Pressable } from 'native-base';
import { useState } from 'react';

interface InputPasswordProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: (text: string) => void;
   isRequired?: boolean;
}

export default function InputPassword({
   label,
   placeholder,
   value,
   setValue,
   isRequired = false,
}: InputPasswordProps) {
   const [show, setShow] = useState(false);

   return (
      <FormControl isRequired={isRequired}>
         <FormControl.Label
            _text={{
               fontSize: 'md',
               color: 'coolGray.800',
            }}
         >
            {label}
         </FormControl.Label>
         <Input
            type={show ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => setValue(String(text))}
            variant={'rounded'}
            size={'sm'}
            fontSize={'md'}
            InputRightElement={
               <Pressable onPress={() => setShow(!show)}>
                  <Icon
                     as={
                        <MaterialIcons
                           name={show ? 'visibility' : 'visibility-off'}
                        />
                     }
                     size={'md'}
                     mr="2"
                     color="muted.400"
                  />
               </Pressable>
            }
         />
      </FormControl>
   );
}
