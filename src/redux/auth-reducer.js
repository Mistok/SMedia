
// Authentication reducer
import {authAPI} from "../API/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: true
};

const authReducer = ( state = initialState, action) => {
    debugger
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };


        default:
            console.log(action)
            return state;
    }
};

export const setAuthUsersData  = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: 
    {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {

        authAPI.me()

            .then(response => {
                   console.log(response)
                    if(response.data.resultCode === 0){
                        let {id, login, email } = response.data.data;
                        
                        dispatch(setAuthUsersData( id, email, login, true ));
                    }
                }
            )
    
};



export const login = (email, password, rememberMe) => (dispatch) => {
    

    authAPI.login(email, password, rememberMe, true)

        .then(response => {

                if(response.data.resultCode === 0){
                    dispatch(getAuthUserData())
                } else {

                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';

                    dispatch(stopSubmit("login", {_error: message}));
                }

            }
        )
      
};

export const logout = (email, password, rememberMe) => (dispatch) => {


    authAPI.logout(email, password, rememberMe)

        .then(response => {

                if(response.data.resultCode === 0){
                    dispatch(setAuthUsersData(null, null, null, false))
                }
            }
        )

};

export default authReducer;