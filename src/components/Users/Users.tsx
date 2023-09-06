import React from 'react';
import s from './users.module.css';
import {UserType} from "../../redux/users-reducer";
import Paginator from "../../common/paginator/paginator";
import User from "../../components/Users/User";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    followingInProgress: Array<number>
}

const Users: React.FC<UsersPropsType> = (props) => {
    let {currentPage, onPageChanged, totalUsersCount, pageSize, ...rest} = props
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            {props.users.map((i) => <User
                    user={i}
                    followingInProgress={props.followingInProgress}
                    unFollow={props.unFollow}
                    follow={props.follow}
                />
            )
            }
        </div>
    );
};

export default Users;