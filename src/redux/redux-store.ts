import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
    addPostACType, DeletePostType, SavePhotoSuccessType, SetStatusType, setUsersProfileType,

} from './profile-reducer';
import {reducer as formReducer} from 'redux-form'
import dialogReducer, {sendMessageACType,} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    SetUserACType, toggleIsFetchingACType, toggleIsFollowingInProgressACType,
    UnFollowACType
} from "./users-reducer";
import authReducer, {GetCaptchaUrlType, setUserDataACType} from "./auth-reducer";
import thunk, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer, {ErrorActionType, InitializedSuccessACType} from "../redux/app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer,
    editProfile: formReducer,
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
    | InitializedSuccessACType
    | DeletePostType
    | SavePhotoSuccessType
    | GetCaptchaUrlType
    | ErrorActionType


let store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export type ReducerType = ReturnType<typeof rootReducer>
export type ThunkDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()

export default store