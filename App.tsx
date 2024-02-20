import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from 'components/Header';
import { useUserStore } from 'hooks/useUserStore';
import { useGetUser } from 'hooks/user/useGetUser';
import { NativeBaseProvider } from 'native-base';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeckScreen from 'screens/Deck';
import HomeScreen from 'screens/Home';
import ProfileScreen from 'screens/Profile';
import SignIn from 'screens/Signin';
import SignupScreen from 'screens/Signup';

const queryClient = new QueryClient();

const AuthStack = createBottomTabNavigator();
const UnauthStack = createBottomTabNavigator();

const AuthenticatedUserStack = () => (
   <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen
         name="Home"
         component={HomeScreen}
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons
                  name="home-circle"
                  color={color}
                  size={26}
               />
            ),
            header: () => <Header />,
         }}
      />
      <AuthStack.Screen
         name="Decks"
         component={DeckScreen}
         options={{
            tabBarLabel: 'Decks',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons name="folder" color={color} size={26} />
            ),
            header: () => <Header />,
         }}
      />
      <AuthStack.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            header: () => <Header />,
         }}
      />
   </AuthStack.Navigator>
);

const UnauthenticatedUserStack = () => (
   <UnauthStack.Navigator initialRouteName="Signin">
      <UnauthStack.Screen
         name="Signup"
         component={SignupScreen}
         options={{
            tabBarLabel: 'Sign Up',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons
                  name="account-plus"
                  color={color}
                  size={26}
               />
            ),
         }}
      />
      <UnauthStack.Screen
         name="Signin"
         component={SignIn}
         options={{
            tabBarLabel: 'Sign In',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons
                  name="door-open"
                  color={color}
                  size={26}
               />
            ),
         }}
      />
   </UnauthStack.Navigator>
);

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
