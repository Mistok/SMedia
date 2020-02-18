
// users page
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

let initialState = {
     users: [],
    pageSize: 4,
    totalUsersCount: 19,
    currentPage: 2
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
        default:

            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId}); // follow action creator

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId}); // unfollow action creator

export const setUsersAC = (users) => ({type: SET_USERS, users});   // users from servers

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCountAC = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, count: totalUsersCount});   // users total count changed

export default usersReducer;