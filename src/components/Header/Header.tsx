import React from "react";
import s from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"}/>
        </header>
    )
}
export default Header