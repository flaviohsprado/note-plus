import { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface SafeContainerProps {
   children: React.ReactNode;
}

export default function SafeContainer({
   children,
}: SafeContainerProps): ReactNode {
   return (
      <ScrollView key={'scrollview'} keyboardShouldPersistTaps="handled">
         {children}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
      borderStartColor: 'blue',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
   },
   scrollView: {
      flex: 1,
   },
});
