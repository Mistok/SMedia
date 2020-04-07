
// Authentication reducer
import {authAPI} from "../API/api";

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
    return (

        authAPI.me()

            .then(response => {
                    //console.log(`resultCode: ${response.data.resultCode}`);
                    if(response.data.resultCode === 0){
                        let {id, login, email } = response.data.data;
                        dispatch(setAuthUsersData( id, email, login, true ));
                    }
                }
            )
    )
};

export const login = (email, password, rememberMe) => (dispatch) => {
    return (

        authAPI.login(email, password, rememberMe, true)

            .then(response => {
                    //console.log(response);
                    if(response.data.resultCode === 0){
                        dispatch(getAuthUserData())
                    } else {
                        console.error('wrong pass or login')
                    }
                }
            )
    )
};

export const logout = (email, password, rememberMe) => (dispatch) => {
    return (

        authAPI.logout(email, password, rememberMe)

            .then(response => {

                    if(response.data.resultCode === 0){
                        dispatch(setAuthUsersData(null, null, null, false))
                    }
                }
            )
    )
};

export default authReducer;