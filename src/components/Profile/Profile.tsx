import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div> <img className={s.ProfileImg} alt={'Profile Img'}  src={"https://pibig.info/uploads/posts/2022-08/thumbs/1659391395_51-pibig-info-p-krasivii-gradientnii-fon-krasivo-51.jpg"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile