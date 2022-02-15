import React from "react";
import { NavLink } from "react-router-dom";

import cls from "./Header.module.css"

const baseUrl: string = ''

const Header = () => {
    return (
        <div className={cls.headerWrapper}>
            <NavLink to={baseUrl + "/home"}>Home</NavLink>
            <NavLink to={baseUrl + "/my-recipes"}>My recipes</NavLink>
            <NavLink to={"/redactor"}>New recipe</NavLink>
        </div>
    )
}
export default Header