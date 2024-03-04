import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ICustomError } from "interfaces/customError.interface"
import { IDeck } from "interfaces/deck.interface"
import { api } from "services/Axios"

export const useFindOneDeck = (id: string) => {
   const { data, isLoading, refetch } = useQuery<IDeck, AxiosError<ICustomError>>({
      queryKey: ["deck"],
      queryFn: async () => {
         const { data: deckResponse } = await api.get<IDeck>(`/categories/${id}`)

         return deckResponse
      },
      retry: 1,
      refetchInterval: 0,
      refetchOnMount: false,
   })

   return {
      deck: data,
      isLoading,
      refetch,
   }
}