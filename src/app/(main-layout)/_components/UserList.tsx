'use client'

import {fetchUsers} from "@api/user";
import {useQuery} from "@tanstack/react-query";

export default function UserList() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data.map((user: any) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}