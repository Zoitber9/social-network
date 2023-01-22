import React from 'react';
import './index.css';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export const rerenderEntireThree= () => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />
        ,
        document.getElementById('root')
    );
}


rerenderEntireThree()
subscribe(rerenderEntireThree)