import { DocumentPickerAsset, getDocumentAsync } from 'expo-document-picker';
import { IDocumentPickerFile } from 'interfaces/file.interface';
import { useCallback, useState } from 'react';
import { Button, StatusBar, View } from 'react-native';
import { Avatar } from 'react-native-paper';

interface DocumentPickerProps {
   setValue: (fileResponse: IDocumentPickerFile) => void;
}

export default function DocumentPicker({ setValue }: DocumentPickerProps) {
   const [fileResponse, setFileResponse] = useState<DocumentPickerAsset>();

   const handleDocumentSelection = useCallback(async () => {
      try {
         const response = await getDocumentAsync({
            type: 'image/*',
            multiple: false,
         });

         if (response.assets) {
            setFileResponse(response.assets[0]);
            setValue(response.assets[0]);
         }
      } catch (err) {
         console.warn(err);
      }
   }, []);

   return (
      <View
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <StatusBar barStyle={'dark-content'} />
         <Avatar.Image
            key={fileResponse?.uri}
            size={150}
            source={{
               uri: fileResponse?.uri,
            }}
         />
         <Button title="Select 📑" onPress={handleDocumentSelection} />
      </View>
   );
}
