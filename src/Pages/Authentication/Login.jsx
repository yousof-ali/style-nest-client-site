import React, { useEffect, useState } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../assets/images/login.jpg";
import loginBg from "../../assets/images/loginBg.jpg";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReCAPTCHA from 'react-google-recaptcha';
import SocialLogin from './SocialLogin';



const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [captchaToken,setCaptchaToken] = useState(null)

    const handleShowPass = () => setShowPass(!showPass);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token)
    }

    AOS.init();


    return (
        <div className="min-h-screen flex items-center justify-center  px-6 py-10"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Top Banner */}
                <div className="relative">
                    <img src={login} alt="Sign Up" className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 data-aos='fade-up' data-aos-duration="2000" className="text-2xl md:text-2xl font-bold text-white">LOGIN AN ACCOUNT</h2>
                    </div>
                </div>
                <SocialLogin></SocialLogin>

                {/* Form Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-6 space-y-6">


                    {/* Email */}
                    <div className="relative">
                        <MdOutlineMail className="absolute top-4 left-3 text-2xl text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            {...register('email', { required: true })}
                            id="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        {errors.email?.type === 'required' && <p className='text-sm font-light text-red-400 pt-1'>Email is required !</p>}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <RiLockPasswordLine className="absolute top-4 left-3 text-2xl text-gray-400" />
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            {...register('password', { required: true })}
                            id="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        {errors.password?.type === 'required' && <p className='text-sm font-light text-red-400 pt-1'>Password is required !</p>}
                        <div
                            onClick={handleShowPass}
                            className="absolute top-4 right-3 text-2xl text-gray-400 cursor-pointer"
                        >
                            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ReCAPTCHA
                            sitekey={import.meta.env.VITE_SITE_KEY}
                            onChange={handleCaptchaChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={!captchaToken}
                        type="submit"
                        className="w-full btn bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                <div className='px-8 mb-8'>
                    <p className='text-gray-400 text-sm'>If you have no account, please <Link to={'/sign-up'} className='text-green-400 font-semibold underline ml-2'>Create Account</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;