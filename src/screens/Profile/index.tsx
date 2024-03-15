import CustomText from 'components/global/CustomText';
import DefaultButton from 'components/global/DefaultButton';
import ImagePick from 'components/global/ImagePicker';
import InputEmail from 'components/global/InputEmail';
import InputText from 'components/global/InputText';
import SafeContainer from 'components/global/SafeContainer';
import SubmitButton from 'components/global/SubmitButton';
import { useAuth } from 'hooks/authentication/useAuth';
import { useGetUser } from 'hooks/user/useGetUser';
import { useUpdateAvatar } from 'hooks/user/useUpdateAvatar';
import { useUpdateUser } from 'hooks/user/useUpdateUser';
import { Box, Flex, VStack } from 'native-base';
import React, { useState } from 'react';

export default function ProfileScreen() {
   const [isEditing, setIsEditing] = useState(false);
   const { user } = useGetUser();

   const { logout } = useAuth();
   const {
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      handleSubmit,
   } = useUpdateUser(String(user?.id));
   const {
      file,
      setFile,
      handleSubmit: handleSubmitAvatar,
   } = useUpdateAvatar(String(user?.id));

   const handleUpdate = () => {
      if (file) handleSubmitAvatar();
      handleSubmit();
      setIsEditing(!isEditing);
   };

   return (
      <SafeContainer>
         <VStack padding={5} space={4} mt="5">
            <ImagePick
               setValue={setFile}
               uri={user?.file?.url}
               enableEdit={isEditing}
            />
            {isEditing ? (
               <InputText
                  label={'Nome'}
                  placeholder={'Digite seu nome'}
                  value={username}
                  setValue={setUsername}
               />
            ) : (
               <CustomText label={'Nome'} text={String(user?.username)} />
            )}
            {isEditing ? (
               <InputEmail
                  label={'Email'}
                  placeholder={'Digite seu email'}
                  value={email}
                  setValue={setEmail}
               />
            ) : (
               <CustomText label={'Email'} text={String(user?.email)} />
            )}
            {isEditing && (
               <>
                  <InputText
                     label={'Senha'}
                     placeholder={'Digite sua senha'}
                     value={password}
                     setValue={setPassword}
                  />
                  <InputText
                     label={'Confirmar senha'}
                     placeholder={'Confirme a senha'}
                     value={confirmPassword}
                     setValue={setConfirmPassword}
                  />
               </>
            )}
            <Box>
               {isEditing ? (
                  <Flex
                     flexDirection="row"
                     justifyContent="space-between"
                     width={'100%'}
                  >
                     <Box width={'49%'}>
                        <DefaultButton
                           label="Cancelar"
                           onPress={() => setIsEditing(!isEditing)}
                           color={'gray'}
                        />
                     </Box>
                     <Box width={'49%'}>
                        <SubmitButton label="Alterar" onPress={handleUpdate} />
                     </Box>
                  </Flex>
               ) : (
                  <DefaultButton
                     label="Editar"
                     onPress={() => setIsEditing(!isEditing)}
                     color={'cyan'}
                  />
               )}
               <DefaultButton label="Logout" onPress={logout} color={'error'} />
            </Box>
         </VStack>
      </SafeContainer>
   );
}
