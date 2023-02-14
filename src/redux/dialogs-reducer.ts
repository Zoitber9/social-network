import {ActionType, messagesPageType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Aleks'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasia'},
        {id: 4, name: 'Lili'},
        {id: 5, name: 'Sisi'},
        {id: 6, name: 'Рик'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hou are yuo?'},
        {id: 3, message: 'Im faind'},
    ],
    newMessageBody: ''
}

const dialogReducer = (state: messagesPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = (action.newMessage)
            return state;
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