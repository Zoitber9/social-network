import {combineReducers, createStore} from 'redux';
import profileReducer, {
    addPostACType, setUsersProfileType,
    updateNewPostTextACType
} from './profile-reducer';
import dialogReducer, {
    sendMessageACType,
    updateNewMessageBodyACType
} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    SetUserACType, toggleIsFetchingACType, toggleIsFollowingInProgressACType,
    UnFollowACType
} from "./users-reducer";
import authReducer, {setUserDataACType} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type ActionType =
    addPostACType
    | updateNewPostTextACType
    | sendMessageACType
    | updateNewMessageBodyACType
    | FollowACType
    | UnFollowACType
    | SetUserACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | setUsersProfileType
    | setUserDataACType
    | toggleIsFollowingInProgressACType


let store = createStore(rootReducer)
export type StoreType = typeof store

export type ReducerType = ReturnType<typeof rootReducer>

export default store