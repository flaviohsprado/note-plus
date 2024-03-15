import SignUpBottom from 'components/Authentication/SignUpBottom';
import ImagePick from 'components/global/ImagePicker';
import InputEmail from 'components/global/InputEmail';
import InputPassword from 'components/global/InputPassword';
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
         <VStack padding={4} space={4} mt="2">
            <ImagePick setValue={setFile} />
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
            <InputPassword
               label={'Password'}
               placeholder={'Type your password'}
               setValue={setPassword}
               value={password}
            />
            <InputPassword
               label={'Confirm'}
               placeholder={'confirm your password'}
               setValue={setConfirmPassword}
               value={confirmPassword}
            />
            <SubmitButton label={'Sign up'} onPress={handleSubmit} />
            <SignUpBottom />
         </VStack>
      </SafeContainer>
   );
}
