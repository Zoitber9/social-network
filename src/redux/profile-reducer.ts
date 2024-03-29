import {ActionType, AppRootStateType, ThunkDispatchType} from './redux-store';
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {stopSubmit} from "redux-form";
import {AxiosError} from "axios";

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 19},
        {id: 2, message: 'Hou are you?', likesCount: 8},
        {id: 3, message: 'Yoo', likesCount: 0},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 30
            }
            return {...state, posts: [...state.posts, newPost]};
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile};
        case 'SET_STATUS': {
            return {...state, status: action.status};
        }
        case 'DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }
        case 'SAVE_PHOTO_SUCCESS': {
            const copyState = state
            if (copyState.profile) {
                copyState.profile.photos = action.photos
            }

            return copyState
        }
        default:
            return state;
    }
}

// Actions

export let addPostAC = (newPostText: string) => ({
    type: 'ADD-POST',
    newPostText
} as const)

export let setUsersProfile = (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const)

export let setStatus = (status: string) => ({
    type: 'SET_STATUS',
    status
} as const)

export let deletePost = (postId: number) => ({
    type: 'DELETE_POST',
    postId
} as const)

export let savePhotoSuccess = (photos: PhotosType) => ({
    type: 'SAVE_PHOTO_SUCCESS',
    photos
} as const)
export let saveProfileSuccess = (formData: ProfileFormDataType) => ({
    type: 'SAVE_PROFILE_SUCCESS',
    formData
} as const)

// Thunks

export let savePhoto = (file: FileList | null) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

export let saveProfile = (formData: ProfileFormDataType) => async (dispatch: ThunkDispatchType, getState: () => AppRootStateType) => {
    try {
        const userId = getState().auth.id
        let response = await profileAPI.saveProfile(formData)
        if (response.data.resultCode === 0) {
            if (userId) {
                dispatch(getUsersProfile(+userId))
            }
        } else {
            dispatch(stopSubmit('edit-profile', {error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    } catch (e) {
        const error = e as AxiosError
        alert(error.message)
    }
}

export let getUsersProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}
export let getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export let updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

//types

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateProfileType = {
    posts: PostsType[]
    profile: null | ProfileType
    status: string
}

export type ContactsKeysType =
    'facebook' |
    'website' |
    'vk' |
    'instagram' |
    'github'


export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: Record<ContactsKeysType, null | string>
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type addPostACType = ReturnType<typeof addPostAC>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export type SetStatusType = ReturnType<typeof setStatus>

export type DeletePostType = ReturnType<typeof deletePost>
export type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export default profileReducer
