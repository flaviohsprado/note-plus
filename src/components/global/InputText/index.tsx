import { FormControl, Input } from 'native-base';

interface InputTextProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: (text: string) => void;
   isRequired?: boolean;
}

export default function InputText({
   label,
   placeholder,
   value,
   setValue,
   isRequired = false,
}: InputTextProps) {
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
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => setValue(text)}
            variant={'rounded'}
            size={'sm'}
            fontSize={'md'}
            //starts the input with a capital letter
            autoCapitalize="words"
         />
      </FormControl>
   );
}
