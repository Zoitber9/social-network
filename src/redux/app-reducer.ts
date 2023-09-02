import {ActionType, ThunkDispatchType} from './redux-store';
import {getAuthUserData} from './auth-reducer';


export enum AuthActionTypes {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
}


export type InitialStateAuthType = {
    initialized: boolean
}


let initialState: InitialStateAuthType = {
    initialized: false,

}

const appReducer = (state = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case AuthActionTypes.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export type InitializedSuccessACType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: AuthActionTypes.INITIALIZED_SUCCESS,
    } as const
}
export const initializeApp = () => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData())
    promise.then(()=> {
        dispatch(initializedSuccess())
    })

}


export default appReducer