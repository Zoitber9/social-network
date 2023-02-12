import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/state";


export type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

const MyPosts: React.FC<PostsPropsType> = (props) => {
    let postsElements = props.profilePage.posts.map((i) => {
            return (
                <Post id={i.id} message={i.message} like={i.likesCount}/>
            )
        }
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())
    }
    let onPostChange = () => {
        let text: string = newPostElement!.current!.value
        props.dispatch(updateNewPostTextAC(text))

    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                   <textarea
                       ref={newPostElement}
                       onChange={onPostChange}
                       value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts