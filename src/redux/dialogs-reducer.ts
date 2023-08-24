import {ActionType} from './redux-store';

export type InitialStateDialogsType = typeof initialState
export type sendMessageACType = ReturnType<typeof addMessageActionCreator>

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
    ]
}

const dialogReducer = (state: InitialStateDialogsType = initialState,
                       action: ActionType): InitialStateDialogsType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage]};

        default:
            return state;
    }
}
export let addMessageActionCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)

export default dialogReducer