import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {ReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsTypeForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: ReducerType): MapStatePropsTypeForRedirect => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectContainer(props: MapStatePropsTypeForRedirect) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return (
            <Component {...restProps as T}/>
        );
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectContainer)

    return ConnectedAuthRedirectComponent
}