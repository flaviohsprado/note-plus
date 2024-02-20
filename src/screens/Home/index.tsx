import SafeContainer from 'components/SafeContainer';
import { Text } from 'react-native';

interface DashboardProps {
   navigation: INavigation;
}

export default function HomeScreen({ navigation }: DashboardProps) {
   return (
      <SafeContainer>
         <Text>Home</Text>
      </SafeContainer>
   );
}
