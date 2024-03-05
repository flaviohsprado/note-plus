import ItemList from 'components/Note/Item';
import NoteListSkeleton from 'components/Note/List/skeleton';
import { useFindAllNotes } from 'hooks/note/useFindAllNotes';
import { FlatList } from 'native-base';
import { useState } from 'react';

interface DashboardProps {
   navigation: NavigationProp;
}

export default function HomeScreen({ navigation }: DashboardProps) {
   const { notes, isLoading, refetch } = useFindAllNotes();
   const [refreshing, setRefreshing] = useState(false);
   //const queryClient = useQueryClient();

   const onRefresh = () => {
      setRefreshing(true);
      refetch();
      setRefreshing(false);
   };

   return isLoading ? (
      <NoteListSkeleton />
   ) : (
      <FlatList
         height={'75%'}
         refreshing={refreshing}
         onRefresh={onRefresh}
         numColumns={2}
         data={notes}
         onEndReachedThreshold={0.8}
         renderItem={({ item }) => (
            <ItemList
               id={item.id}
               title={item.title}
               content={item.content}
               isSelected={false}
               onLongPress={() => {}}
               onSelectMode={false}
            />
         )}
         keyExtractor={(item) => item.id}
      />
   );
}
