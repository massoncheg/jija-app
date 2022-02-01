import React from "react";
import {Link} from "react-router-dom";

import cls from "./Header.module.css"

const Header = () => {
    return (
        <div className = {cls.headerWrapper}>
           <Link to="/home">Home</Link>
           <Link to="/my-recipes">My recipes</Link>
           <Link to="/redactor?n=new-recipe">New recipe</Link>
        </div>
    )
}
export default Header