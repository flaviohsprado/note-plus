import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import type {
   CompositeScreenProps,
   NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamList = {
   Home: NavigatorScreenParams<HomeTabParamList>;
   DeckScreen: { id: string; parentName: string };
   NoteScreen: {
      id?: string;
      categoryId?: string;
      title: string;
      content: string;
   };
};

export type RootMaterialBottomTabScreenProps<
   T extends keyof RootStackParamList,
> = MaterialBottomTabScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
   Popular: undefined;
   Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
   CompositeScreenProps<
      BottomTabScreenProps<HomeTabParamList, T>,
      RootMaterialBottomTabScreenProps<keyof RootStackParamList>
   >;

declare global {
   namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
   }
}
