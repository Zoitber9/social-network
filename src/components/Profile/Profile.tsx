import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import {ProfileType} from "../../../src/redux/profile-reducer";
import {ProfileFormDataType} from "../../components/Profile/ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: FileList | null) => void
    saveProfile: (formData: ProfileFormDataType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile