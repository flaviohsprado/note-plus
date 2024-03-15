import { useNavigation } from '@react-navigation/native';
import { HStack, Link, Text } from 'native-base';

export default function SignUpBottom() {
   const navigation = useNavigation();

   return (
      <HStack mt="2" justifyContent="center">
         <Text
            fontSize="md"
            color="black"
            _dark={{
               color: 'warmGray.200',
            }}
         >
            Já possui uma conta?{' '}
         </Text>
         <Link
            _text={{
               color: 'cyan.500',
               fontWeight: 'medium',
               fontSize: 'md',
            }}
            onPress={() => navigation.navigate('SignIn')}
         >
            Logar
         </Link>
      </HStack>
   );
}
