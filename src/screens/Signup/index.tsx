import InputPassword from 'components/InputPassword';
import InputText from 'components/InputText';
import SafeContainer from 'components/SafeContainer';
import { useSignup } from 'hooks/user/useSignup';
import { ReactNode } from 'react';
import SubmitButton from '../../components/SubmitButton';

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
      handleSubmit,
   } = useSignup();

   return (
      <SafeContainer>
         <InputText
            label={'Username'}
            placeholder={'Type your username'}
            setValue={setUsername}
            value={username}
         />
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
         <InputPassword
            label={'Confirm'}
            placeholder={'confirm your password'}
            setValue={setConfirmPassword}
            value={confirmPassword}
         />
         <SubmitButton label={'Sign up'} onPress={handleSubmit} />
      </SafeContainer>
   );
}
