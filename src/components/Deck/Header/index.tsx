import { MaterialIcons } from '@expo/vector-icons';
import { useUpdateDeck } from 'hooks/deck/useUpdateDeck';
import { Flex, IconButton, Input, Text, View } from 'native-base';
import { useState } from 'react';
import DeckHeaderSkeleton from './skeleton';

interface DeckHeaderProps {
   id: string;
   parentName: string;
   name: string;
   isLoading?: boolean;
}

export default function DeckHeader({
   id,
   name,
   parentName,
   isLoading,
}: DeckHeaderProps) {
   const { updatedName, setUpdatedName, handleUpdate } = useUpdateDeck(id);
   const [isEditing, setIsEditing] = useState(false);

   const handleEdit = () => {
      setIsEditing(true);
   };

   const handleInputBlur = () => {
      setIsEditing(false);
   };

   const handleUpdateCategory = () => {
      handleUpdate();
      setIsEditing(false);
   };

   return isLoading ? (
      <DeckHeaderSkeleton />
   ) : (
      <View margin={4}>
         <Flex
            direction="row"
            alignItems="center"
            justifyContent={'space-between'}
         >
            <Flex direction="row" alignItems="center" width={'50%'}>
               <Text
                  fontSize={25}
                  fontFamily={'heading'}
                  fontWeight="600"
                  fontStyle={'normal'}
               >
                  {parentName.length > 0 && `${parentName} `}
               </Text>
               {parentName.length > 0 && (
                  <MaterialIcons
                     name="arrow-forward-ios"
                     size={25}
                     style={{ marginLeft: 5, marginRight: 5 }}
                  />
               )}
               {isEditing ? (
                  <Input
                     width={'80%'}
                     variant={'underlined'}
                     fontSize={25}
                     value={updatedName}
                     onChangeText={(value) => setUpdatedName(value)}
                     onBlur={handleInputBlur}
                     autoFocus
                  />
               ) : (
                  <Text fontSize={25} fontWeight="bold">
                     {cutText(name, 14)}
                  </Text>
               )}
            </Flex>

            <Flex direction="row" alignItems="center">
               <IconButton
                  size={'md'}
                  variant={'solid'}
                  borderRadius={10}
                  onPress={handleEdit}
                  icon={<MaterialIcons name="edit" size={25} color={'white'} />}
                  style={{ display: isEditing ? 'none' : 'flex' }}
               />

               <IconButton
                  size={'md'}
                  variant={'solid'}
                  borderRadius={10}
                  colorScheme={'gray'}
                  marginRight={2}
                  onPress={() => setIsEditing(false)}
                  icon={<MaterialIcons name="undo" size={25} color={'white'} />}
                  style={{ display: isEditing ? 'flex' : 'none' }}
               />

               <IconButton
                  size={'md'}
                  variant={'solid'}
                  borderRadius={10}
                  colorScheme={'green'}
                  onPress={handleUpdateCategory}
                  icon={
                     <MaterialIcons name="check" size={25} color={'white'} />
                  }
                  style={{ display: isEditing ? 'flex' : 'none' }}
               />
            </Flex>
         </Flex>
      </View>
   );
}

function cutText(text: string, length: number) {
   return text.length > length ? text.slice(0, length) + '...' : text;
}
