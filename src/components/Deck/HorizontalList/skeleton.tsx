import { Skeleton } from 'native-base';
import { FlatList } from 'react-native';

export default function HorizontalDeckListSkeleton() {
   return (
      <FlatList
         data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
         renderItem={() => <DeckSkeleton />}
         keyExtractor={(item) => item.toString()}
         horizontal
         showsHorizontalScrollIndicator={false}
      />
   );
}

function DeckSkeleton() {
   return <Skeleton padding={2} width={'40'} height={'24'} />;
}
