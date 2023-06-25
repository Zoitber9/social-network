import React from 'react';
import {connect} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {
    follow, getUsers, setCurrentPage, unFollow, UserType
} from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {withAuthRedirect} from "../../../src/components/hoc/WithAuthRedirect";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type UsersAPIComponentPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersAPIComponentPropsType, {}> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}

                />
            </>

        );
    }
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default withAuthRedirect(connect(mapStateToProps, {
    follow, unFollow,
    setCurrentPage,
    getUsers
})(UsersContainer))