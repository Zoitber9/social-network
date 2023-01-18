import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";




type ProfilePropsType = {
    posts: PostsType[]
    addPost:(postMessage: string)=> void
}



const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     posts={props.posts} />
        </div>
    )
}
export default Profile