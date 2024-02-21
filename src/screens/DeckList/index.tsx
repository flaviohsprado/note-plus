import CreateDeck from 'components/Deck/Create';
import VerticalDeckList from 'components/Deck/VerticalList';
import { useFindAllDecks } from 'hooks/deck/useFindAllDecks';
import { ReactNode, useState } from 'react';
import { FAB } from 'react-native-paper';

interface DeckListProps {
   navigation: INavigation;
}

export default function DeckListScreen({
   navigation,
}: DeckListProps): ReactNode {
   const { decks, isLoading } = useFindAllDecks();
   const [state, setState] = useState({ open: false });
   const [visible, setVisible] = useState(false);
   const [inSelectionMode, setInSelectionMode] = useState(false);

   const onStateChange = ({ open }: any) => setState({ open });

   const { open } = state;

   return (
      <>
         {decks && (
            <VerticalDeckList
               decks={decks}
               setInSelectionMode={setInSelectionMode}
            />
         )}
         <CreateDeck visible={visible} setVisible={setVisible} />
         <FAB.Group
            visible={!isLoading}
            open={open}
            icon={open ? 'minus' : 'plus'}
            style={{
               position: 'absolute',
               margin: 16,
               right: 0,
               bottom: 60,
               display: inSelectionMode ? 'none' : 'flex',
            }}
            actions={[
               {
                  icon: 'note-plus',
                  label: 'Create Notes',
                  onPress: () => console.log('Create Notes pressed'),
               },
               {
                  icon: 'folder-plus',
                  label: 'Create Deck',
                  onPress: () => setVisible(true),
               },
            ]}
            onStateChange={onStateChange}
         />
      </>
   );
}
