import * as axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4a4082cc-18a2-460d-997e-6ba6efcd3eeb"
    }

});

const instancePost = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    method: 'post',
    data: {},
    headers: {
        "API-KEY": "4a4082cc-18a2-460d-997e-6ba6efcd3eeb"
    }

});

const instanceDelete = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    method: 'delete',
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
        console.log('follow works');
        debugger;

        return instancePost.post(`follow/${id}}`)
            .then( response => {

                return response.data;

            }).catch(response =>console.log(response))

    },
    unFollow(id) {
        return instanceDelete.delete(`follow/${id}`)
            .then( response => {

                return response.data

            }).catch(response =>console.log(response))
    }

};


