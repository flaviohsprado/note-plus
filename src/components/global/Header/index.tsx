import { useNavigation } from '@react-navigation/native';
import { useGetUser } from 'hooks/user/useGetUser';
import {
   Avatar,
   Box,
   HStack,
   HamburgerIcon,
   IconButton,
   StatusBar,
   Text,
} from 'native-base';
import { StyleSheet } from 'react-native';

export default function Header() {
   const navigation = useNavigation();
   const { user } = useGetUser();

   const title = `Olá ${user?.username}!`;

   return (
      <>
         <StatusBar backgroundColor="black" barStyle="light-content" />
         <Box safeAreaTop bg="black" />
         <HStack
            bg="black"
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
         >
            <Text padding={2} color="white" fontSize="25" fontWeight="bold">
               {title}
            </Text>
            <HStack padding={2}>
               <Avatar
                  bg="cyan.500"
                  source={{
                     uri: user?.file?.url,
                  }}
                  size="md"
               >
                  {user?.username[0] || 'U'}
               </Avatar>
               <IconButton
                  icon={<HamburgerIcon />}
                  style={styles.iconButton}
                  onPress={() => navigation.navigate('ProfileScreen')}
                  color="white"
                  width={'12'}
                  height={'12'}
                  borderRadius={50}
               />
            </HStack>
         </HStack>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      position: 'relative',
      width: 50,
      height: 50,
   },
   iconButton: {
      position: 'absolute',
      bottom: 0,
      right: 8,
      top: 8,
      opacity: 0,
   },
});
