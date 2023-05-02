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
    isAuth: false
}

type ActionType = any

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
export type setUserDataACType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}


export default authReducer