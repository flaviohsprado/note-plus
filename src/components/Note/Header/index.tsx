import { Box } from 'native-base';
import { TextInput } from 'react-native';

interface INoteHeaderProps {
   title: string;
   setTitle: (title: string) => void;
}

export default function NoteHeader({ title, setTitle }: INoteHeaderProps) {
   return (
      <Box height={'20'} backgroundColor={'yellow.100'}>
         <TextInput
            spellCheck
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder={'Your title here...'}
            style={{
               width: '100%',
               height: '100%',
               padding: 20,
               fontSize: 30,
               fontWeight: 'bold',
               textAlignVertical: 'top',
            }}
         />
      </Box>
   );
}
