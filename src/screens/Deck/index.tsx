import DeckHeader from 'components/Deck/Header';
import HorizontalDeckList from 'components/Deck/HorizontalList';
import NoteList from 'components/Note/List';
import { useFindOneDeck } from 'hooks/deck/useFindOneDeck';
import { Box, Divider } from 'native-base';
import { useState } from 'react';

interface DeckProps {
   navigation: INavigation;
   id: string;
}

export default function DeckScreen() {
   const { deck } = useFindOneDeck('212da430-0ca9-4b65-937b-8494e96fcd9c');

   const [inSelectionMode, setInSelectionMode] = useState(false);

   return (
      <>
         <DeckHeader id={'212da430-0ca9-4b65-937b-8494e96fcd9c'} />
         <Divider />
         <Box height={'12%'}>
            {deck?.children && (
               <HorizontalDeckList
                  decks={deck.children}
                  setInSelectionMode={setInSelectionMode}
               />
            )}
         </Box>
         <Box>{deck?.notes && <NoteList notes={deck.notes} />}</Box>
      </>
   );
}
