import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreType} from '../../../redux/redux-store';
import StoreContext from '../../../StoreContext';


const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {(store: StoreType) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                let onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts
                        profilePage={state.profilePage}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                    />
                )
            }}
        </StoreContext.Consumer>

    )
}
export default MyPostsContainer