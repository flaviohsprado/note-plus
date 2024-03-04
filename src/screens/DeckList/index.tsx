import { MaterialIcons } from '@expo/vector-icons';
import CreateDeck from 'components/Deck/Create';
import VerticalDeckList from 'components/Deck/VerticalList';
import { useFindAllDecks } from 'hooks/deck/useFindAllDecks';
import { IDeck } from 'interfaces/deck.interface';
import { Fab, Icon } from 'native-base';
import { ReactNode, useState } from 'react';
import DeckListSkeleton from './skeleton';

export default function DeckListScreen(): ReactNode {
   const { decks, isLoading } = useFindAllDecks();
   const [state, setState] = useState({ open: false });
   const [visible, setVisible] = useState(false);
   const [inSelectionMode, setInSelectionMode] = useState(false);

   return isLoading ? (
      <DeckListSkeleton />
   ) : (
      <>
         {decks && (
            <VerticalDeckList
               decks={decks as IDeck[]}
               setInSelectionMode={setInSelectionMode}
            />
         )}
         <CreateDeck visible={visible} setVisible={setVisible} />
         <Fab
            renderInPortal={false}
            shadow={2}
            size="md"
            icon={
               <Icon color="white" as={MaterialIcons} name="add" size="xl" />
            }
            onPress={() => setVisible(true)}
            colorScheme={'emerald'}
            bottom={200}
         />
      </>
   );
}
