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
         marginTop={3}
         size={'md'}
         _text={{
            fontSize: 'md',
         }}
      >
         {label}
      </Button>
   );
}
