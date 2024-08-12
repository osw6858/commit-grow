import getQueryClient from "@/lib/queryClient";
import {fetchUsers} from "@api/user";
import {HydrationBoundary} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import UserList from "@app/(main-layout)/_components/UserList";

const ExampleComponent = async () => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['users2'],
        queryFn: fetchUsers,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <UserList/>
        </HydrationBoundary>
    );
}

export default ExampleComponent