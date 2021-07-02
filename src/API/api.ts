import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../Types/types";

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
    follow(userId: number)  {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number){
        console.warn('please use profileAPI method');
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto(photoFile: any){
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileType){
        return instance.put('profile/',profile);
    }
};

export enum ResultCodeEnum  {
    Success,
    Error = 1,
}
export enum ResultCodeWithCaptchaEnum  {

    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number,
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
         userId: number,
    }
    resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum
    messages: Array<string>
}
// const AuthAPITypes = {
//     meType: type
// }

export const authAPI = {
    me(){
        return instance.get<MeResponseType >(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string  = null){
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout(){
        return instance.delete(`auth/login`)
     }
};

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    },
};

// authAPI.me().then((res: AxiosResponse<string>) => res.data.toUpperCase())