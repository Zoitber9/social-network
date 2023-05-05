import React from 'react';
import s from './users.module.css';
import {UserType} from "../../redux/users-reducer";
import UserAvatar from '../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    toggleIsFollowingInProgress: (userId: number, isFetching: boolean)=>void
    followingInProgress: Array<number>
}

const Users = (props: UsersPropsType) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= 20; i++) {

            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                            return <span onClick={() => {
                                props.onPageChanged(p)
                            }} className={props.currentPage === p
                                ? s.selectedPage + ' ' + s.numberPage : s.numberPage}>{p} </span>
                        }
                    )}

                </div>
                {props.users.map((i) => {
                    const follow = () => {
                        props.toggleIsFollowingInProgress(i.id, true)
                        usersAPI.follow(i.id).then(data => {
                            if(data.resultCode === 0) {
                                props.follow(i.id)
                            }
                            props.toggleIsFollowingInProgress(i.id, false)
                        })
                    }
                    const unFollow = () => {
                        props.toggleIsFollowingInProgress(i.id, true)
                        usersAPI.unfollow(i.id).then(data => {
                            if(data.resultCode === 0) {
                                props.unFollow(i.id)
                            }
                            props.toggleIsFollowingInProgress(i.id, false)
                        })
                        props.unFollow(i.id)
                    }

                    return (<div key={i.id} className={s.user_container}>
                            <div className={s.user_img_btn}>
                                <div>
                                    <NavLink to={'/profile/' + i.id}>
                                        <img className={s.image} src={i.photoURL ? i.photoURL : UserAvatar}
                                             alt="UserAvatar"/>
                                    </NavLink>
                                </div>
                                {i.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === i.id)}
                                              className={s.button} onClick={unFollow}>UNFOLLOW</button>
                                    : <button disabled={props.followingInProgress.some(id => id === i.id)}
                                              className={s.button} onClick={follow}>FOLLOW</button>
                                }
                            </div>
                            <div className={s.info}>
                                <div className={s.info_name_status}>
                                    <div className={s.userName}>{i.fullName}</div>
                                    <div>{i.status}</div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        );
    }
;

export default Users;