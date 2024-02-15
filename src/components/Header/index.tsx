import { useAuth } from 'hooks/authentication/useAuth';
import { useGetUser } from 'hooks/user/useGetUser';
import { Appbar } from 'react-native-paper';

export default function Header() {
   const { user } = useGetUser();
   const { logout } = useAuth();

   const title = `Olá ${user?.username}!`;

   return (
      <Appbar.Header>
         <Appbar.Content title={title} subtitle="Subtitle" />
         <Appbar.Action icon="magnify" onPress={() => {}} />
         <Appbar.Action icon="dots-vertical" onPress={logout} />
      </Appbar.Header>
   );
}
