import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"}
                alt={'img'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'./login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header