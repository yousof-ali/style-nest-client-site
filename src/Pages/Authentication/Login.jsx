import React, { useContext, useState } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../assets/images/login.jpg";
import loginBg from "../../assets/images/loginBg.jpg";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialLogin from './SocialLogin';

import { AuthContext } from '../../ContextAPI/AuthProvider';
import { FiLoader } from 'react-icons/fi';
import CaptchaModal from './CaptchaModal';



const Login = () => {
    const { loginUserWithEmail } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);
    const [err, setError] = useState('')
    const [showCaptchaModal, setShowCaptchaModal] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleShowPass = () => setShowPass(!showPass);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setError('');
        setFormData(data);
        setShowCaptchaModal(true);
    }

    const handleCaptchaVerified = (token) => {
        setCaptchaVerified(true);
        setShowCaptchaModal(false);
        if (formData) {
            setBtnLoader(true);
            loginUserWithEmail(formData.email, formData.password)
            .then(res => {
                console.log(res.user)
                setBtnLoader(false);
            })
            .catch((err) => {
                setError('Invalid Email or Password!');
                console.log(err.message);
                setBtnLoader(false);
            })
        }

    }

    const handleForgatePass = () => { }

    AOS.init();

    console.log(errors);


    return (
        <>
            {showCaptchaModal && <CaptchaModal onVerified={handleCaptchaVerified}></CaptchaModal>}
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
                            <p onClick={handleForgatePass} className='font-light border-0 cursor-pointer m-0 p-0 btn btn-link text-gray-500'>Forgate password?</p>
                        </div>

                        {/* Submit Button */}
                        {
                            err && <p className='text-sm font-light text-red-400'>{err}</p>
                        }
                        <button
                            // disabled={!captchaToken}
                            type="submit"
                            className="w-full btn bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
                        >
                            {btnLoader && <FiLoader className="text-2xl animate-spin  text-white" />}Log In
                        </button>
                    </form>
                    <div className='px-8 mb-8'>
                        <p className='text-gray-400 text-sm'>If you have no account, please <Link to={'/sign-up'} className='text-green-400 font-semibold underline ml-2'>Create Account</Link></p>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;