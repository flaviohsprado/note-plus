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
               label={'Nome'}
               placeholder={'Digite o nome da categoria'}
               setValue={setName}
               value={name}
               isRequired={true}
            />
            <SubmitButton label={'Criar!'} onPress={handleModalSubmit} />
         </Center>
      </Modal>
   );
}
