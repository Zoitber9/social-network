import {AppRootStateType, ReducerType} from "../redux/redux-store";
import {createSelector} from "reselect";

export const getUsers = (state:  ReducerType) => {
    return state.usersPage.users
}
export const getUsersSuper = createSelector(getUsers, (users)=>{
    return users.filter(u=> true)
})

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}