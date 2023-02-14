import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogReducer,
        sidebar: sidebarReducer
    }
)

export const store = createStore(reducers)