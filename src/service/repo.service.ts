import {API} from "./API.ts";

export async function getProjects() {
    try {
        return await API.get('/repos')
    } catch (error) {
        console.error(error)
    }
}