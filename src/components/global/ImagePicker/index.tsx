import { MaterialIcons } from '@expo/vector-icons';
import {
   ImagePickerAsset,
   MediaTypeOptions,
   launchImageLibraryAsync,
} from 'expo-image-picker';
import { IImagePickerAsset } from 'interfaces/file.interface';
import { Avatar, Icon, IconButton, StatusBar, View } from 'native-base';
import { useState } from 'react';

interface ImagePickerProps {
   setValue: (fileResponse: IImagePickerAsset) => void;
   uri?: string;
   enableEdit?: boolean;
}

export default function ImagePick({
   setValue,
   uri,
   enableEdit = true,
}: ImagePickerProps) {
   const [fileResponse, setFileResponse] = useState<ImagePickerAsset>();

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await launchImageLibraryAsync({
         mediaTypes: MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      if (!result.canceled) {
         setFileResponse(result.assets[0]);
         setValue(result.assets[0]);
      }
   };

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
               uri: fileResponse?.uri || uri,
            }}
         />
         <IconButton
            style={{
               backgroundColor: 'grey',
               borderRadius: 50,
               position: 'absolute',
               bottom: 0,
               right: 60,
               display: enableEdit ? 'flex' : 'none',
            }}
            icon={
               <Icon
                  as={<MaterialIcons name={'add-a-photo'} />}
                  size={'lg'}
                  color={'white'}
               />
            }
            onPress={pickImage}
         />
      </View>
   );
}
