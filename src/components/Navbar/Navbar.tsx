import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) =>
                    isActive ? s.active : undefined
                }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) =>
                    isActive ? s.active : undefined} to="/dialogs">Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) =>
                    isActive ? s.active : undefined} to="/users">Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) =>
                    isActive ? s.active : undefined}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="music" className={({isActive}) =>
                    isActive ? s.active : undefined}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='setting' className={({isActive}) =>
                    isActive ? s.active : undefined}>Setting</NavLink>
            </div>
        </nav>
    )
}
export default Navbar