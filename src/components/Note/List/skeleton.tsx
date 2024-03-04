import { FlatList, Skeleton } from 'native-base';
import { SafeAreaView } from 'react-native';

export default function NoteListSkeleton() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <FlatList
            height={'75%'}
            numColumns={2}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onEndReachedThreshold={0.8}
            renderItem={({ item }) => <ItemList />}
         />
      </SafeAreaView>
   );
}

function ItemList() {
   return <Skeleton padding={2} width={'50%'} height={'64'} />;
}
