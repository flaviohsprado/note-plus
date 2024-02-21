import { MaterialIcons } from '@expo/vector-icons';
import {
   BottomTabNavigationOptions,
   createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Header from 'components/global/Header';
import { View } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeckScreen from 'screens/Deck';
import DeckListScreen from 'screens/DeckList';
import HomeScreen from 'screens/Home';
import SignIn from 'screens/Signin';
import SignupScreen from 'screens/Signup';

const AuthStack = createBottomTabNavigator();
const UnauthStack = createBottomTabNavigator();

export const AuthenticatedUserStack = () => (
   <AuthStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
         tabBarShowLabel: false,
         tabBarActiveTintColor: '#01806f',
         tabBarInactiveTintColor: '#757373',
         tabBarStyle: {
            position: 'absolute',
            bottom: 40,
            width: '60%',
            height: 70,
            left: '20%',
            borderRadius: 50,
            elevation: 0,
            paddingBottom: 2,
            backgroundColor: 'black',
         },
      })}
   >
      <AuthStack.Screen
         name="Home"
         component={HomeScreen}
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color }) => {
               const backgroundColor = focused ? '#02cfb3' : 'black';
               const borderRadius = focused ? 50 : 30;

               return (
                  <View
                     style={{
                        backgroundColor,
                        borderRadius,
                        padding: 10,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <MaterialIcons name="home" color={color} size={30} />
                  </View>
               );
            },
            header: () => <Header />,
         }}
      />
      <AuthStack.Screen
         name="DeckList"
         component={DeckListScreen}
         options={{
            tabBarLabel: 'Decks',
            tabBarIcon: ({ focused, color }) => {
               const backgroundColor = focused ? '#02cfb3' : 'black';
               const borderRadius = focused ? 50 : 30;

               return (
                  <View
                     style={{
                        backgroundColor,
                        borderRadius,
                        padding: 10,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <MaterialIcons name="folder" color={color} size={30} />
                  </View>
               );
            },
            header: () => <Header />,
         }}
      />
      <AuthStack.Screen
         name="Deck"
         component={DeckScreen}
         options={{
            tabBarLabel: 'Deck',
            tabBarIcon: ({ focused, color }) => {
               const backgroundColor = focused ? '#02cfb3' : 'black';
               const borderRadius = focused ? 50 : 30;

               return (
                  <View
                     style={{
                        backgroundColor,
                        borderRadius,
                        padding: 10,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <MaterialIcons name="note" color={color} size={30} />
                  </View>
               );
            },
            header: () => <Header />,
         }}
      />
   </AuthStack.Navigator>
);

export const UnauthenticatedUserStack = () => (
   <UnauthStack.Navigator
      initialRouteName="Signin"
      screenOptions={({ route, navigation }) => ({
         headerShown: false,
         tabBarShowLabel: false,
         tabBarActiveTintColor: '#01806f',
         tabBarInactiveTintColor: '#757373',
         tabBarStyle: {
            position: 'absolute',
            bottom: 40,
            width: '50%',
            left: '25%',
            borderRadius: 30,
            elevation: 0,
            paddingBottom: 2,
         },
         tabBarIcon: ({ color, focused, size }) => {
            let iconName: 'home' | 'folder' | 'person' = 'home';
            if (route.name === 'Home') {
               iconName = 'home';
            } else if (route.name === 'Decks') {
               iconName = 'folder';
            } else {
               iconName = 'person';
            }
            return (
               <MaterialIcons name={iconName} size={size + 2} color={color} />
            );
         },
      })}
   >
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

const bottomTabNavigationOptions: BottomTabNavigationOptions = {};
