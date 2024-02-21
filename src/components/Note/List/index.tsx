import { useNavigation } from '@react-navigation/native';
import { INote } from 'interfaces/note.interface';
import { FlatList } from 'native-base';
import ItemList from '../Item';

interface NoteListProps {
   notes: INote[];
}

export default function NoteList({ notes }: NoteListProps) {
   const navigation = useNavigation();

   const onPress = (id: string) => {
      // @ts-ignore
      navigation.navigate('NoteScreen', { id });
   };

   return (
      <FlatList
         numColumns={2}
         data={notes}
         renderItem={({ item }) => (
            <ItemList
               title={item.title}
               content={item.content}
               isSelected={false}
               onLongPress={() => {}}
               onPress={() => onPress}
               onSelectMode={false}
            />
         )}
         keyExtractor={(item) => item.id}
      />
   );
}
