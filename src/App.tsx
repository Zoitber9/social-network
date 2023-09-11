import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch,} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useAppDispatch, useAppSelector} from "../src/redux/redux-store";
import Preloader from "../src/common/preloader/preloader";
import {errorAction,initializeApp} from '../src/redux/app-reducer';
import {withSuspense} from "./hoc/withSuspence";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)

    const catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        dispatch(errorAction(promiseRejectionEvent.reason))
    }

    useEffect(() => {
        dispatch(initializeApp())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
        }
    }, [dispatch])

    return (
        !initialized ? <Preloader/>
            :
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to="/profile"/>}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        <Route path="/login" render={() => <Login/>}/>
                        {/*<Route path=# component={News}/>*/}
                        {/*<Route path='/dialogs' component={Music}/>*/}
                        <Route path="*" render={() => <div>404 Not Found</div>}/>
                    </Switch>


                </div>
            </div>


    )

}

export default App;