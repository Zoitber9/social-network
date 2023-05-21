import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {withRouter} from 'react-router-dom';
import {getUsersProfile} from "../../redux/profile-reducer";


type ProfileContainerType = {
    getUsersProfile: (userId: number) => void
    profile: any
    match: any
}

class ProfileContainer extends React.Component<ProfileContainerType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 27692
        }
        this.props.getUsersProfile(userId)
    }


    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: ReducerType) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect(mapStateToProps, {
    getUsersProfile
})(withUrlDataContainerComponent)