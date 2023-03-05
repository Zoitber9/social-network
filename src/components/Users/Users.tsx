import React from 'react';
import {InitialStateUsersType, UserType} from '../../redux/users-reducer';
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'

type UsersPropsType = {
    usersPage: InitialStateUsersType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {debugger; props.setUsers(response.data.items)}
            )
    }

    return (
        <div>
            {props.usersPage.users.map((i) => {
                const follow = () => {
                    props.follow(i.id)
                }
                const unFollow = () => {
                    props.unFollow(i.id)
                }

                return (<div key={i.id} className={s.user_container}>
                        <div className={s.user_img_btn}>
                            <div><img className={s.image} src={userPhoto }
                                      alt="UserAvatar"/></div>
                            {i.followed
                                ? <button className={s.button}
                                          onClick={follow}>FOLLOW</button>
                                : <button className={s.button}
                                          onClick={unFollow}>UNFOLLOW</button>
                            }
                        </div>
                        <div className={s.info}>
                            <div className={s.info_name_status}>
                                <div>{i.fullName}</div>
                                <div>{i.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{'i.location.country'}</div>
                                <div>{'i.location.city'}</div>
                            </div>
                        </div>


                    </div>

                )
            })}


        </div>
    );
};

export default Users;