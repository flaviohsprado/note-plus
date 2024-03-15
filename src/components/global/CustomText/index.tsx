import { FormControl, Input } from 'native-base';

interface ICustomTextProps {
   label: string;
   text: string;
}

export default function CustomText({ label, text }: ICustomTextProps) {
   return (
      <>
         <FormControl.Label
            _text={{
               fontSize: 'lg',
               color: 'coolGray.800',
            }}
         >
            {label}
         </FormControl.Label>
         <Input value={text} variant={'rounded'} size={'2xl'} isDisabled />
      </>
   );
}
