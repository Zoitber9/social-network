import {ActionType} from './redux-store';

let initialState = {
    friends: [
        {id: 1, name: 'Aleks', img: 'IMG'},
        {id: 2, name: 'John', img: 'IMG'},
        {id: 3, name: 'Lola', img: 'IMG'},
    ]
}

type InitialStateSidebarType = typeof initialState
const sidebarReducer = (state: InitialStateSidebarType = initialState, action: ActionType): InitialStateSidebarType => {
    return state
}

export default sidebarReducer