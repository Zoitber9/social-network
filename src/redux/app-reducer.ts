import {ActionType, ThunkDispatchType} from './redux-store';
import {getAuthUserData} from './auth-reducer';

let initialState: InitialStateAuthType = {
    initialized: false,
    error: null
}

const appReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        case 'ERROR_SUCCESS':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

export const errorAction = (error: string) => {
    return {
        type: 'ERROR_SUCCESS',
        error
    } as const
}

    export const initializeApp = () => (dispatch: ThunkDispatchType) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }

// Types
    export type InitialStateAuthType = {
        initialized: boolean
        error: null | string
    }

    export type InitializedSuccessACType = ReturnType<typeof initializedSuccess>
    export type ErrorActionType = ReturnType<typeof errorAction>


    export default appReducer