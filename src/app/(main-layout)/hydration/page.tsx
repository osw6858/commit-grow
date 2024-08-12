import {HydrationBoundary} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {getUsers} from "@api/user";
import ListUsers from "@app/(main-layout)/hydration/_components/ListUsers";
import getQueryClient from "@/lib/queryClient";

export default async function QueryTest() {

    const queryClient = getQueryClient(5)
    await queryClient.prefetchQuery({
        queryKey: ["hydrate-users"],
        queryFn: getUsers,
    });

    return (
        <div className='h-main'>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ListUsers/>
            </HydrationBoundary>
        </div>
    );
}