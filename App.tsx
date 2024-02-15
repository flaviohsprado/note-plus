import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGetUser } from 'hooks/user/useGetUser';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ToastProvider } from 'react-native-paper-toast';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeckScreen from 'screens/Deck';
import HomeScreen from 'screens/Home';
import SigninScreen from 'screens/Signin';
import SignupScreen from 'screens/Signup';
import ProfileScreen from './src/screens/Profile';

const queryClient = new QueryClient();

const AuthStack = createMaterialBottomTabNavigator();
const UnauthStack = createMaterialBottomTabNavigator();

const AuthenticatedUserStack = () => (
   <AuthStack.Navigator>
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
         }}
      />
      <AuthStack.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons
                  name="account-circle"
                  color={color}
                  size={26}
               />
            ),
         }}
      />
   </AuthStack.Navigator>
);

const UnauthenticatedUserStack = () => (
   <UnauthStack.Navigator>
      <UnauthStack.Screen name="Signup" component={SignupScreen} />
      <UnauthStack.Screen name="Signin" component={SigninScreen} />
   </UnauthStack.Navigator>
);

export default function App() {
   return (
      <NavigationContainer>
         <QueryClientProvider client={queryClient}>
            <PaperProvider theme={DefaultTheme}>
               <ToastProvider>
                  <TabNavigation />
               </ToastProvider>
            </PaperProvider>
         </QueryClientProvider>
      </NavigationContainer>
   );
}

function TabNavigation() {
   const { user } = useGetUser();

   return user ? <AuthenticatedUserStack /> : <UnauthenticatedUserStack />;
}
