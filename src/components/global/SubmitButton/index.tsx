import { Button } from 'native-base';

interface SubmitButtonProps {
   label: string;
   onPress: any;
}

export default function SubmitButton({ label, onPress }: SubmitButtonProps) {
   return (
      <Button
         colorScheme="cyan"
         onPress={onPress}
         borderRadius={50}
         width={'100%'}
         marginTop={5}
         size={'lg'}
         _text={{
            fontSize: 'lg',
         }}
      >
         {label}
      </Button>
   );
}
