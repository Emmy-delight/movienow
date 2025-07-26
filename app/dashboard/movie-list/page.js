import { AuthorizationCheck } from "@/config/authorization-check";
import MovieList from "./movie-list";
import { auth } from "@/auth";

export default async function Page () {
    const session = await auth();
    return (
        <>
         <AuthorizationCheck/>
         <MovieList userId={session?.user?.id} />
        </>
    )
}