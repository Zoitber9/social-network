import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/state";


type PropsType = {
    state: StateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts}/>}/>
                        <Route path='/dialogs' element={<Dialogs
                            dialogsMessages={props.state.messagesPage}/>}/>
                        {/*<Route path=# component={News}/>*/}
                        {/*<Route path='/dialogs' component={Music}/>*/}
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;