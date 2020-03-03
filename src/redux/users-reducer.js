
// users page
import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';

let initialState = {
     users: [],
    pageSize: 9,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId ){ // если у пользователя айди совпадает с переданым в action
                        return { ...u, followed: true }  // возвращаем копию state с измененным followed
                    }
                    return u;
                } )
            };

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId ){ // если у пользователя айди совпадает с переданым в action
                        return {...u, followed: false } // возвращаем копию state с измененным followed
                    }
                    return u;
                } )
            };
        case SET_USERS:
            return{

                ...state,

                users: [ ...action.users]

             };
        case SET_CURRENT_PAGE:
            return{

                ...state,

                currentPage: action.currentPage

            };
        case TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId  ]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:

            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId}); // follow action creator

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId}); // unfollow action creator

export const setUsers = (users) => ({type: SET_USERS, users});   // users from servers

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, count: totalUsersCount});   // users total count changed

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // preloader flag

export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}); // preloader flag

export const getUsers = (currentPage, pageSize) => { //getUsersThunkCreator
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUser(currentPage, pageSize).then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            }
        );

    }

};

export const follow = (userId) => { //getUsersThunkCreator
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId)
            .then((response) => {
                if( response.data.resultCode === 0 ){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });

    }

};

export const unFollow = (userId) => { //getUsersThunkCreator
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unFollow(userId)
            .then((response) => {
                if( response.data.resultCode === 0 ){
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });

    }

};

export default usersReducer;