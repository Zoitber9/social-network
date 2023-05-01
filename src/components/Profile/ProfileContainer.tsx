import React from "react";
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';

import {withRouter} from 'react-router-dom';
import {setUsersProfile} from "../../redux/profile-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '638472be-ebe8-4dca-bfc2-4bba00a107d7'
    },
})


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 26371
        }
        instance.get(`profile/` + userId).then(response => {
            // console.log(response.data)
            this.props.setUsersProfile(response.data)
        })
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile
})(withUrlDataContainerComponent)