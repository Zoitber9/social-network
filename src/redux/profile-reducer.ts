import {ActionType} from './redux-store';
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type addPostACType = ReturnType<typeof addPostAC>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>

type PostsType = {
    id: number
    message: string
    likesCount: number
}


export type InitialStateProfileType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
}
type ContactsType = {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 19},
        {id: 2, message: 'Hou are you?', likesCount: 8},
        {id: 3, message: 'Yoo', likesCount: 0},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 30
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export let addPostAC = () => ({type: 'ADD-POST'} as const)
export let updateNewPostTextAC = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
export let setUsersProfile = (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const)
export let getUsersProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })
}
export default profileReducer