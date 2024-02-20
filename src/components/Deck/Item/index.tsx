import { MaterialIcons } from '@expo/vector-icons';
import { IDeck } from 'interfaces/deck.interface';
import { Box, Flex, Icon, Spacer, Text } from 'native-base';
import { Pressable } from 'react-native';

interface ItemListProps {
   deck: IDeck;
   onPress: () => void;
}

export default function ItemList({ deck, onPress }: ItemListProps) {
   const hasChildren = deck.children && deck.children.length > 0;
   const hasNotes = deck.notes && deck.notes.length > 0;
   const hasContent = hasChildren || hasNotes;

   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
         })}
      >
         <Flex grow={1} padding={2}>
            <Box
               borderRadius={5}
               flexDirection="row"
               alignItems="center"
               padding={5}
               backgroundColor="#F5F5F5"
               shadow={1}
            >
               <Icon as={<MaterialIcons name={'folder'} />} size={8} />
               <Text marginLeft={3} fontSize="lg">
                  {deck.name}
               </Text>
               <Spacer />
               {hasContent && (
                  <Icon
                     as={<MaterialIcons name={'arrow-forward-ios'} size={8} />}
                  />
               )}
            </Box>
         </Flex>
      </Pressable>
   );
}