import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../redux/profile-reducer";
import ava from '../../../assets/images/userPhoto.png'



type ProfileInfoType = {
    profile:  ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile,status, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.content_image_photo} src={profile.photos.small || ava} alt="avatar"/>
                <ProfileStatus
                    status={status}
                    updateStatus={updateStatus}
                />
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo