import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import './Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className="relative  before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#a6e3b4] before:transition-all before:duration-300 hover:before:w-full capitalize"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/collections"
                    className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#a6e3b4] before:transition-all before:duration-300 hover:before:w-full capitalize"
                >
                    Collections
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#a6e3b4] before:transition-all before:duration-300 hover:before:w-full capitalize"
                >
                    Log In
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar lg:p-4 lg:px-12 shadow bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <Link >
                        <div className=" flex items-center gap-1">
                            <span className='text-xl'><HiOutlineShoppingBag /></span>
                            <p>My Cart</p>
                            <p className='bg-pink-400 text-white rounded-full p-1'>+0</p>
                            
                        </div>

                    </Link>
                    </ul>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className=" flex gap-6 font-semibold  px-1">
                        {links}
                        
                    </ul>
                </div>
                <a className="cursor-pointer normal-case text-xl md:hidden">
                    <img src="/logo.png" className="w-44" alt="logo" />
                </a>
            </div>
            <a className="hidden cursor-pointer md:flex  normal-case text-xl">
                <img src="/logo.png" className="w-44" alt="logo" />
            </a>
            <div className="navbar-end gap-6 lg:gap-6">
                <div className=''>
                    <Link><span className='flex items-center gap-2'><span className='text-xl'><CiSearch /></span> Search
                    </span></Link>
                </div>
                <div className='hidden  lg:flex'>
                    <Link >
                        <div className=" flex items-center gap-1">
                            <span className='text-xl'><HiOutlineShoppingBag /></span>
                            <p>My Cart</p>
                            <p className='bg-pink-400 text-white rounded-full p-1'>+0</p>
                            
                        </div>

                    </Link>
                </div>
                <div>
                    <Link to={'/sign-up'}><button class="btn btn-outline hover:text-white btn-success rounded-full">Sign Up</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Header;
