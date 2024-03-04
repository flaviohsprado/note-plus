import { useQueryClient } from '@tanstack/react-query';
import { useFindAllNotesFromCategory } from 'hooks/note/useFindAllNotesFromCategory';
import { FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import ItemList from '../Item';
import NoteListSkeleton from './skeleton';

interface NoteListProps {
   categoryId: string;
}

export default function NoteList({ categoryId }: NoteListProps) {
   const { notes, isLoading, refetch } =
      useFindAllNotesFromCategory(categoryId);
   const [refreshing, setRefreshing] = useState(false);
   const queryClient = useQueryClient();

   useEffect(() => {
      refetch();
   }, [categoryId, refetch]);

   const onRefresh = () => {
      setRefreshing(true);
      queryClient.refetchQueries({ queryKey: ['notes'] });
      setRefreshing(false);
   };

   return isLoading ? (
      <NoteListSkeleton />
   ) : (
      <SafeAreaView style={{ flex: 1 }}>
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
                  categoryId={categoryId}
                  title={item.title}
                  content={item.content}
                  isSelected={false}
                  onLongPress={() => {}}
                  onSelectMode={false}
               />
            )}
            keyExtractor={(item) => item.id}
         />
      </SafeAreaView>
   );
}
