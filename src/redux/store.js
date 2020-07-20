// profile page
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// dialogs
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello!', likesCount: 21},
                {id: 3, message: 'What`s up?', likesCount: 5},
                {id: 4, message: 'Howdy!', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrev'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is yous couses?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Fouuuu'},
                {id: 5, message: 'Trump'},
                {id: 6, message: 'zzz'}
            ],
            newMessageBody: '' 
        },

        friends: {
            friendsData: [
                {id: 1, name: 'Dimych',  img: 'ava_1.jpeg'},
                {id: 2, name: 'Andrev',  img: 'ava_2.jpeg'},
                {id: 3, name: 'Sveta',   img: 'ava_3.jpeg'},
                {id: 4, name: 'Sasha',   img: 'ava_4.jpeg'},
                {id: 5, name: 'Victor',  img: 'ava_5.jpeg'},
                {id: 6, name: 'Valera',  img: 'ava_6.jpeg'}
            ]
        }
    },
    
    getState() {
 
        return this._state

    },
    
    subscribe(observer) { // 'observer pattern'

        this._callSubscriber = observer;
    
    },


    dispatch( action ) { // action => type: 'add-post'

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber( this._state ); // перезагружаем страницу с новым сообщением

    },

    _callSubscriber() { // rerender entire tree

        console.log('state changed')

        /* при вызове _callSubscriber выше, мы перезапишем значение функции, 
        в нее попадет observer из app.js, и перезагрузит содержимое страницы  

        */
    },
    
};




export default store;
