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

        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})

    },
    unFollow(userId) {

        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    getAuth(){ // auth request for header component

        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })

    },
    getUserProfile(userId){
        console.warn('Please use profileAPI');
        return profileAPI.getUserProfile(userId)
    }

};

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)

    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`)

    },

    updateStatus(status){
        return instance.put(`profile/status`, {
            status: status
        })
    }
};

export const authAPI = {
    me() {
        console.log(1);
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }

};