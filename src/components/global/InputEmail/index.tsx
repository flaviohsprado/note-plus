import { FormControl, Input, WarningOutlineIcon } from 'native-base';
import React, { useState } from 'react';

interface InputEmailProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: (text: string) => void;
   isRequired?: boolean;
}

export default function InputEmail({
   label,
   placeholder,
   value,
   setValue,
   isRequired = false,
}: InputEmailProps) {
   const [isValid, setIsValid] = useState(true);

   const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
   };

   const handleTextChange = (text: string) => {
      setValue(text);
      setIsValid(validateEmail(text));
   };

   return (
      <FormControl isRequired={isRequired} isInvalid={!isValid}>
         <FormControl.Label
            _text={{
               fontSize: 'md',
               color: 'coolGray.800',
            }}
         >
            {label}
         </FormControl.Label>
         <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChangeText={handleTextChange}
            onEndEditing={() => setValue(value)}
            variant={'rounded'}
            size={'sm'}
            fontSize={'md'}
            autoCapitalize="none"
         />
         {!isValid && (
            <FormControl.ErrorMessage
               leftIcon={<WarningOutlineIcon size="xs" />}
            >
               Invalid email address
            </FormControl.ErrorMessage>
         )}
      </FormControl>
   );
}
