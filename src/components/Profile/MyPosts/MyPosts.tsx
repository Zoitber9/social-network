import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {InitialStateProfileType} from '../../../redux/profile-reducer';
 
export type PostsPropsType = {
    profilePage: InitialStateProfileType
    updateNewPostText: (text: string)=> void
    addPost: ()=> void

}

const MyPosts: React.FC<PostsPropsType> = (props:PostsPropsType) => {
    let postsElements = props.profilePage.posts.map((i) => {
            return (
                <Post key={i.id} id={i.id}  message={i.message} like={i.likesCount}/>
            )
        }
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text: string = newPostElement!.current!.value
        props.updateNewPostText(text)

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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts