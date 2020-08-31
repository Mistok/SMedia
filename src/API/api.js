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

    follow(userId)  {

        return instance.post(`follow/${userId}`)

    },
    unFollow(userId) {

        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId){

         return instance.get(`profile/${userId}`)

    }
};
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
};


