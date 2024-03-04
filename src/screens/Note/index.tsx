import NoteContent from 'components/Note/Content';
import FABStackButtons from 'components/Note/FABStackButton';
import NoteHeader from 'components/Note/Header';
import { useCreateNote } from 'hooks/note/useCreateNote';
import { useUpdateNote } from 'hooks/note/useUpdateNote';
import { Box, Divider } from 'native-base';
import { useEffect, useState } from 'react';

export default function NoteScreen({ route }: any) {
   const { id, categoryId, title, content } = route.params;
   const [noteTitle, setNoteTitle] = useState(title);
   const [noteContent, setNoteContent] = useState(content);

   const { setUpdatedTitle, setUpdatedContent, handleUpdate } =
      useUpdateNote(id);
   const {
      setTitle,
      setContent,
      handleSubmit: handleCreate,
   } = useCreateNote(categoryId);

   useEffect(() => {
      setNoteTitle(title);
      setNoteContent(content);
   }, [id, title, content]);

   const handleSubmit = () => {
      console.log('id', id);
      console.log('categoryId', categoryId);
      console.log('noteTitle', noteTitle);
      console.log('noteContent', noteContent);
      if (id) {
         setUpdatedContent(noteContent);
         setUpdatedTitle(noteTitle);
         handleUpdate();
      } else {
         setTitle(noteTitle);
         setContent(noteContent);
         handleCreate();
      }
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
