import { IDeck } from 'interfaces/deck.interface';
import { List } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import ItemList from '../Item';

interface ExampleProps {
   decks: IDeck[];
}

export default function DeckList({ decks }: ExampleProps) {
   return (
      <List borderTopWidth={0} borderBottomWidth={0} style={styles.container}>
         <FlatList
            data={decks}
            renderItem={({ item }) => (
               <ItemList key={item.id} deck={item} onPress={() => {}} />
            )}
            keyExtractor={(item) => item.id}
         />
      </List>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
