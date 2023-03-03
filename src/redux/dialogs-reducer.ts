import {ActionType} from './redux-store';

export type InitialStateDialogsType = typeof initialState
export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>

let initialState = {
    dialogs: [
        {id: 1, name: 'Aleks'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasil'},
        {id: 4, name: 'Lili'},
        {id: 5, name: 'Yo'},
        {id: 6, name: 'Рик'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fain'},
    ],
    newMessageBody: ''
}

const dialogReducer = (state: InitialStateDialogsType = initialState,
                       action: ActionType): InitialStateDialogsType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageBody
            }
            // state.messages.push(newMessage)
            state.newMessageBody = ''
            return {...state, messages: [...state.messages, newMessage]};
        case 'UPDATE-NEW-MESSAGE-BODY':
            // state.newMessageBody = (action.newMessage)
            return {...state, newMessageBody:  action.newMessage};
        default:
            return state;
    }
}

export let sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export let updateNewMessageBodyAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessage: text
    } as const
}

export default dialogReducer