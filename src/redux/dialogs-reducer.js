// dialogs reducer
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState ={
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
};


const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:

            return {
                ...state,
                newMessageBody: action.newBody
            };

        case SEND_MESSAGE:

            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };

        default:

            return state;

    }


/*
const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy ={
                ...state,
                newMessageBody: action.newBody
            };

            return stateCopy;

        case SEND_MESSAGE:

            let body = state.newMessageBody;

            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };

            return stateCopy;

        default:

            return state;

    }
    */



/*

    if( action.type === UPDATE_NEW_MESSAGE_BODY ){ // dialogs change textarea

            let stateCopy = {...state};

            stateCopy.newMessageBody = action.newBody;

        return stateCopy;

    }   else if( action.type === SEND_MESSAGE ){ // dialogs send message

        let stateCopy = {...state};

        stateCopy.messages = [...state.messages];

        let body = stateCopy.newMessageBody; // записываем в локальную переменную сообщение

        stateCopy.messages.push( { id: 6, message: body } ); // добавляем новое сообщение в список сообщений

        stateCopy.newMessageBody = ''; // очищаем глобальную переменную

        return stateCopy;
    }
    return state;
    */

};

export default dialogsReducer;

export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }

};

export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody: body
    }

};