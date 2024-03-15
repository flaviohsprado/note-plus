import { Button } from 'native-base';
import { ColorSchemeType } from 'native-base/lib/typescript/components/types';

interface DefaultButtonProps {
   label: string;
   onPress: () => void;
   color: ColorSchemeType;
}

export default function DefaultButton({
   label,
   onPress,
   color,
}: DefaultButtonProps) {
   return (
      <Button
         colorScheme={color}
         onPress={onPress}
         borderRadius={50}
         width={'100%'}
         marginTop={3}
         size={'md'}
         _text={{
            fontSize: 'md',
         }}
      >
         {label}
      </Button>
   );
}
