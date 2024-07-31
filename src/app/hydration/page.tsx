import { HydrationBoundary} from "@tanstack/react-query";
import { dehydrate } from "@tanstack/query-core";
import {getUsers} from "@/api/user";
import ListUsers from "@components/ListUsers";
import queryClient from "@/api/queryClient/queryClient";

export default async function QueryTest() {

    await queryClient.prefetchQuery({
        queryKey: ["hydrate-users"],
        queryFn: getUsers,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ListUsers />
        </HydrationBoundary>
    );
}