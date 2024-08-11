import {HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {getUsers} from "@/api/user";
import ListUsers from "@app/hydration/_components/ListUsers";

export default async function QueryTest() {

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["hydrate-users"],
        queryFn: getUsers,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ListUsers/>
        </HydrationBoundary>
    );
}