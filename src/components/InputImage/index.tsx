import { useCallback, useState } from 'react';
import {
   Button,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
} from 'react-native';
import {
   DocumentPickerResponse,
   pick,
   types,
} from 'react-native-document-picker';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default function InputImage() {
   const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[]>(
      [],
   );

   const handleDocumentSelection = useCallback(async () => {
      try {
         const response = await pick({
            presentationStyle: 'fullScreen',
            type: [types.images],
            allowMultiSelection: false,
         });

         console.log(response);

         setFileResponse(response);
      } catch (err) {
         console.warn(err);
      }
   }, []);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle={'dark-content'} />
         {fileResponse.map((file, index) => (
            <Text
               key={index.toString()}
               numberOfLines={1}
               ellipsizeMode={'middle'}
            >
               {file?.uri}
            </Text>
         ))}
         <Button title="Select 📑" onPress={handleDocumentSelection} />
      </SafeAreaView>
   );
}
