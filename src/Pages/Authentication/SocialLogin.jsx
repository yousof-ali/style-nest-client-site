import React, { useContext } from 'react'
import { AuthContext } from '../../ContextAPI/AuthProvider'

const SocialLogin = () => {
    const {googleLogin,facebookLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
    };

    const handleFacebookLogin = () => {
        facebookLogin()
        .then(result => {
            console.log(result);
        })
    };
    return (
        <div className='px-8 mt-6'>
            <button onClick={handleGoogleLogin}
                className="border w-full cursor-pointer mb-4 border-green-600 rounded-md py-3 px-4 flex items-center justify-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                    className="w-[25px]" />
                Continue with Google
            </button>
            <button onClick={handleFacebookLogin}
                className="border cursor-pointer w-full justify-center border-[#1777f2] text-[#1777f2] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] hover:bg-gray-50 transition-all duration-200 text-[1rem] ">
                <img
                    src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c960d4839cf20aeafcad2_facebook.svg"
                    alt="facebook logo"
                    className="w-[25px]" />
                Continue with Facebook
            </button>

            <div className="divider my-6">Or</div>

        </div>
    )
}

export default SocialLogin
