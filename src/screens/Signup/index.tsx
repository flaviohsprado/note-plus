import DocumentPicker from 'components/global/DocumentPicker';
import InputEmail from 'components/global/InputEmail';
import InputPasswordTest from 'components/global/InputPassword';
import InputText from 'components/global/InputText';
import SafeContainer from 'components/global/SafeContainer';
import SubmitButton from 'components/global/SubmitButton';
import { useSignup } from 'hooks/user/useSignup';
import { VStack } from 'native-base';
import { ReactNode } from 'react';

interface SignupProps {
   navigation: INavigation;
}

export default function SignupScreen({ navigation }: SignupProps): ReactNode {
   const {
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      setFile,
      handleSubmit,
   } = useSignup();

   return (
      <SafeContainer>
         <VStack padding={5} space={4} mt="5">
            <DocumentPicker setValue={setFile} />
            <InputText
               label={'Username'}
               placeholder={'Type your username'}
               setValue={setUsername}
               value={username}
            />
            <InputEmail
               label={'Email'}
               placeholder={'Type your email'}
               setValue={setEmail}
               value={email}
            />
            <InputPasswordTest
               label={'Password'}
               placeholder={'Type your password'}
               setValue={setPassword}
               value={password}
            />
            <InputPasswordTest
               label={'Confirm'}
               placeholder={'confirm your password'}
               setValue={setConfirmPassword}
               value={confirmPassword}
            />
            <SubmitButton label={'Sign up'} onPress={handleSubmit} />
         </VStack>
      </SafeContainer>
   );
}
