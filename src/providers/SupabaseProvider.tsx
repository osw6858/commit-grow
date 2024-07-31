'use client';

import {ReactNode, useState} from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

interface SupabaseProviderProp {
    children: ReactNode;
}

const SupabaseProvider = ({ children }: SupabaseProviderProp) => {
    const [supabaseClient] = useState(() => createClientComponentClient());

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
};

export default SupabaseProvider;
