import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import axios from "axios";
import {InitialStateUsersType, UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: InitialStateUsersType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersPropsType, {}> {
    constructor(props: any) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map((i) => {
                    const follow = () => {
                        this.props.follow(i.id)
                    }
                    const unFollow = () => {
                        this.props.unFollow(i.id)
                    }
                    return (<div key={i.id} className={s.user_container}>
                            <div className={s.user_img_btn}>
                                <div><img className={s.image} src={userPhoto}
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
    }
}

export default Users;