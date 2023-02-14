import profileReducer, {addPostAC} from "./profile-reducer";
import dialogReducer, {sendMessageAC} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type messagesPageType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: messagesPageType
}
export type StoreType = {
    state: StateType
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => void
    dispatch: (action: ActionType) => void
}

// export type AddPostActionType = {
//     type: 'ADD-POST'
//     // newPostText: string
// }
export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}



// export type SendMessage = {
//     type: 'SEND-MESSAGE'
//     newMessageBody: string
// }
export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type updateNewMessageBodyACType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessage: string
}

export type ActionType =
    addPostACType
    | updateNewPostTextACType
    | sendMessageACType
    | updateNewMessageBodyACType


const store: StoreType = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'Salam', likesCount: 7},
                {id: 3, message: 'Hello', likesCount: 5},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'John'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Vasia'},
                {id: 4, name: 'Lili'},
                {id: 5, name: 'Sisi'},
                {id: 6, name: 'Morty'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Yoh'},
            ],
            newMessageBody: ''
        },

    },
    rerenderEntireTree() {
        console.log(' State changed')
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this.state
    },
    dispatch(action) {
        this.state.profilePage =  profileReducer(this.state.profilePage, action)
        this.state.messagesPage = dialogReducer(this.state.messagesPage, action)
        this.rerenderEntireTree()
    },
}


export default store