// Authentication reducer
import {authAPI, ResultCodeEnum, ResultCodeWithCaptchaEnum, securityAPI} from "../API/api";

import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

// type InitialStateType2 = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean,
//     captchaUrl: string | null
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaUrl: null as string | null // if NULL captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = ( state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};


type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
};

export const setAuthUsersData  = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess  = (captchaUrl: string) : GetCaptchaUrlSuccessType =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispatch: any) => {
    let MeData = await authAPI.me()

    if(MeData.data.resultCode === ResultCodeEnum.Success){
        let {id, login, email } = MeData.data.data;
        dispatch(setAuthUsersData( id, email, login, true ));
    }

};

export const login = (email: string, password: string, rememberMe: any, captcha: string) => async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
        if(loginData.resultCode === ResultCodeEnum.Success ){
            dispatch(getAuthUserData());
        }  else {
            if(loginData.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = loginData.messages.length > 0 ? loginData.messages[0] : "some error o_O";
            dispatch(stopSubmit("login", {email: message}));
        }
};

export const logout = (email: string, password: string, rememberM: any) => async (dispatch: any) => {
    let response = await authAPI.logout();
        if(response.data.resultCode === ResultCodeEnum.Success){
            dispatch(setAuthUsersData( null, null, null, false ));
        }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    debugger
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;