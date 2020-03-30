
// profile page
import {profileAPI, usersAPI} from '../API/api';
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./users-reducer";

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
    status: ' default status '
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case  SET_STATUS:
            return {
                ...state,
                status: action.status
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

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getProfileThuncCreator = (userId) => {

    return (dispatch) =>{

        if( !userId ){

            userId = 2;

        }

        usersAPI.getUserProfile(userId)
            .then(response =>{
                dispatch(setUserProfile(response.data));
            })
    }

};

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response =>{
            debugger;
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