import { INote } from "./note.interface";

export interface IDeck {
   id: string;
   name: string;
   children?: IDeck[];
   notes?: INote[];
}