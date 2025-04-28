import React, { useState } from 'react';
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../assets/images/login.jpg";
import loginBg from "../../assets/images/loginBg.jpg";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => setShowPass(!showPass);

    return (
        <div className="min-h-screen flex items-center justify-center  px-6 py-10"
        style={{
            backgroundImage: `url(${loginBg})`,
            backgroundPosition: 'center',
            backgroundSize:'cover'
        }}
        >
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Top Banner */}
                <div className="relative">
                    <img src={login} alt="Sign Up" className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">CREATE AN ACCOUNT</h2>
                    </div>
                </div>

                {/* Form Section */}
                <form className="px-8 py-6 space-y-6">
                    {/* Full Name */}
                    <div className="relative">
                        <RiAccountCircleLine className="absolute top-4 left-3 text-2xl text-gray-400" />
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <MdOutlineMail className="absolute top-4 left-3 text-2xl text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <RiLockPasswordLine className="absolute top-4 left-3 text-2xl text-gray-400" />
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        <div
                            onClick={handleShowPass}
                            className="absolute top-4 right-3 text-2xl text-gray-400 cursor-pointer"
                        >
                            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className='px-8 mb-8'>
                    <p className='text-gray-400'>If you have an account, please <Link className='text-green-400 font-semibold underline ml-2'>Login Here</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;
