import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks/authentication/useAuth';
import { useGetUser } from 'hooks/user/useGetUser';
import { Avatar } from 'native-base';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, IconButton, Menu } from 'react-native-paper';

export default function Header() {
   const [visible, setVisible] = useState(false);
   const navigation = useNavigation();
   const openMenu = () => setVisible(true);
   const closeMenu = () => setVisible(false);

   const { user } = useGetUser();
   const { logout } = useAuth();

   const title = `Olá ${user?.username}!`;

   return (
      <Appbar.Header
         style={{
            justifyContent: 'space-around',
            backgroundColor: 'lightblue',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
         }}
      >
         <Appbar.Content title={title} />
         <View style={styles.container}>
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
               icon="camera"
               size={30}
               style={styles.iconButton}
               onPress={openMenu}
            />
            <Menu
               visible={visible}
               onDismiss={closeMenu}
               anchor={
                  <Button
                     style={{
                        //hide button
                        backgroundColor: 'transparent',
                        opacity: 0,
                        zIndex: -99,
                     }}
                  >
                     Show menu
                  </Button>
               }
            >
               <Menu.Item
                  leadingIcon={'account-circle'}
                  //@ts-ignore
                  onPress={() => navigation.navigate('Profile')}
                  title="Profile"
               />
               <Menu.Item
                  leadingIcon={'logout'}
                  onPress={logout}
                  title="Logout"
               />
            </Menu>
         </View>
      </Appbar.Header>
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
