import SigninBottom from 'components/Authentication/SigninBottom';
import SignInHeader from 'components/Authentication/SigninHeader';
import InputPasswordTest from 'components/global/InputPassword';
import InputText from 'components/global/InputText';
import SafeContainer from 'components/global/SafeContainer';
import SubmitButton from 'components/global/SubmitButton';
import { useAuth } from 'hooks/authentication/useAuth';
import { VStack } from 'native-base';
import { useState } from 'react';

interface SignInProps {
   navigation: INavigation;
}

export default function SignIn({ navigation }: SignInProps) {
   const { login } = useAuth();
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const handleSignUp = () => {
      login({ email, password });
   };

   return (
      <SafeContainer>
         <SignInHeader />
         <VStack padding={5} space={4} mt="5">
            <InputText
               label={'Email'}
               placeholder={'Type your email'}
               value={email}
               setValue={setEmail}
               isRequired={true}
            />
            <InputPasswordTest
               label={'password'}
               placeholder={'Type your password'}
               value={password}
               setValue={setPassword}
               isRequired={true}
            />
            <SubmitButton label={'Sign in'} onPress={handleSignUp} />
            <SigninBottom />
         </VStack>
      </SafeContainer>
   );
}
