import {ActionType, messagesPageType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReducer = (state: messagesPageType, action: ActionType) => {
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