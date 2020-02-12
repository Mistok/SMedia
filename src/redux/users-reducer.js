
// users page
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Dmitry', status: 'sad', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Silver', status: 'rolf', location: {city: 'Tartu', country: 'Estonia'}},
        {id: 3, followed: true, fullName: 'Olga', status: 'gorgeous', location: {city: 'Kiyv', country: 'Ukraine'}},
        {id: 4, followed: false, fullName: 'Tim', status: 'like a boss', location: {city: 'Gomel', country: 'Belarus'}},
        {id: 5, followed: false, fullName: 'Vlad', status: 'zzz', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 6, followed: true, fullName: 'Sasha', status: 'sad', location: {city: 'Kiyv', country: 'Ukraine'}},
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {


        case FOLLOW:

            return{

            };

        case UNFOLLOW:

            return{

            };

        default:

            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId}); //action creator

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId}); //action creator

export default usersReducer;