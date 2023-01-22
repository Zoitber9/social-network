import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import { StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
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
                            profilePage={props.store.state.profilePage}
                            addPost={props.store.addPost.bind(props.store)}
                            updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        />}
                        />
                        <Route path='/dialogs'
                               element={<Dialogs
                                   dialogsMessages={props.store.state.messagesPage}
                               />}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;