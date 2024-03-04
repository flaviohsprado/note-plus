import InputText from 'components/global/InputText';
import SubmitButton from 'components/global/SubmitButton';
import { useCreateDeck } from 'hooks/deck/useCreateDeck';
import { Center, Modal } from 'native-base';

interface CreateDeckProps {
   parentId?: string;
   visible: boolean;
   setVisible: (value: boolean) => void;
}

export default function CreateDeck({
   visible,
   setVisible,
   parentId,
}: CreateDeckProps) {
   const { name, setName, setParentId, handleSubmit } = useCreateDeck();

   console.log('parentId', parentId);

   const handleModalSubmit = () => {
      setParentId(parentId || '');
      handleSubmit();
      setVisible(false);
   };

   return (
      <Modal
         style={{
            backgroundColor: 'white',
            position: 'absolute',
            width: '90%',
            margin: 20,
            borderRadius: 10,
            top: '30%',
            maxHeight: 200,
         }}
         isOpen={visible}
         onClose={() => setVisible(false)}
      >
         <Center width={'100%'} padding={10}>
            <InputText
               label={'Name'}
               placeholder={'Type your deck name'}
               setValue={setName}
               value={name}
               isRequired={true}
            />
            <SubmitButton label={'Create'} onPress={handleModalSubmit} />
         </Center>
      </Modal>
   );
}
