"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {PropsWithChildren, useState} from "react";
import queryClient from "@/api/queryClient/queryClient";

function ReactQueryProvider({ children }: PropsWithChildren) {
    const [client] = useState(queryClient);

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;