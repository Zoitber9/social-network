import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import ava from '../../../assets/images/userPhoto.png'

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: FileList | null) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files)
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.content_image_photo} src={profile.photos.small || ava} alt="avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ?
                    <ProfileDataForm profile={profile}/>
                    :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }
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


type ProfileDataFormPropsType = {
    profile: ProfileType
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key, ind) => {
                <Contact key={ind} contactValue={profile.contacts} contactTitle={key}/>
            })}
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}></button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key, ind) => {
                <Contact key={ind} contactValue={profile.contacts} contactTitle={key}/>
            })}
            </div>
        </div>
    )
}

type Props = {
    contactTitle: string
    contactValue: ContactsType
}

export const Contact: FC<Props> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}