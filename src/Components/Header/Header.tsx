import React from "react";
import {Link} from "react-router-dom";

import cls from "./Header.module.css"

const baseUrl: string = ''

const Header = () => {
    return (
        <div className = {cls.headerWrapper}>
           <Link to={baseUrl + "/home"}>Home</Link>
           <Link to={baseUrl +"/my-recipes"}>My recipes</Link>
           <Link to={baseUrl +"/redactor?n=new-recipe"}>New recipe</Link>
        </div>
    )
}
export default Header