import { Box, Heading } from 'native-base';

export default function SignInHeader() {
   return (
      <Box padding={5}>
         <Heading
            size="2xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
               color: 'warmGray.50',
            }}
         >
            Bem vindo
         </Heading>
         <Heading
            mt="1"
            _dark={{
               color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="md"
         >
            Faça login para continuar
         </Heading>
      </Box>
   );
}
