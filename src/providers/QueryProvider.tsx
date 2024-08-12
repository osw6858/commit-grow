"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {PropsWithChildren, useState} from "react";

function ReactQueryProvider({children}: PropsWithChildren) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000 * 5,
                refetchOnWindowFocus: false
            },
        },
    })
    const [client] = useState(queryClient);

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;