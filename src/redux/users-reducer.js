
// users page
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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


        case '':

        default:
            return state;
    }
};


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

export default usersReducer;