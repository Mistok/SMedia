
// users page
import {usersAPI} from "../API/api";
import {updateObjectArray} from "../utils/object-util";
import {UserType} from "../Types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';



let initialState = {
    users: [] as  Array<UserType>,
    pageSize: 9,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: false})
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

type ActionTypes = FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetTotalUsersActionType
    | SetCurrentPageActionType
    | ToggleFollowingProgressActionType
    | ToggleIsFetchingActionType

// Actions
type FollowSuccessActionType ={
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId}); // follow action creator

type UnfollowSuccessActionType ={
    type: typeof UNFOLLOW
    userId: number
}
export const unFollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId}); // unfollow action creator

type SetUsersActionType ={
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});   // users from servers

type SetCurrentPageActionType ={
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersActionType ={
    type: typeof TOTAL_USERS_COUNT
    count: number
}
export const setUsersTotalCount = (totalUsersCount: number):SetTotalUsersActionType => ({type: TOTAL_USERS_COUNT, count: totalUsersCount});   // users total count changed

type ToggleIsFetchingActionType ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching}); // preloader flag

type ToggleFollowingProgressActionType ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number):ToggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}); // preloader flag


export const requestUsers = (page: number, pageSize: number) => { //getUsersThunkCreator
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUser(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if( response.data.resultCode === 0 ){dispatch(actionCreator(userId))}
    dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId: number) => { //getUsersThunkCreator
    return (dispatch: any) => {

        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then((response: any) => {
                if( response.data.resultCode === 0 ){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
};

export const unFollow = (userId: number) => { //getUsersThunkCreator
    return (dispatch : any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then((response: any) => {
                if( response.data.resultCode === 0 ){
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
};

export default usersReducer;