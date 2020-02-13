
// users page
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const SET_USERS = 'SET_USERS';


let initialState = {
     users: []
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

                users: [...state.users, ...action.users]

             };

        default:

            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId}); // follow action creator

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId}); // unfollow action creator

export const setUsersAC = (users) => ({type: SET_USERS, users});   // users from serves

export default usersReducer;