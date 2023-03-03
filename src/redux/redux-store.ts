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

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer
})

export type ActionType =
    addPostACType
    | updateNewPostTextACType
    | sendMessageACType
    | updateNewMessageBodyACType


let store = createStore(rootReducer)
export type StoreType = typeof store

export type ReducerType = ReturnType<typeof rootReducer>

export default store