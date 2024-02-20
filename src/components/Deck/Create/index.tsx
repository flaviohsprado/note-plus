import InputText from 'components/InputText';
import SubmitButton from 'components/SubmitButton';
import { useCreateDeck } from 'hooks/deck/useCreateDeck';
import { Center, Modal } from 'native-base';

interface CreateDeckProps {
   visible: boolean;
   setVisible: (value: boolean) => void;
}

export default function CreateDeck({ visible, setVisible }: CreateDeckProps) {
   const { name, setName, handleSubmit } = useCreateDeck();

   const handleModalSubmit = () => {
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
