import axios from "axios";

const token: string = import.meta.env.VITE_TOKEN;;

const axiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `token ${token}`
    }
})


export const fetchUsers = async (since:number = 0) => {
    const response = await axiosInstance.get(`/users`, {
        params: {
            since,
            per_page: 20
        }
    })
    return response.data
}

export const fetchUser = async (username: string) => {
    const response = await axiosInstance.get(`/users/${username}`)
    return response.data;
}

export const fetchUserRepositories = async (username: string) => {
    const response = await axiosInstance.get(`/users/:${username}/repos`, {
        params: {

        }
    })
    return response;
}

export const searchUsers = async (search: string) => {
    const response = await axiosInstance.get(`/search/users?q=${search}`, {
        params: {
            q: search,
            sort: "indexed",
            order: "desc",
            per_page: 20

        }
    })

    return response;
}