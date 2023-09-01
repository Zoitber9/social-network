import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ActionType,ThunkDispatchType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateAuthType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}


let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state;
    }
}

export type setUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number| null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email:string , password: string, rememberMe: boolean) => (dispatch:ThunkDispatchType ) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ?  response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logout = () => (dispatch: ThunkDispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false ))
            }
        })
}


export default authReducer