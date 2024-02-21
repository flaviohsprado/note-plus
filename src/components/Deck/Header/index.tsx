import { MaterialIcons } from '@expo/vector-icons';
import { useUpdateDeck } from 'hooks/deck/useUpdateDeck';
import { Flex, IconButton, Input, Text, View } from 'native-base';
import { useState } from 'react';

interface DeckHeaderProps {
   id: string;
}

export default function DeckHeader({ id }: DeckHeaderProps) {
   const { name, setName, handleUpdate } = useUpdateDeck(id);
   const [isEditing, setIsEditing] = useState(false);

   const handleEdit = () => {
      setIsEditing(true);
   };

   const handleInputBlur = () => {
      setIsEditing(false);
   };

   const parent = {
      id: '212da430-0ca9-4b65-937b-8494e96fcd9c',
      name: 'Deck',
   };

   return (
      <View margin={4}>
         <Flex
            direction="row"
            alignItems="center"
            justifyContent={'space-between'}
         >
            <Flex direction="row" alignItems="center" width={'50%'}>
               <Text fontSize={25} fontWeight="bold">
                  {parent && `${parent.name} `}
               </Text>
               {parent && (
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
                     value={name}
                     onChangeText={(value) => setName(value)}
                     onBlur={handleInputBlur}
                     autoFocus
                  />
               ) : (
                  <Text fontSize={25} fontWeight="bold">
                     Deck
                  </Text>
               )}
            </Flex>

            <Flex direction="row" alignItems="center">
               <IconButton
                  size={'sm'}
                  variant={'solid'}
                  margin={2}
                  onPress={handleEdit}
                  icon={<MaterialIcons name="edit" size={25} color={'white'} />}
                  style={{ display: isEditing ? 'none' : 'flex' }}
               />

               <IconButton
                  size={'sm'}
                  variant={'solid'}
                  colorScheme={'gray'}
                  margin={2}
                  onPress={() => setIsEditing(false)}
                  icon={<MaterialIcons name="undo" size={25} color={'white'} />}
                  style={{ display: isEditing ? 'flex' : 'none' }}
               />

               <IconButton
                  size={'sm'}
                  variant={'solid'}
                  colorScheme={'green'}
                  margin={2}
                  onPress={handleUpdate}
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
