import {rerenderEntireThree} from "../render";

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

export type profilePageType = {
    posts: PostsType[]
}
export type messagesPageType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
}


export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType

}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Salam', likesCount: 7},
            {id: 3, message: 'Hello', likesCount: 5},
        ],
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Vasia'},
            {id: 4, name: 'Lili'},
            {id: 5, name: 'Sisi'},
            {id: 6, name: 'Morti'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Yoooooo'},
        ]
    }
}
export let addPost = (postMessage: string)=> {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 12
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state)
}

export default state