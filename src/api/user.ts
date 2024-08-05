import {User} from "@type/response/userType";

export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return (await res.json()) as User[];
}