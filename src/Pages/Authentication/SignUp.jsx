import React, { useContext, useEffect, useState } from 'react';
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../assets/images/login.jpg";
import loginBg from "../../assets/images/loginBg.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../ContextAPI/AuthProvider'
import { FiLoader } from "react-icons/fi";

const SignUp = () => {
    const { createUserWithEmail } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);
    const [progress, setProgress] = useState(0);
    const [btnLoader, setBtnLoader] = useState(false);
    const [err, setError] = useState('');

    const handleShowPass = () => setShowPass(!showPass);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setBtnLoader(true);
        setError('');
        createUserWithEmail(data.email, data.password)
            .then(res => {
                setBtnLoader(false);
                navigate("/")
                
            })
            .catch((err) => {
                if (err.message.includes("email-already-in-use")) {
                    setError('Email is already in use.');
                    setProgress(prevProgress => prevProgress - 33);
                    setBtnLoader(false);
                }
                setBtnLoader(false);
            })
    }

    const fullname = watch('fullname');
    const email = watch('email');
    const password = watch('password');

    useEffect(() => {
        let tempProgress = 0;
        if (fullname && fullname.length > 0) tempProgress += 33;
        if (email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) tempProgress += 33;
        if (password && /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-+]).{6,12}$/.test(password)) tempProgress += 34
        setProgress(tempProgress)

    }, [fullname, email, password])

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
                <div className="w-full bg-gray-200 h-2">
                    <div
                        className="bg-green-500 h-2 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                {/* Top Banner */}
                <div className="relative">
                    <img src={login} alt="Sign Up" className="w-full sm:h-48 h-34 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 data-aos='fade-up' data-aos-duration="2000" className="text-sm sm:text-2xl  md:text-2xl font-bold text-white">CREATE AN ACCOUNT</h2>
                    </div>
                </div>

                <SocialLogin></SocialLogin>

                {/* Form Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="sm:px-8 px-4 pb-6 space-y-6">
                    {/* Full Name */}
                    <div className="relative">
                        <RiAccountCircleLine className="absolute top-3 left-3 text-2xl text-gray-400" />
                        <input
                            type="text"
                            name="fullname"
                            {...register('fullname', { required: true })}
                            id="fullname"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-md sm:text-base text-sm py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        {errors.fullname?.type === 'required' && <p className='text-sm font-light text-red-400 pt-1'>Name is required !</p>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <MdOutlineMail className="absolute top-3 left-3 text-2xl text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                            id="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-md sm:text-base text-sm py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        {errors.email?.type === 'required' && <p className='text-sm font-light text-red-400 pt-1'>Email is required !</p>}
                        {errors.email?.type === 'pattern' && <p className='text-sm font-light text-red-400 pt-1'>Give a valid email type!</p>}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <RiLockPasswordLine className="absolute top-3 left-3 text-2xl text-gray-400" />
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            {...register('password', { required: true, minLength: 6, maxLength: 12, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-+]).+$/ })}
                            id="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md sm:text-base text-sm py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        {errors.password?.type === 'required' && <p className='text-sm font-light text-red-400 pt-1'>Password is required !</p>}
                        {errors.password?.type === 'minLength' && <p className='text-sm font-light text-red-400 pt-1'>Password will be more than 6 character</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-sm font-light text-red-400 pt-1'>Password will be less than 12 character</p>}
                        {errors.password?.type === 'pattern' && <p className='text-sm font-light text-red-400 pt-1'>Use uppercase, lowercase, number <br /> and special character</p>}
                        <div
                            onClick={handleShowPass}
                            className="absolute top-4 right-3 sm:text-2xl text-gray-400 cursor-pointer"
                        >
                            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>

                    {
                        err && <p className='text-sm font-light text-red-400'>{err}</p>
                    }

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full gap-2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
                    >
                        {btnLoader && <FiLoader className="text-2xl animate-spin  text-white" />}Sign Up
                    </button>
                </form>
                <div className='sm:px-8 px-4 mb-8'>
                    <p className='text-gray-400 text-xs sm:text-sm'>If you have an account, please <Link to={'/login'} className='text-green-400 font-semibold underline ml-2'>Login Here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
