import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization-check"
import AddMovie from "./add-movie"

export default async function Page () {
  const session = await auth();
   return (
         <>
         <AuthorizationCheck/>
         <AddMovie userId={session?.user?.id} />
         </>
   )
}