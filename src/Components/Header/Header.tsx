import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleLanguageSelect } from "../../Store/Slices/Global/globalSlice";

interface HeaderProps {
    language: string;
}

const Header = ({ language }: HeaderProps) => {

    const clickHandler = () => {
        const element = document.getElementById('navMenu')
        console.log(element)
        if (element && element.style.display === "none") {
            element.style.display = "block"
        }
        else if (element && element.style.display !== "none") {
            element.style.display = "none"
        }
    }

    const dispatch = useDispatch();

    return (
        <header
            className="bg-bg1 border-gray-200 px-2 sm:px-4 py-3.5">

            <div className="container flex flex-wrap items-center justify-between mx-auto">

                <div className="flex">
                    <span className="self-center text-lg font-semibold text-white whitespace-nowrap ">Liquid calculator</span>
                </div>

                <button type="button"
                    onClick={() => clickHandler()}
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">

                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>

                <nav className="hidden w-full md:block md:w-auto" id="navMenu">
                    <ul className="flex flex-col mt-4 text-gray-400 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium ">
                        <li>
                            <NavLink to={"/my-recipes"}
                                className="block py-2 pl-3 pr-4 border-gray-700 hover:text-white md:hover:bg-transparent">
                                {language === 'ru' ?
                                    "?????? ??????????????"
                                    : "My recipes"
                                }

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/redactor"}
                                className="block py-2 pl-3 pr-4 border-gray-700 hover:text-white md:hover:bg-transparent">
                                {language === 'ru' ?
                                    "????????????????"
                                    : "Redactor"
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}
                                className="block py-2 pl-3 pr-4 border-gray-700 hover:text-white md:hover:bg-transparent">
                                {language === 'ru' ?
                                    "?? ??????????????"
                                    : "About"
                                }
                            </NavLink>
                        </li>
                        <li className='flex content-center'>
                            <select value={language} onChange={(event) => dispatch(handleLanguageSelect(event.currentTarget.value))}
                                className='px-2 font-medium text-center rounded  bg-bg2 w-min focus:outline-none focus:border-2 focus:border-bg1'>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
export default Header