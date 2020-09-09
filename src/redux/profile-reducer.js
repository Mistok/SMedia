
// profile page
import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello!', likesCount: 21},
        {id: 3, message: 'What`s up?', likesCount: 5},
        {id: 4, message: 'Howdy!', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
        };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }]
            };
        case SET_USER_PROFILE:

            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:

            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};


// Action creators

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }

};

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }

};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const setStatus = (status) =>{
    return {
        type: SET_STATUS,
        status
    }
};

// thunc creators для быстрой обработки аякс запросов

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data));
    })
};


export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response =>{
            dispatch(setStatus(response.data));
        })

};

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        })

};

export default profileReducer;