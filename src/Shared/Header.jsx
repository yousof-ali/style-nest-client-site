import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/collections'}>Collections</NavLink>
        </li>

    </>
    return (
        <div className="navbar lg:p-8 lg:px-12  bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul className="menu hidden lg:flex menu-horizontal px-1">
                        {links}
                    </ul>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn md:hidden btn-ghost text-xl">StyleNest</a>
            </div>
            <a className="btn hidden md:flex btn-ghost text-xl">dgdg</a>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu lg:hidden menu-horizontal px-1">
                    {links}
                </ul>
                
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;