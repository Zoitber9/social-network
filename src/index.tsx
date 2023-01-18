import React from 'react';
import './index.css';
import {rerenderEntireThree} from "./render";
import state from "./redux/state";


// let rerenderEntireThree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state}
//                  addPost={addPost}
//             />
//         </BrowserRouter>
//         ,
//         document.getElementById('root')
//     );
// }


rerenderEntireThree(state)
