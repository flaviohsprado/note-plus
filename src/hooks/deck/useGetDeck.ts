import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ICustomError } from "interfaces/customError.interface"
import { IDeck } from "interfaces/deck.interface"
import { api } from "services/Axios"

export const useGetDecks = () => {
   const { data, isLoading } = useQuery<IDeck[], AxiosError<ICustomError>>({
      queryKey: ["decks"],
      queryFn: async () => {
         const { data: deckResponse } = await api.get<IDeck[]>("/categories")

         return deckResponse
      },
      retry: 1,
      refetchInterval: 0,
      refetchOnMount: false,
   })

   return {
      decks: data,
      isLoading,
   }
}