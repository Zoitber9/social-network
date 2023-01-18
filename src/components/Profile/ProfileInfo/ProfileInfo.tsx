import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div>
                <img className={s.ProfileImg} alt={'Profile Img'}
                      src={"https://pibig.info/uploads/posts/2022-08/thumbs/1659391395_51-pibig-info-p-krasivii-gradientnii-fon-krasivo-51.jpg"}/>
            </div>
            <div >
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo