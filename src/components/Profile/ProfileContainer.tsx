import React from "react";
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ReducerType} from '../../redux/redux-store';
import {setUsersProfile} from "../../redux/profile-reducer";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '638472be-ebe8-4dca-bfc2-4bba00a107d7'
    },
})


class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        instance.get(`profile/2`).then(response => {
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

export default connect(mapStateToProps, {
    setUsersProfile
}) (ProfileContainer)