import { MaterialIcons } from '@expo/vector-icons';
import { DocumentPickerAsset, getDocumentAsync } from 'expo-document-picker';
import { IDocumentPickerFile } from 'interfaces/file.interface';
import { Avatar, Icon, IconButton } from 'native-base';
import { useCallback, useState } from 'react';
import { StatusBar, View } from 'react-native';

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
         <Avatar
            key={fileResponse?.uri}
            size={150}
            source={{
               uri: fileResponse?.uri,
            }}
         />
         <IconButton
            style={{
               backgroundColor: 'grey',
               borderRadius: 5,
               top: -30,
               right: -50,
            }}
            icon={
               <Icon
                  as={<MaterialIcons name={'add-a-photo'} />}
                  size={'md'}
                  color={'white'}
               />
            }
            onPress={handleDocumentSelection}
         />
      </View>
   );
}
