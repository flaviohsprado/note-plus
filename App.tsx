import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
   AuthenticatedUserStack,
   UnauthenticatedUserStack,
} from 'components/global/BottomTabNavigator';
import { useUserStore } from 'hooks/useUserStore';
import { useGetUser } from 'hooks/user/useGetUser';
import { NativeBaseProvider } from 'native-base';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <NativeBaseProvider isSSR={false}>
            <QueryClientProvider client={queryClient}>
               <PaperProvider theme={DefaultTheme}>
                  <TabNavigation />
               </PaperProvider>
            </QueryClientProvider>
         </NativeBaseProvider>
      </NavigationContainer>
   );
}

function TabNavigation() {
   const { user } = useUserStore();
   const { user: userQuery } = useGetUser();

   const userVerify = user || userQuery;

   return userVerify ? (
      <AuthenticatedUserStack />
   ) : (
      <UnauthenticatedUserStack />
   );
}
