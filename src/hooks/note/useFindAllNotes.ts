import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ICustomError } from "interfaces/customError.interface"
import { INote } from "interfaces/note.interface"
import { api } from "services/Axios"

export const useFindAllNotes = () => {
   const { data, isLoading, refetch } = useQuery<INote[], AxiosError<ICustomError>>({
      queryKey: ["notes"],
      queryFn: async () => {
         const { data: notes } = await api.get<INote[]>(`/notes`)

         return notes
      },
      retry: 1,
      refetchInterval: 0,
      refetchOnMount: false,
      refetchOnReconnect: true,
   })

   return {
      notes: data,
      isLoading,
      refetch,
   }
}