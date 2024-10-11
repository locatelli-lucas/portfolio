import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.github.com/users/locatelli-lucas/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})