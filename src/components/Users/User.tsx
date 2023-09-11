import React from 'react';
import s from './users.module.css';
import userPhoto
    from '../../assets/images/userPhoto.png';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<UserPropsType> = ({user, followingInProgress, unFollow, follow}) => {
    const followHandler = () => {
        follow(user.id)
    }
    const unFollowHandler = () => {
        unFollow(user.id)
    }
    return (
        <div key={user.id} className={s.user_container}>
            <div className={s.user_img_btn}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.image} src={user.photos.small ? user.photos.small : userPhoto}
                             alt="UserAvatar"/>
                    </NavLink>

                </div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              className={s.button} onClick={unFollowHandler}>UNFOLLOW</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              className={s.button} onClick={followHandler}>FOLLOW</button>
                }
            </div>
            <div className={s.info}>
                <div className={s.info_name_status}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
            </div>

        </div>
    );
};

export default User;