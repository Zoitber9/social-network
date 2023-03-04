import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {ReducerType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, InitialStateUsersType, setUserAC, unFollowAC, UserType} from '../../redux/users-reducer';

type MapStatePropsType = {
    usersPage: InitialStateUsersType
}

type MapDispatchToPropsType = {
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
    setUsers: (users: UserType[])=> void
}


const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUserAC(users))
        }

    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(Users)
// export default UsersContaier