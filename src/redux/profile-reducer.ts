import {ActionType} from './redux-store';

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type addPostACType = ReturnType<typeof addPostAC>
export type InitialStateProfileType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hou are yuo?', likesCount: 7},
        {id: 3, message: 'Im faind', likesCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state: InitialStateProfileType = initialState,
                        action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            // state.newPostText = (action.newText)
            return {...state, newPostText: action.newText};
        default:
            return state;
    }
}

export let addPostAC = () => ({type: 'ADD-POST'} as const)
export let updateNewPostTextAC = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)

export default profileReducer