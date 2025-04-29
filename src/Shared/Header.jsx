import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import './Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AuthContext } from '../ContextAPI/AuthProvider';
import { FaRegUser } from "react-icons/fa";
import Swal from 'sweetalert2';


const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };
    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    const handleLogOut = () => {
        Swal.fire({
            title: "Log out Accout?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                .then(res =>  {
                    console.log(res)
                    Swal.fire({
                        title: "Log Out!",
                        text: "Your Account log out Successfull.",
                        icon: "success"
                      });
                      setIsSidebarOpen(false);
                })
              
            }
          });
    }
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
            {user ? <li>
                <NavLink
                    to="/dashboard"
                    className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#a6e3b4] before:transition-all before:duration-300 hover:before:w-full capitalize"
                >
                    Dashboard
                </NavLink>
            </li> : <li>
                <NavLink
                    to="/login"
                    className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#a6e3b4] before:transition-all before:duration-300 hover:before:w-full capitalize"
                >
                    Log In
                </NavLink>
            </li>}
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
            <div className="navbar-end gap-6 lg:gap-6 ">
                <div className='hidden md:flex'>
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
                {user ? (
                    <>
                        {/* User Avatar */}
                        <div
                            title={user.displayName || 'user'}
                            className='bg-white border p-1 rounded-full border-green-500 cursor-pointer z-50'
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            {!user.photoURL ? (
                                <span className='text-2xl'><FaRegUser /></span>
                            ) : (
                                <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full object-cover' />
                            )}
                        </div>

                        {/* Sidebar Overlay */}
                        {isSidebarOpen && (
                            <div className="fixed inset-0 bg-black/40 z-40"></div>
                        )}

                        {/* Sidebar Content (Right Side) */}
                        <div
                            ref={sidebarRef}
                            className={`fixed top-0 right-0 h-screen w-64  bg-white shadow-lg z-50 p-6 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            {/* <h2 className="text-xl font-bold mb-4">Welcome, {user.displayName || 'User'}!</h2> */}
                            <div className=''>
                                {!user.photoURL ? (
                                    <p className='text-2xl w-10 h-10 flex items-center justify-center border rounded-full'><FaRegUser /></p>
                                ) : (
                                    <img src={user.photoURL} alt="user" className='rounded-full w-10 h-10 object-cover' />
                                )}
                                 {!user.displayName ? (
                                <p className=' text-gray-500 pb-4 ml-1 '>User</p>
                            ) : (
                                <p className='text-gray-500 pb-4 ml-1'>{user.displayName}</p>
                            )}
                            </div>
                            <hr />
                            <ul className="space-y-4 mt-4 text-gray-500">
                                <li><Link  onClick={() => setIsSidebarOpen(false)}>My Account</Link></li>
                                <li><Link  onClick={() => setIsSidebarOpen(false)}></Link>Check Out</li>
                                <li><Link  onClick={() => setIsSidebarOpen(false)}>My Wishlist</Link></li>
                                <button onClick={handleLogOut} className="btn btn-outline btn-success w-full hover:text-white">Log Out</button>
                            </ul>
                        </div>

                    </>
                ) : (
                    <div>
                        <Link to={'/sign-up'}>
                            <button className="btn btn-outline hover:text-white btn-success rounded-full">Sign Up</button>
                        </Link>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Header;
