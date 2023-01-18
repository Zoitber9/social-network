import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, StateType} from "./redux/state";


type StateIndexType = {
    state: StateType
    addPost: () => void
}

ReactDOM.render(
    <App state={state}
         addPost={addPost}/>
    ,
    document.getElementById('root')
);