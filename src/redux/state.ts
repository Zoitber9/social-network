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
    dispatch: (action: any) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
                {id: 3, message: 'Yoooooo'},
            ]
        }
    },
    rerenderEntireTree() {
        console.log(' State changed')
    },
    // addPost() {
    //     // let newPost = {
    //     //     id: 5,
    //     //     message: this.state.profilePage.newPostText,
    //     //     likesCount: 0
    //     // }
    //     // this.state.profilePage.posts.push(newPost)
    //     // this.state.profilePage.newPostText = ''
    //     // this.rerenderEntireThree()
    // },
    // updateNewPostText(newText: string) {
    //     // store.state.profilePage.newPostText = (newText)
    //     // store.rerenderEntireThree()
    // },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this.state
    },

    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likesCount: 0
            }
            this.state.profilePage.posts.push(newPost)
            this.state.profilePage.newPostText = ''
            this.rerenderEntireTree()
        } else {

            if (action.type === UPDATE_NEW_POST_TEXT) {
                this.state.profilePage.newPostText = (action.newText)
                this.rerenderEntireTree()
            }
        }
    }
}

export let addPostAC = () => ({type: ADD_POST})
export let updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default store