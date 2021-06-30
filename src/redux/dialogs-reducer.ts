// dialogs reducer

const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState ={
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrev'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is yous couses?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Fouu'},
        {id: 5, message: 'Trump'},
        {id: 6, message: 'zzz'}
    ] as Array<MessageType>,

};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action : any) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
};

type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (sendMessageBody: string): SendMessageCreatorType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: sendMessageBody
    }
}
// @ts-ignore
export default dialogsReducer