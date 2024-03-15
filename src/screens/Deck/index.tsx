import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CreateDeck from 'components/Deck/Create';
import DeckHeader from 'components/Deck/Header';
import HorizontalCategoryList from 'components/Deck/HorizontalList';
import NoteList from 'components/Note/List';
import { useFindOneDeck } from 'hooks/deck/useFindOneDeck';
import { Box, Divider, Fab, Icon } from 'native-base';
import { useEffect, useState } from 'react';

export default function DeckScreen({ route }: any) {
   const { id, parentName } = route.params;
   const navigation = useNavigation();
   const { deck, isLoading, refetch } = useFindOneDeck(id);
   const [visible, setVisible] = useState(false);
   const [inSelectionMode, setInSelectionMode] = useState(false);

   const handleCreateNote = () => {
      navigation.navigate('NoteScreen', {
         categoryId: id,
         title: 'Nova anotação',
         content: '',
      });
   };

   useEffect(() => {
      refetch();
   }, [id]);

   return (
      <>
         <DeckHeader
            id={id}
            name={String(deck?.name)}
            parentName={parentName ? parentName : ''}
            isLoading={isLoading}
         />
         <Divider />
         <Box height={'12%'}>
            <HorizontalCategoryList
               decks={deck?.children || []}
               setInSelectionMode={setInSelectionMode}
               isLoading={isLoading}
               parentName={deck?.name}
            />
         </Box>
         <NoteList categoryId={deck?.id || ''} />
         <CreateDeck
            visible={visible}
            setVisible={setVisible}
            parentId={deck?.id}
         />
         <Fab
            renderInPortal={false}
            shadow={2}
            size="md"
            icon={
               <Icon
                  color="white"
                  as={MaterialIcons}
                  name="create-new-folder"
                  size="xl"
               />
            }
            onPress={() => setVisible(true)}
            colorScheme={'emerald'}
            bottom={200}
         />
         <Fab
            renderInPortal={false}
            shadow={2}
            size="md"
            icon={
               <Icon
                  color="white"
                  as={MaterialIcons}
                  name="note-add"
                  size="xl"
               />
            }
            onPress={handleCreateNote}
            colorScheme={'emerald'}
            bottom={120}
         />
      </>
   );
}
