
// Authentication reducer
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: true
};

const authReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:

            return state;
    }
};

export const setAuthUsersData  = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then((response) => {

                if(response.data.resultCode === 0){
                    let {id, login, email } = response.data.data;
                    dispatch(setAuthUsersData( id, email, login, true ));
                }
            }
        );

};
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {

                if(response.data.resultCode === 0){
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error o_O";
                    dispatch(stopSubmit("login", {email: "Email is wrong"}))
                }
            }
        );

};
export const logout = (email, password, rememberMe) => (dispatch) => {
    authAPI.logout()
        .then((response) => {

                if(response.data.resultCode === 0){
                    dispatch(setAuthUsersData( null, null, null, false ));
                }
            }
        );
};

export default authReducer;