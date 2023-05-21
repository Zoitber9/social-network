import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

type DataType = {
    resultCode: number
    messages: null
    data: {
        id: number
        email: string
        login: string
    }
}

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);