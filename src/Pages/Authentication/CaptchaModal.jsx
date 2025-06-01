import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Login.css'
const CaptchaModal = ({onVerified}) => {
      
        const handleCaptchaChange = (value) => {
          onVerified(value);
        };
    return (
        <div className="fixed recaptcha-container inset-0 bg-black/50 bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md text-center space-y-4">
                <h2 className="text-xl font-semibold">Please verify you're human</h2>
                <ReCAPTCHA
                    sitekey={import.meta.env.VITE_SITE_KEY}
                    onChange={handleCaptchaChange}
                />
            </div>
        </div>
    );
};

export default CaptchaModal;