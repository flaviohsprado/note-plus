import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ICustomError } from "interfaces/customError.interface"
import { IUser } from "interfaces/user.interface"
import { api } from "services/Axios"

export const useGetUser = () => {

   const { data, isLoading } = useQuery<IUser, AxiosError<ICustomError>>({
      queryKey: ["user"],
      queryFn: async () => {
         const { data: userResponse } = await api.get<IUser>("/users/me")

         return userResponse
      },
      retry: 1,
      refetchInterval: 0,
      refetchOnMount: false,
   })

   return {
      user: data,
      isLoading,
   }
}