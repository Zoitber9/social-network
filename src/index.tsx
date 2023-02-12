import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.state}
             dispatch={store.dispatch.bind(store)}/>
        ,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)