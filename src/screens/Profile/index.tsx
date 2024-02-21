import SafeContainer from 'components/global/SafeContainer';
import { useGetUser } from 'hooks/user/useGetUser';
import { useSignup } from 'hooks/user/useSignup';
import { View } from 'react-native';

export default function ProfileScreen() {
   const { user, isLoading } = useGetUser();
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

   console.log('user', user);

   return (
      <SafeContainer>
         <View></View>
      </SafeContainer>
   );
}
