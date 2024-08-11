'use client'
import {getUsers} from "@api/user";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

export default function ListUsers() {
    const [count, setCount] = useState(0);

    const {data} = useQuery({queryKey: ['getUser'], queryFn: getUsers, staleTime: 10 * 1000,})


    return (
        <main style={{maxWidth: 1200, marginInline: 'auto', padding: 20}}>
            <div style={{marginBottom: '4rem', textAlign: 'center'}}>
                <h4 style={{marginBottom: 16}}>{count}</h4>
                <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
                <button
                    onClick={() => setCount((prev) => prev - 1)}
                    style={{marginInline: 16}}
                >
                    decrement
                </button>
                <button onClick={() => setCount(0)}>reset</button>
            </div>
            {
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: 20,
                    }}
                >
                    {data?.map((user) => (
                        <div
                            key={user.id}
                            style={{border: '1px solid #ccc', textAlign: 'center'}}
                        >

                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            }
        </main>
    );
}