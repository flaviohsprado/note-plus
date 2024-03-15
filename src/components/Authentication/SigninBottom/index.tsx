import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
   HStack,
   Icon,
   IconButton,
   Link,
   Text,
   VStack,
   View,
} from 'native-base';

export default function SigninBottom() {
   const navigation = useNavigation();

   return (
      <View mt="5">
         <HStack justifyContent="center">
            <Text
               fontSize="md"
               color="black"
               _dark={{
                  color: 'warmGray.200',
               }}
            >
               É um novo usuário?{' '}
            </Text>
            <Link
               _text={{
                  color: 'cyan.500',
                  fontWeight: 'medium',
                  fontSize: 'md',
               }}
               onPress={() => navigation.navigate('SignUp')}
            >
               Cadastre-se!
            </Link>
         </HStack>
         <VStack marginTop={2} justifyContent="center">
            <View
               style={{
                  borderBottomColor: 'black',
                  width: '80%',
                  alignSelf: 'center',
               }}
            >
               <Text
                  fontSize="md"
                  color="black"
                  _dark={{
                     color: 'warmGray.200',
                  }}
               >
                  Ou tente de formas diferentes{' '}
               </Text>
            </View>
            <HStack justifyContent="center" marginTop={3} space={2}>
               <IconButton
                  style={{
                     backgroundColor: 'white',
                     borderRadius: 50,
                     width: 50,
                     height: 50,
                  }}
                  icon={
                     <Icon
                        as={<MaterialCommunityIcons name={'google'} />}
                        size={9}
                        color={'red.400'}
                     />
                  }
                  onPress={() => {}}
               />
               <IconButton
                  style={{
                     backgroundColor: 'white',
                     borderRadius: 50,
                     width: 50,
                     height: 50,
                  }}
                  icon={
                     <Icon
                        as={<MaterialCommunityIcons name={'facebook'} />}
                        size={9}
                        color={'blue.400'}
                     />
                  }
                  onPress={() => {}}
               />
            </HStack>
         </VStack>
      </View>
   );
}
