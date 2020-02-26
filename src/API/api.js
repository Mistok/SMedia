import * as axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4a4082cc-18a2-460d-997e-6ba6efcd3eeb"
    }

});

export const usersAPI = {
    getUser(currentPage = 1, pageSize = 10)  {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => {
                return response.data;
            })

    },

    follow(id)  {

        return instance.post(`follow/${id}}`)
            .then( response => {
                return response.data;
            })

    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then( response => {

                return response.data
            })
    }

};

