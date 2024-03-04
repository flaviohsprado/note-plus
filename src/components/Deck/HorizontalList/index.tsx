import { useNavigation } from '@react-navigation/native';
import { useDeleteDeck } from 'hooks/deck/useDeleteDeck';
import { IDeck } from 'interfaces/deck.interface';
import { Box, Text } from 'native-base';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ActionButtons from '../ActionButtons';
import ItemList from '../Item';
import HorizontalDeckListSkeleton from './skeleton';

interface HorizontalDeckList {
   decks: IDeck[];
   setInSelectionMode: (value: boolean) => void;
   isLoading?: boolean;
   parentName?: string;
}

export default function HorizontalCategoryList({
   decks,
   setInSelectionMode,
   isLoading,
   parentName,
}: HorizontalDeckList) {
   const [isSelectionMode, setIsSelectionMode] = useState(false);
   const [selectedItems, setSelectedItems] = useState<string[]>([]);
   const { handleDelete } = useDeleteDeck(selectedItems);
   const navigation = useNavigation();

   const handleCancelAction = () => {
      setIsSelectionMode(false);
      setInSelectionMode(false);
      setSelectedItems([]);
   };

   const handleDeleteAction = () => {
      handleDelete();
      setIsSelectionMode(false);
      setInSelectionMode(false);
      setSelectedItems([]);
   };

   const handleLongPress = (id: string) => {
      setIsSelectionMode(true);
      setInSelectionMode(true);
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
   };

   const handlePress = (id: string) => {
      if (isSelectionMode) {
         setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(id)) {
               return prevSelectedItems.filter((itemId) => itemId !== id);
            } else {
               return [...prevSelectedItems, id];
            }
         });
      } else {
         navigation.navigate('DeckScreen', {
            id,
            parentName: parentName || '',
         });
      }
   };

   return isLoading ? (
      <HorizontalDeckListSkeleton />
   ) : decks.length === 0 ? (
      <Box flex={1} justifyContent="center" alignItems="center">
         <Text>No decks found, create one for this category</Text>
      </Box>
   ) : (
      <>
         <FlatList
            horizontal={true}
            data={decks}
            renderItem={({ item }) => (
               <ItemList
                  key={item.id}
                  deck={item}
                  isSelected={selectedItems.includes(item.id)}
                  onPress={() => handlePress(item.id)}
                  onLongPress={() => handleLongPress(item.id)}
                  onSelectMode={isSelectionMode}
               />
            )}
            keyExtractor={(item) => item.id}
         />
         <ActionButtons
            handleDelete={handleDeleteAction}
            handleCancel={handleCancelAction}
            show={isSelectionMode}
         />
      </>
   );
}
