import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Header from 'components/global/Header';
import { View } from 'native-base';
import DeckScreen from 'screens/Deck';
import DeckListScreen from 'screens/DeckList';
import HomeScreen from 'screens/Home';
import NoteScreen from 'screens/Note';
import ProfileScreen from 'screens/Profile';
import SignInScreen from 'screens/Signin';
import SignupScreen from 'screens/Signup';

const AuthStack = createBottomTabNavigator();
const UnauthStack = createBottomTabNavigator();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
   return (
      <Tab.Navigator
         screenOptions={({ route, navigation }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#01806f',
            tabBarInactiveTintColor: '#757373',
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
               position: 'absolute',
               bottom: 30,
               width: '40%',
               height: 70,
               left: '30%',
               borderRadius: 50,
               elevation: 0,
               paddingBottom: 2,
               backgroundColor: 'black',
            },
         })}
      >
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ focused, color }) => {
                  const backgroundColor = focused ? '#02cfb3' : 'black';

                  return (
                     <View
                        style={{
                           backgroundColor,
                           borderRadius: 50,
                           padding: 10,
                           width: 50,
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <MaterialIcons name="home" color={color} size={30} />
                     </View>
                  );
               },
            }}
         />
         <Tab.Screen
            name="DeckList"
            component={DeckListScreen}
            options={{
               tabBarLabel: 'Decks',
               tabBarIcon: ({ focused, color }) => {
                  const backgroundColor = focused ? '#02cfb3' : 'black';

                  return (
                     <View
                        style={{
                           backgroundColor,
                           borderRadius: 50,
                           padding: 10,
                           width: 50,
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <MaterialIcons name="folder" color={color} size={30} />
                     </View>
                  );
               },
            }}
         />
      </Tab.Navigator>
   );
}

export const AuthenticatedUserStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
               header: () => <Header />,
            }}
         />
         <Stack.Screen
            name="DeckScreen"
            component={DeckScreen}
            initialParams={{ id: '', parentName: '' }}
            options={{
               headerStyle: {
                  backgroundColor: 'black',
               },
               headerTintColor: 'white',
               headerTitle: 'Categoria',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}
         />
         <Stack.Screen
            name="NoteScreen"
            component={NoteScreen}
            initialParams={{ title: 'New note', content: '' }}
            options={{
               headerStyle: {
                  backgroundColor: 'black',
               },
               headerTintColor: 'white',
               headerTitle: 'Anotação',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}
         />
         <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
               headerStyle: {
                  backgroundColor: 'black',
               },
               headerTintColor: 'white',
               headerTitle: 'Profile',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}
         />
      </Stack.Navigator>
   );
};

export const UnauthenticatedUserStack = () => (
   <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={({ route, navigation }) => ({
         headerShown: false,
         tabBarShowLabel: false,
         tabBarActiveTintColor: '#01806f',
         tabBarInactiveTintColor: '#757373',
         tabBarHideOnKeyboard: true,
         tabBarStyle: {
            position: 'absolute',
            bottom: 30,
            width: '40%',
            height: 70,
            left: '30%',
            borderRadius: 50,
            elevation: 0,
            paddingBottom: 2,
            backgroundColor: 'black',
         },
      })}
   >
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
   </Stack.Navigator>
);
