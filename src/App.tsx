import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route,} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Dialogs from "./components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../src/redux/redux-store";
import Preloader from "../src/common/preloader/preloader";
import {initializeApp} from '../src/redux/app-reducer';


const App = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.app.initialized)
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return (
        !initialized ? <Preloader/>
            :
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    {/*<Route  path={'./'} render={()=> <NavLink to="/profile"} />*/}
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}

                </div>
            </div>


    )

}

export default App;