import {ActionType, ProfilePageType, updateNewPostTextACType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = (action.newText)
            return state;
        default:
            return state;
    }
}

export let addPostAC = () => ({type: 'ADD-POST'} as const)
export let updateNewPostTextAC = (text: string): updateNewPostTextACType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)

export default profileReducer