import React from "react";
import Profile from './Profile';
import {connect, MapStateToProps} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {RouteComponentProps ,withRouter} from 'react-router-dom';
import {getUsersProfile, ProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../../src/components/hoc/WithAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string | undefined
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType = {
    getUsersProfile: (userId: number) => void
    profile: any
    match: any
}

type MapStateToPropsType = {
    profile: ProfileType | null

}

type MapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 27692
        }
        this.props.getUsersProfile(+userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: ReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile,

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)