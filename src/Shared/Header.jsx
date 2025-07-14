import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { ShoppingCart, AlignJustify } from 'lucide-react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import { FaRegUser } from "react-icons/fa";
import Swal from 'sweetalert2';
import './Header.css';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogOut = () => {
        Swal.fire({
            title: "Log out Account?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser().then(() => {
                    Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
                    setIsMobileMenuOpen(false);
                });
            }
        });
    };

    const links = (
        <>
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/collections" className="nav-link">Collections</NavLink></li>
            {user && <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>}
            {!user && <li><NavLink to="/login" className="nav-link">Log In</NavLink></li>}
        </>
    );

    return (
        <div className="w-full fixed  top-0 z-50 bg-base-100">
            <div className="navbar max-w-7xl mx-auto lg:py-4 flex items-center justify-between">
                {/* Mobile Menu Button + Logo */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="text-2xl">
                        <AlignJustify />
                    </button>
                    <Link to="/" className="normal-case text-xl">
                        <img src="/logo.png" className="w-36" alt="logo" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="navbar-start hidden lg:flex">
                    <ul className="flex gap-6 font-semibold px-1 text-sm text-gray-600">
                        {links}
                    </ul>
                </div>

                {/* Desktop Logo */}
                <Link to="/" className="hidden md:flex normal-case text-xl">
                    <img src="/logo.png" className="w-48" alt="logo" />
                </Link>

                {/* Right Side */}
                <div className="navbar-end gap-4 lg:gap-6">
                    <div className="hidden md:flex">
                        <Link to="#">
                            <span className="flex items-center gap-2">
                                <span className="text-xl"><CiSearch /></span> Search
                            </span>
                        </Link>
                    </div>
                    {user ? (
                        <>
                            <Link>
                                <span className="text-xl text-gray-600"><ShoppingCart /></span>
                            </Link>
                            <div title={user.displayName || 'User'}>
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full object-cover p-0.5 border border-green-500" />
                                ) : (
                                    <span className="text-2xl"><FaRegUser /></span>
                                )}
                            </div>
                        </>
                    ) : (
                        <Link to="/sign-up">
                            <button className="btn btn-neutral
                            btn-outline ">Sign Up</button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Sidebar (Mobile Menu) */}
            {isMobileMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div
                        ref={menuRef}
                        className="fixed top-0 left-0 h-screen w-72 bg-white z-50 p-6 transition-transform duration-300"
                    >
                        <div className="mb-6 border-b border-b-[#5da82b]">
                            <img src="/logo.png" className="w-36" alt="logo" />
                            
                        </div>

                        <ul className="space-y-4 text-gray-700 font-medium text-sm">
                            {links}
                            {user && (
                                <>
                                    <li><Link onClick={() => setIsMobileMenuOpen(false)}>My Account</Link></li>
                                    <li><Link onClick={() => setIsMobileMenuOpen(false)}>Check Out</Link></li>
                                    <li><Link onClick={() => setIsMobileMenuOpen(false)}>My Wishlist</Link></li>
                                    <li>
                                        <button onClick={handleLogOut} className="btn btn-outline btn-neutral">
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
