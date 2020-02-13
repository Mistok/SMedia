
// users page
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const SET_USERS = 'SET-USERS';


let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
    //         followed: true,
    //         fullName: 'Dmitry',
    //         status: 'sad',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://politeka.net/crops/ae41f5/620x0/1/0/2018/08/16/nsnlBfg7cyvc5BqE66j3nI7Rj0YBS8Or.jpg',
    //         followed: false,
    //         fullName: 'Vasya',
    //         status: 'rolf',
    //         location: {city: 'Tartu', country: 'Estonia'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://politeka.net/crops/ae41f5/620x0/1/0/2018/08/16/nsnlBfg7cyvc5BqE66j3nI7Rj0YBS8Or.jpg',
    //         followed: true,
    //         fullName: 'Olga',
    //         status: 'gorgeous',
    //         location: {city: 'Kiyv', country: 'Ukraine'}
    //     },
    //     {
    //         id: 4,
    //         photoUrl: 'https://soundtracktracklist.com/wp-content/uploads/2017/04/Tim-Minchin.jpg',
    //         followed: false,
    //         fullName: 'Tim',
    //         status: 'like a boss',
    //         location: {city: 'Gomel', country: 'Belarus'}
    //     },
    //     {
    //         id: 5,
    //         photoUrl: 'https://ticketleap-media-master.s3.amazonaws.com/29c53cec-7b52-47bb-a9f1-504a00bf4c54/hero.jpg',
    //         followed: false,
    //         fullName: 'Eugene',
    //         status: 'zzz',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 6,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHCMd8GiDXCyFlAfrm1ElW9Mz5DrOLTopVi61xLJicOa8Pr07E',
    //         followed: true,
    //         fullName: 'Sasha',
    //         status: 'sad',
    //         location: {city: 'Kiyv', country: 'Ukraine'}
    //     },
    // ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {


        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId ){ // если у пользователя айди совпадает с переданым в action
                        return {...u, followed: true} // возвращаем копию state с измененным followed
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