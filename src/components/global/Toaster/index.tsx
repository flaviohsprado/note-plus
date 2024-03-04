import {
   Alert,
   CloseIcon,
   HStack,
   IconButton,
   Text,
   VStack,
} from 'native-base';

type Status = 'info' | 'warning' | 'success' | 'error';

interface ToastAlertProps {
   status: Status;
   title: string;
   description: string;
   isClosable: boolean;
}

export default function ToastAlert({
   status,
   title,
   description,
   isClosable,
}: ToastAlertProps) {
   return (
      <Alert
         maxWidth="100%"
         alignSelf="center"
         flexDirection="row"
         status={status ? status : 'info'}
         variant={'left-accent'}
      >
         <VStack space={1} flexShrink={1} w="100%">
            <HStack
               flexShrink={1}
               alignItems="center"
               justifyContent="space-between"
            >
               <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text
                     fontSize="md"
                     fontWeight="medium"
                     flexShrink={1}
                     color={'darkText'}
                  >
                     {title}
                  </Text>
               </HStack>
               {isClosable ? (
                  <IconButton
                     variant="unstyled"
                     icon={<CloseIcon size="3" />}
                     _icon={{
                        color: 'darkText',
                     }}
                  />
               ) : null}
            </HStack>
            <Text px="6" color={'darkText'}>
               {description}
            </Text>
         </VStack>
      </Alert>
   );
}
