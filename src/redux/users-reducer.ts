import {ActionType} from './redux-store';
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type FollowACType = ReturnType<typeof followSuccess>
export type UnFollowACType = ReturnType<typeof unFollowSuccess>
export type SetUserACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingInProgressACType = ReturnType<typeof toggleIsFollowingInProgress>

export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 6,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {
                    ...u,
                    followed: true
                } : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {
                    ...u,
                    followed: false
                } : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(i => i !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowSuccess = (userId: number) => ({
    type: 'UNFOLLOW',
    userId
} as const)

export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
} as const)
export const toggleIsFollowingInProgress = (userId: number, isFetching: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    userId,
    isFetching
} as const)

export const requestUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingInProgress(userId, true))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingInProgress(userId, false))
        })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingInProgress(userId, true))
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleIsFollowingInProgress(userId, false))
        })
    }
}


export default usersReducer