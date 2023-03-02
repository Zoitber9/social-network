import React from 'react';
// import {ActionType, profilePageType,} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ReducerType, StoreType} from '../../../redux/redux-store';

export type PostsPropsType = {
    store: StoreType

}

const MyPostsContainer: React.FC<PostsPropsType> = (props: PostsPropsType) => {
    debugger
    let state= props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts
            profilePage={state.profilePage}
            updateNewPostText={onPostChange}
            addPost={addPost}


        />
    )
}
export default MyPostsContainer