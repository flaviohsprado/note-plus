import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

interface SubmitButtonProps {
   label: string;
   onPress: any;
}

export default function SubmitButton({ label, onPress }: SubmitButtonProps) {
   const { handleSubmit, formState } = useForm({});

   return (
      <Button
         mode={'outlined'}
         onPress={handleSubmit(onPress)}
         disabled={!formState.isValid}
         style={{
            padding: 10,
            borderRadius: 50,
            width: '100%',
            marginTop: 5,
         }}
      >
         {label}
      </Button>
   );
}
