import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import App from "./App";

// type StateIndexType = {
//     state: StateType
//
// }

export const rerenderEntireThree= (state: StateType) => {
    ReactDOM.render(

            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        ,
        document.getElementById('root')
    );
}

