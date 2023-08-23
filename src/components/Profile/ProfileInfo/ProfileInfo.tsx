import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../redux/profile-reducer";


type ProfileInfoType = {
    profile:  ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div><img*/}
            {/*    src={"https://pibig.info/uploads/posts/2022-08/thumbs/1659391395_51-pibig-info-p-krasivii-gradientnii-fon-krasivo-51.jpg"}*/}
            {/*    alt={'photo'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
              <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo