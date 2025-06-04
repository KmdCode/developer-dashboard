import axios from "axios";

const token:string = `${process.env.TOKEN}`;

const axiosInstance = axios.create({
    baseURL:"https://api.github.com",
    headers: {
        Authorization: `token ${token}`
    }
})

const fetchData = () => {
    const fetchUsers = async() => {
        const response = await axiosInstance.get(`/users`, {
            params:{
                since:0,
                per_page: 20

            }
        })
        return response.data
    }
    const fetchUser = async(username:string) => {
        const response = await axiosInstance.get(`/:${username}`, {
            params: {
                username
            }
        })

        return response;
    }

    const fetchUserRepositories = async(username:string) => {
        const response = await axiosInstance.get(`/users/:${username}/repos`, {
            params: {

            }
        })

        return response;
    }

    const searchUsers = async(search:string) => {
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

    return {fetchUsers, fetchUser, fetchUserRepositories, searchUsers}

}

export default fetchData;