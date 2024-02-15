import InputPassword from 'components/InputPassword';
import InputText from 'components/InputText';
import SafeContainer from 'components/SafeContainer';
import { useAuth } from 'hooks/authentication/useAuth';
import { ReactNode, useState } from 'react';
import { useToast } from 'react-native-paper-toast';
import SubmitButton from '../../components/SubmitButton';

interface SigninProps {
   navigation: INavigation;
}

export default function SigninScreen({ navigation }: SigninProps): ReactNode {
   const { login } = useAuth();
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const toaster = useToast();

   const handleSubmit = () => {
      if (!email || !password) {
         toaster.show({
            type: 'warning',
            message: 'All fields are required',
            duration: 3000,
         });

         return;
      }

      login({ email, password });
   };

   return (
      <SafeContainer>
         <InputText
            label={'Email'}
            placeholder={'Type your email'}
            setValue={setEmail}
            value={email}
         />
         <InputPassword
            label={'Password'}
            placeholder={'Type your password'}
            setValue={setPassword}
            value={password}
         />
         <SubmitButton label="Sign In" onPress={handleSubmit} />
      </SafeContainer>
   );
}
