import React from "react";
import Profile from './Profile';
import {connect, MapStateToProps} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUsersProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {withAuthRedirect} from "../../../src/components/hoc/WithAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string | undefined
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string

}

type MapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27692'
        }
        this.props.getUsersProfile(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: ReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)