import { Box, HStack, Skeleton, StatusBar } from 'native-base';

export default function HeaderSkeleton() {
   return (
      <>
         <StatusBar backgroundColor="black" barStyle="light-content" />
         <Box safeAreaTop bg="black" />
         <HStack
            bg="black"
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
         >
            <Skeleton.Text px="4" />
            <HStack padding={2}>
               <Skeleton size="5" rounded="full" />
            </HStack>
         </HStack>
      </>
   );
}
