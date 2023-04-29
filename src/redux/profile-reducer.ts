import {ActionType} from './redux-store';

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type InitialStateProfileType = typeof initialState
export type addPostACType = ReturnType<typeof addPostAC>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>


let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hou are you?', likesCount: 7},
        {id: 3, message: 'Im fain', likesCount: 88},
    ],
    newPostText: '',
    profile: null
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
            return {...state, newPostText: action.newText};
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export let addPostAC = () => ({type: 'ADD-POST'} as const)
export let updateNewPostTextAC = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
export let setUsersProfile = (profile: any) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const)

export default profileReducer