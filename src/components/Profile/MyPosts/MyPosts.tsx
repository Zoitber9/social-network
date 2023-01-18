import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type PostsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts: React.FC = () => {
    let postsData:  PostsType [] = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hou are yuo?',  likesCount: 7},
        {id: 3, message: 'Im faind',  likesCount: 5},
    ]
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
                {postsData.map((i)=> {
                    return (
                        <Post id={i.id} message={i.message} like={i.likesCount}/>
                    )}
                )}
            </div>
        </div>
    )
}
export default MyPosts