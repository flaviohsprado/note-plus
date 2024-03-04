import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ICustomError } from "interfaces/customError.interface"
import { INote } from "interfaces/note.interface"
import { api } from "services/Axios"

export const useFindAllNotesFromCategory = (categoryId: string) => {
   if (!categoryId) console.error('categoryId is required')

   const { data, isLoading, refetch, error } = useQuery<INote[], AxiosError<ICustomError>>({
      queryKey: ["notes"],
      queryFn: async () => {
         const { data: notes } = await api.get<INote[]>(`/notes/${categoryId}/all`)

         return notes
      },
      retry: 1,
      refetchInterval: 0,
      refetchOnMount: false,
      refetchOnReconnect: true,
      enabled: !!categoryId, // Only run the query if categoryId is truthy
   })

   if (error) {
      console.error('Error fetching notes:', error.message);
   }

   return {
      notes: data,
      isLoading,
      refetch,
      error
   }
}