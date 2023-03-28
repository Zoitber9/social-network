import {ActionType} from './redux-store';

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUserACType = ReturnType<typeof setUserAC>

export type InitialStateUsersType = {
    users: Array<UserType>
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
    users: []
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {
                    ...u,
                    followed: false
                } : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {
                    ...u,
                    followed: true
                } : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({
    type: 'UNFOLLOW',
    userId
} as const)

export const setUserAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users

} as const)

export default usersReducer