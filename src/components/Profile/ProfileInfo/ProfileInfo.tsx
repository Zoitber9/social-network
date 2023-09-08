import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../redux/profile-reducer";
import ava from '../../../assets/images/userPhoto.png'

type ProfileInfoType = {
    profile:  ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: FileList | null)=>void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile,status, updateStatus, isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>)=> {
        console.log(e.target.files)
        if(e.target.files && e.target.files.length) {
            savePhoto(e.target.files)
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.content_image_photo} src={profile.photos.small || ava} alt="avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
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