import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import {ProfileType} from "../../../src/redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile: React.FC<ProfilePropsType> = (props ) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile