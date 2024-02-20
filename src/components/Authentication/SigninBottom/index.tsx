import { HStack, Link, Text } from 'native-base';

export default function SigninBottom() {
   return (
      <HStack mt="6" justifyContent="center">
         <Text
            fontSize="md"
            color="black"
            _dark={{
               color: 'warmGray.200',
            }}
         >
            I'm a new user.{' '}
         </Text>
         <Link
            _text={{
               color: 'cyan.500',
               fontWeight: 'medium',
               fontSize: 'md',
            }}
         >
            Sign Up
         </Link>
      </HStack>
   );
}
