import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '638472be-ebe8-4dca-bfc2-4bba00a107d7'
    },
})

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        instance.get(`users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                            return <span onClick={(e) => {
                                this.onPageChanged(p)
                            }} className={this.props.currentPage === p
                                ? s.selectedPage + ' ' + s.numberPage : s.numberPage}>{p}</span>
                        }
                    )}

                </div>
                {this.props.users.map((i) => {
                    const follow = () => {
                        this.props.follow(i.id)
                    }
                    const unFollow = () => {
                        this.props.unFollow(i.id)
                    }

                    return (<div key={i.id} className={s.user_container}>
                            <div className={s.user_img_btn}>
                                <div><img className={s.image} src={i.photoURL ? i.photoURL : userPhoto}
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
    }
}

export default Users;