import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUsersProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


type PathParamsType = {
    userId: string | undefined
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserID: number | null
    isAuth: boolean

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
            userId = String(this.props.authorizedUserID)
            if (!userId) {
                this.props.history.push('/login')
            }
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
    status: state.profilePage.status,
    authorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth,

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)