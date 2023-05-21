import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ActionType} from "./redux-store";

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
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }
}
export type setUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {login, id, email} = res.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}




export default authReducer