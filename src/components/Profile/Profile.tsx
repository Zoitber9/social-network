import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";




type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: ()=> void
    updateNewPostText: (newText: string)=> void
}



const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}  />
        </div>
    )
}
export default Profile