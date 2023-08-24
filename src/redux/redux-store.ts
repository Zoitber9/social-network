import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
    addPostACType, SetStatusType, setUsersProfileType,

} from './profile-reducer';
import dialogReducer, {sendMessageACType,} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    SetUserACType, toggleIsFetchingACType, toggleIsFollowingInProgressACType,
    UnFollowACType
} from "./users-reducer";
import authReducer, {setUserDataACType} from "./auth-reducer";
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type ActionType =
    addPostACType
    | sendMessageACType
    | FollowACType
    | UnFollowACType
    | SetUserACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | setUsersProfileType
    | setUserDataACType
    | toggleIsFollowingInProgressACType
    | SetStatusType


let store = createStore(rootReducer, applyMiddleware(thunk))
export type StoreType = typeof store

export type ReducerType = ReturnType<typeof rootReducer>

export default store