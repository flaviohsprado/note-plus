import { useNavigation } from '@react-navigation/native';
import { useDeleteDeck } from 'hooks/deck/useDeleteDeck';
import { IDeck } from 'interfaces/deck.interface';
import { List } from 'native-base';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ActionButtons from '../ActionButtons';
import ItemList from '../Item';

interface ExampleProps {
   decks: IDeck[];
   setInSelectionMode: (value: boolean) => void;
   navigation?: NavigationProp;
}

export default function VerticalDeckList({
   decks,
   setInSelectionMode,
}: ExampleProps) {
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
         //navigation?.navigate('DeckScreen', { id });
      }
   };

   return (
      <List borderTopWidth={0} borderBottomWidth={0} style={{ flex: 1 }}>
         <FlatList
            horizontal={false}
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
      </List>
   );
}
