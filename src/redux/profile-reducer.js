
// profile page
import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


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

        case SAVE_PHOTO_SUCCESS:

            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) =>{
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
};


// thunk creators

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0 ){
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0 ){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0 ){
        dispatch(getUserProfile(userId));
    } else {
        const errorMessage = response.data.messages[0];
        const beginOfFieldName = errorMessage.indexOf(">", 20);
        const endOfFieldName = errorMessage.indexOf(")", 20);
        const fieldName = errorMessage.slice(beginOfFieldName+1, endOfFieldName).toLowerCase();
        dispatch(stopSubmit("edit-profile",{"contacts": { [fieldName]: errorMessage}} ));
        return Promise.reject(errorMessage)
    }
};
export default profileReducer;