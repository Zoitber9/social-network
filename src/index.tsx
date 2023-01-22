import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

export const rerenderEntireThree = () => {
    ReactDOM.render(
        <App store={store}
             // addPost={store.addPost}
             // updateNewPostText={store.updateNewPostText}
        />
        ,
        document.getElementById('root')
    );
}

rerenderEntireThree()
store.subscribe(rerenderEntireThree)