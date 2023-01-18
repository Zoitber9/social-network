import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


// type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }

export type PostsPropsType = {
    posts: PostsType[]
}

// const MyPosts: React.FC< PostsPropsType> = (props) => {
//
//




const MyPosts: React.FC<PostsPropsType> = (props) => {
    let postsElements = props.posts.map((i)=> {
        return (
            <Post id={i.id} message={i.message} like={i.likesCount}/>
        )})
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts