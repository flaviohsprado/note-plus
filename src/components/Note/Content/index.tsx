import { Box } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';

interface INoteContentProps {
   content: string;
   setContent: (content: string) => void;
}

export default function NoteContent({
   content,
   setContent,
}: INoteContentProps) {
   return (
      <Box height={'100%'} backgroundColor={'yellow.100'}>
         <LinedInput
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholder={'Type here...'}
         />
      </Box>
   );
}

interface LinedInputProps {
   value: string;
   onChangeText: (text: string) => void;
   placeholder: string;
}

function LinedInput({ value, onChangeText, placeholder }: LinedInputProps) {
   return (
      <>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         >
            <TextInput
               multiline
               spellCheck
               value={value}
               onChangeText={onChangeText}
               placeholder={placeholder}
               style={{
                  width: '100%',
                  height: '100%',
                  padding: 10,
                  fontSize: 20,
                  textAlignVertical: 'top',
               }}
               scrollEnabled={true}
            />
         </KeyboardAvoidingView>
      </>
   );
}
