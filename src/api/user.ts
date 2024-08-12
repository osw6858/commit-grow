import {User} from "@type/response/userType";
import {api} from "@api/axiosInstance";

export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return (await res.json()) as User[];
}

export const fetchUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};
