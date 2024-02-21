import ItemList from 'components/Note/Item';
import { FlatList } from 'native-base';

interface DashboardProps {
   navigation: NavigationProp;
}

export default function HomeScreen({ navigation }: DashboardProps) {
   const notes = [
      {
         id: 'a281bbae-f632-422b-a02f-988f37bdc48e',
         categoryId: '212da430-0ca9-4b65-937b-8494e96fcd9c',
         title: 'Introdução',
         content: 'Uma introdução para ciência básica que é básica.',
      },
      {
         id: 'b863cf2d-13d0-4f88-8a1e-0e0feb60b214',
         categoryId: '212da430-0ca9-4b65-937b-8494e96fcd9c',
         title: 'Teste',
         content: 'Um simples teste.',
      },
      {
         id: 'e1a387c6-c60d-4f6f-b299-00c1cf5dde1b',
         categoryId: '212da430-0ca9-4b65-937b-8494e96fcd9c',
         title: 'Animais',
         content: 'Plantas e cnidários andrézitos gameplay.',
      },
   ];

   return (
      <FlatList
         numColumns={2}
         data={notes}
         renderItem={({ item }) => (
            <ItemList
               title={item.title}
               content={item.content}
               isSelected={false}
               onLongPress={() => {}}
               onPress={navigation.navigate('NoteScreen', {
                  id: item.id,
               })}
               onSelectMode={false}
            />
         )}
         keyExtractor={(item) => item.id}
      />
   );
}
