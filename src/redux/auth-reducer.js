
// Authentication reducer
import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if NULL captcha is not required
};

const authReducer = ( state = initialState, action) => {
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

export const setAuthUsersData  = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess  = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
        if(response.data.resultCode === 0){
            let {id, login, email } = response.data.data;
            dispatch(setAuthUsersData( id, email, login, true ));
        }

};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData());
        }  else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error o_O";
            dispatch(stopSubmit("login", {email: message}));
        }
};

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch(setAuthUsersData( null, null, null, false ));
        }
};

export const getCaptchaUrl = () => async (dispatch) => {
    debugger
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;