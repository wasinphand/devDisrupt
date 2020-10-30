import { useMemo } from 'react';

export async function fetchData():Promise<any> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}
