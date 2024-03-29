import { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

interface SafeContainerProps {
   children: React.ReactNode;
}

export default function SafeContainer({
   children,
}: SafeContainerProps): ReactNode {
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView key={'scrollview'} keyboardShouldPersistTaps="handled">
            {children}
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      borderStartColor: 'blue',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
   },
   scrollView: {
      flex: 1,
   },
});
