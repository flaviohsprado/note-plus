import { FlatList, Skeleton } from 'native-base';
import { SafeAreaView } from 'react-native';

export default function DeckListSkeleton() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <FlatList
            horizontal={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({ item }) => <ItemList />}
         />
      </SafeAreaView>
   );
}

function ItemList() {
   return <Skeleton padding={2} width={'full'} height={'24'} />;
}
