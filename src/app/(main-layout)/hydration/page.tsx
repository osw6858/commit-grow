import {HydrationBoundary} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {getUsers} from "@api/user";
import ListUsers from "@app/(main-layout)/hydration/_components/ListUsers";
import getQueryClient from "@/lib/queryClient";
import {Suspense} from "react";

export default async function QueryTest() {

    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["hydrate-users"],
        queryFn: getUsers,
    });

    return (
        <div className='h-main'>
            <Suspense fallback={<div>로딩중.....</div>}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <ListUsers/>
                </HydrationBoundary>
            </Suspense>
        </div>
    );
}