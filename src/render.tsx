import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, StateType} from "./redux/state";
import App from "./App";

// type StateIndexType = {
//     state: StateType
//
// }

export const rerenderEntireThree= (state: StateType) => {
    ReactDOM.render(

            <App state={state}
                 addPost={addPost}
            />
        ,
        document.getElementById('root')
    );
}

