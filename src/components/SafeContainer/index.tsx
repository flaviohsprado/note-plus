import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeContainerProps {
   children: React.ReactNode;
}

export default function SafeContainer({
   children,
}: SafeContainerProps): ReactNode {
   return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center', // aligns children along the vertical axis
      alignItems: 'center', // aligns children along the horizontal axis
      padding: 20,
   },
});
