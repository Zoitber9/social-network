import React from 'react';
import s from './users.module.css';
import {UserType} from "../../redux/users-reducer";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number

}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i =1; i<= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                        return <span onClick={() => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p
                            ? s.selectedPage + ' ' + s.numberPage : s.numberPage}>{p}</span>
                    }
                )}

            </div>
            {props.users.map((i) => {
                const follow = () => {
                    props.follow(i.id)
                }
                const unFollow = () => {
                    props.unFollow(i.id)
                }

                return (<div key={i.id} className={s.user_container}>
                        <div className={s.user_img_btn}>
                            <div><img className={s.image} src={i.photoURL ? i.photoURL : 'userPhoto'}
                                      alt="UserAvatar"/></div>
                            {i.followed
                                ? <button className={s.button} onClick={follow}>FOLLOW</button>
                                : <button className={s.button} onClick={unFollow}>UNFOLLOW</button>
                            }
                        </div>
                        <div className={s.info}>
                            <div className={s.info_name_status}>
                                <div>{i.fullName}</div>
                                <div>{i.status}</div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    );
};

export default Users;