import {API} from "./API.ts";

export type ProjectType = {
    id: number;
    name: string;
    url: string;
    page?: string;
}

export async function getProjects(): Promise<void | ProjectType[]> {
    try {
        return await API.get('/repos').then(response => response.data)
    } catch (error) {
        console.error(error)
    }
}