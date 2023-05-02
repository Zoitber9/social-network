import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '638472be-ebe8-4dca-bfc2-4bba00a107d7'
    },
})

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        instance.get('auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {login, id, email} = res.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setUserData})(HeaderContainer);