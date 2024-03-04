import { useNavigation } from '@react-navigation/native';
import { Box, Pressable, Text } from 'native-base';

interface ItemListProps {
   id: string;
   categoryId?: string;
   title: string;
   content: string;
   isSelected: boolean;
   onLongPress: () => void;
   onSelectMode: boolean;
}

export default function ItemList({
   id,
   categoryId,
   title,
   content,
   isSelected,
   onLongPress,
   onSelectMode,
}: ItemListProps) {
   const navigation = useNavigation();

   const onPressAction = () => {
      navigation.navigate('NoteScreen', {
         id,
         categoryId,
         title,
         content,
      });
   };

   const onLongPressAction = () => {};

   return (
      <Pressable
         onPress={onPressAction}
         onLongPress={onLongPressAction}
         style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
         })}
      >
         <Box
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="lg"
            padding={4}
            margin={2}
            backgroundColor="yellow.100"
            shadow={1}
            height={'2xs'}
            width={'48'} // 20% of the viewport width
         >
            <Text fontSize="lg" fontWeight="bold">
               {title}
            </Text>
            <Text mt={2}>{cutText(content, 170)}</Text>
         </Box>
      </Pressable>
   );
}

function cutText(text: string, length: number) {
   return text.length > length ? text.substring(0, length) + '...' : text;
}
