
// profile page
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello!', likesCount: 21},
        {id: 3, message: 'What`s up?', likesCount: 5},
        {id: 4, message: 'Howdy!', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
        };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }]
            };
        default:
            return state;
    }
};

    /*
    if( action.type === ADD_POST ){

        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };

        let stateCopy = {...state};

        stateCopy.posts = [...state.posts];

        stateCopy.posts.push(newPost);

        stateCopy.newPostText = '';

        return stateCopy;

    }   else if( action.type === UPDATE_NEW_POST_TEXT ){

        let stateCopy = {...state};

        stateCopy.newPostText = action.newText;

        return stateCopy
    }
    return state;
};
*/
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

export default profileReducer;