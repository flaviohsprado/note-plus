import { Box, Pressable, Text } from 'native-base';

interface ItemListProps {
   title: string;
   content: string;
   isSelected: boolean;
   onPress: () => void;
   onLongPress: () => void;
   onSelectMode: boolean;
}

export default function ItemList({
   title,
   content,
   isSelected,
   onPress,
   onLongPress,
   onSelectMode,
}: ItemListProps) {
   return (
      <Pressable
         onPress={onPress}
         onLongPress={onLongPress}
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
            <Text mt={2}>{content}</Text>
         </Box>
      </Pressable>
   );
}
