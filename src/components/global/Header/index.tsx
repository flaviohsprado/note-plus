import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks/authentication/useAuth';
import { useGetUser } from 'hooks/user/useGetUser';
import {
   Avatar,
   Box,
   HStack,
   HamburgerIcon,
   IconButton,
   Menu,
   StatusBar,
   Text,
} from 'native-base';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import HeaderSkeleton from './skeleton';

export default function Header() {
   const [visible, setVisible] = useState(false);
   const navigation = useNavigation();
   const openMenu = () => setVisible(true);
   const closeMenu = () => setVisible(false);

   const { user, isLoading } = useGetUser();
   const { logout } = useAuth();

   const title = `Olá ${user?.username}!`;

   console.log('DeckHeader - Loading', isLoading);

   return isLoading ? (
      <HeaderSkeleton />
   ) : (
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
               <Menu
                  w="190"
                  backgroundColor={'blue.100'}
                  trigger={(triggerProps) => {
                     return (
                        <IconButton
                           icon={<HamburgerIcon />}
                           {...triggerProps}
                           style={styles.iconButton}
                        />
                     );
                  }}
                  isOpen={visible}
                  onOpen={openMenu}
                  onClose={closeMenu}
               >
                  <Menu.Item
                  //onPress={() => navigation.navigate('Profile')}
                  >
                     Profile
                  </Menu.Item>
                  <Menu.Item onPress={logout}>Logout</Menu.Item>
               </Menu>
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
      right: -4,
      top: -4,
      backgroundColor: 'transparent',
      opacity: 0,
   },
});
