import { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { HelperText, TextInput } from 'react-native-paper';

interface InputTextProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: (text: string) => void;
}

export default function InputText({
   label,
   placeholder,
   value,
   setValue,
}: InputTextProps): ReactNode {
   const { control } = useForm({ mode: 'onChange' });

   return (
      <Controller
         control={control}
         rules={{
            required: { value: true, message: 'This Field Is Required' },
         }}
         name={label}
         render={({ field: { onChange, onBlur, value } }) => (
            <>
               <TextInput
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChangeText={(text) => setValue(text)}
                  mode="outlined"
                  theme={{ roundness: 50, mode: 'adaptive' }}
                  style={{ width: '100%' }}
               />
               <HelperText type="error">
                  {value === '' ? 'This field is required' : ''}
               </HelperText>
            </>
         )}
      />
   );
}
