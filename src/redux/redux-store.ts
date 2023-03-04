import {combineReducers, createStore} from 'redux';
import profileReducer, {
    addPostACType,
    updateNewPostTextACType
} from './profile-reducer';
import dialogReducer, {
    sendMessageACType,
    updateNewMessageBodyACType
} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {FollowACType, SetUserACType, UnFollowACType} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer
})

export type ActionType =
    addPostACType
    | updateNewPostTextACType
    | sendMessageACType
    | updateNewMessageBodyACType
    | FollowACType
    | UnFollowACType
    | SetUserACType

let store = createStore(rootReducer)
export type StoreType = typeof store

export type ReducerType = ReturnType<typeof rootReducer>

export default store