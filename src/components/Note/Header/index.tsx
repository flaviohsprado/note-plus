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
            placeholder={'Seu título aqui...'}
            style={{
               width: '100%',
               height: '100%',
               paddingBottom: 20,
               paddingTop: 20,
               paddingRight: 20,
               paddingLeft: 10,
               fontSize: 30,
               fontWeight: 'bold',
               textAlignVertical: 'top',
            }}
         />
      </Box>
   );
}
