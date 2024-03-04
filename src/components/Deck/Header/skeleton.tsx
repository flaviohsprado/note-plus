import { Flex, Skeleton, View } from 'native-base';

export default function DeckHeaderSkeleton() {
   return (
      <View margin={4}>
         <Flex
            direction="row"
            alignItems="center"
            justifyContent={'space-between'}
         >
            <Flex direction="row" alignItems="center" width={'50%'}>
               <Skeleton.Text lines={2} />
            </Flex>
            <Flex direction="row" alignItems="center">
               <Skeleton rounded={'xs'} width={'10'} startColor="blue.300" />
            </Flex>
         </Flex>
      </View>
   );
}
