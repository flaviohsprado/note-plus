import { useNavigation } from '@react-navigation/native';
import NoteContent from 'components/Note/Content';
import FABStackButtons from 'components/Note/FABStackButton';
import NoteHeader from 'components/Note/Header';
import { useCreateOrUpdateNote } from 'hooks/note/useCreateUpdateNote';
import { Box, Divider } from 'native-base';
import { useEffect } from 'react';
import { Keyboard } from 'react-native';

export default function NoteScreen({ route }: any) {
   const { id, categoryId, title, content } = route.params;
   const navigation = useNavigation();
   const {
      title: noteTitle,
      setTitle: setNoteTitle,
      content: noteContent,
      setContent: setNoteContent,
      handleSubmit: handleCreateOrUpdateNote,
   } = useCreateOrUpdateNote(id, categoryId);

   useEffect(() => {
      setNoteTitle(title);
      setNoteContent(content);
   }, [id, title, content]);

   const handleSubmit = () => {
      handleCreateOrUpdateNote();

      Keyboard.dismiss();
      navigation.goBack();
   };

   return (
      <Box>
         <NoteHeader title={noteTitle} setTitle={setNoteTitle} />
         <Divider />
         <NoteContent content={noteContent} setContent={setNoteContent} />
         <FABStackButtons text={noteContent} handleSubmit={handleSubmit} />
      </Box>
   );
}
