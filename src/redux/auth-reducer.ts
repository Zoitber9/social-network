import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ActionType, ThunkDispatchType} from "./redux-store";
import {stopSubmit} from "redux-form";

let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export default authReducer

//Actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA',
    payload: {id, email, login, isAuth}
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS',
    captchaUrl
} as const)

// Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
}
export const logout = () => async (dispatch: ThunkDispatchType) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: ThunkDispatchType) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}


// Types
export type InitialStateAuthType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

export type setUserDataACType = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrlSuccess>


