import SafeContainer from 'components/SafeContainer';
import { Text } from 'react-native';
import DefaultButton from '../../components/DefaultButton';

interface DashboardProps {
   navigation: INavigation;
}

export default function HomeScreen({ navigation }: DashboardProps) {
   return (
      <SafeContainer>
         <Text>Home</Text>
         <DefaultButton
            label="Go to Profile"
            props={{
               onPress: () => navigation.navigation.navigate('Profile'),
            }}
         />
      </SafeContainer>
   );
}
