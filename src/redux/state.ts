

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
    dialogs:  DialogItemPropsType[]
    messages:  MessagePropsType[]
}


export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType

}

let state: StateType= {
    profilePage: {
        posts:   [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Hou are yuo?',  likesCount: 7},
            {id: 3, message: 'Im faind',  likesCount: 5},
        ],
    },
    messagesPage: {
        dialogs:   [
            {id: 1, name: 'Aleks'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Vasia'},
            {id: 4, name: 'Lili'},
            {id: 5, name: 'Sisi' },
            {id: 6, name: 'Рик'},
        ],
        messages:  [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hou are yuo?'},
            {id: 3, message: 'Im faind'},
        ]
    }
}

export default state