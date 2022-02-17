import React from "react";
import { NavLink } from "react-router-dom";

import cls from "./Header.module.css"

const baseUrl: string = ''

const Header = () => {
    const clickHandler = () => {
        const element = document.getElementById('mobile-menu')
        if (element && element.style.display === "none") {
            element.style.display = "block"
        }
        else if (element && element.style.display !== "none") {
            element.style.display = "none"
        }
    }
    return (
        <nav className="bg-bg1 border-gray-200 px-2 sm:px-4 py-3.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex">
                    <span className="self-center text-lg text-white font-semibold whitespace-nowrap dark:text-white">Liquid calculator</span>
                </div>
                <button type="button" onClick={() => clickHandler()} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu ">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium text-gray-400 ">
                        <li>
                            <NavLink to={"/home"} className="block py-2 pr-4 pl-3 hover:text-white md:hover:bg-transparent border-gray-700">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/my-recipes"} className="block py-2 pr-4 pl-3 hover:text-white md:hover:bg-transparent border-gray-700">My recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/redactor"} className="block py-2 pr-4 pl-3 hover:text-white md:hover:bg-transparent border-gray-700">New recipe</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header