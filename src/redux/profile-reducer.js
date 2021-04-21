
// profile page
import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello!', likesCount: 21},
        {id: 3, message: 'What`s up?', likesCount: 5},
        {id: 4, message: 'Howdy!', likesCount: 11}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCount: 0 }]
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
        case DELETE_POST:

            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default:
            return state;
    }
};


// Action creators

export const addPostActionCreator = (newPostText) => {

    return {
        type: ADD_POST,
        newPostText: newPostText
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

export const deletePost = (postId) =>{
    return {
        type: DELETE_POST,
        postId
    }
};

// thunc creators

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response =>{
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