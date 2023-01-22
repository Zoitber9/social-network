let rerenderEntireThree = () => {
    console.log(' State changed')
}


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
}


export type StateType = {
    profilePage:ProfilePageType
    messagesPage: messagesPageType

}

let state: StateType = {
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
            {id: 3, message: 'Yoooooo'},
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireThree()
}
export const updateNewPostText = (newText: string)=> {
    state.profilePage.newPostText = (newText)
    rerenderEntireThree()
}

export const subscribe = (observer:()=> void) => {
    rerenderEntireThree = observer   // Наблюдатель(observer)
}


export default state