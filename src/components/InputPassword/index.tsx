import { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { HelperText, TextInput } from 'react-native-paper';

interface InputPasswordProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: (text: string) => void;
}

export default function InputPassword({
   label,
   placeholder,
   value,
   setValue,
}: InputPasswordProps): ReactNode {
   const { control } = useForm({ mode: 'onChange' });

   return (
      <Controller
         control={control}
         render={({ field: { onChange, onBlur, value } }) => (
            <>
               <TextInput
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChangeText={(text) => setValue(text)}
                  secureTextEntry
                  mode="outlined"
                  theme={{ roundness: 50, mode: 'adaptive' }}
                  style={{ width: '100%' }}
                  right={
                     <TextInput.Icon
                        icon={value === '' ? 'eye-off' : 'eye'}
                        onPress={() => setValue(value === '' ? value : '')}
                     />
                  }
               />
               <HelperText type="error">
                  {value === '' ? 'This field is required' : ''}
               </HelperText>
            </>
         )}
         name={label}
         rules={{ required: true }}
      />
   );
}
