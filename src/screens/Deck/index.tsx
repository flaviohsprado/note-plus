import CreateDeck from 'components/Deck/Create';
import DeckList from 'components/Deck/List';
import { useGetDecks } from 'hooks/deck/useGetDeck';
import { ReactNode, useState } from 'react';
import { FAB } from 'react-native-paper'; // Import Modal and Portal from react-native-paper

export default function DeckScreen(): ReactNode {
   const { decks, isLoading } = useGetDecks();
   const [state, setState] = useState({ open: false });
   const [visible, setVisible] = useState(false); // Add a new state variable for controlling the visibility of the modal

   const onStateChange = ({ open }: any) => setState({ open });

   const { open } = state;

   return (
      <>
         {(decks && <DeckList decks={decks} />) || null}
         <CreateDeck visible={visible} setVisible={setVisible} />
         <FAB.Group
            visible={!isLoading}
            open={open}
            icon={open ? 'minus' : 'plus'}
            style={{
               position: 'absolute',
               margin: 16,
               right: 0,
               bottom: 0,
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
