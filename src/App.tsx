import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route,} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useAppDispatch, useAppSelector} from "../src/redux/redux-store";
import Preloader from "../src/common/preloader/preloader";
import {initializeApp} from '../src/redux/app-reducer';
import {withSuspense} from "./hoc/withSuspence";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        !initialized ? <Preloader/>
            :
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    {/*<Route  path={'./'} render={()=> <NavLink to="/profile"} />*/}
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={() => <Login/>}/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}
                </div>
            </div>
    )
}

export default App;