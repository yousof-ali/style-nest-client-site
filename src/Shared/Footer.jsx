import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-[#f5f3ed] py-6 md:pt-20 px-2 md:px-0'>
            <div className='container mx-auto'>
              <div className='flex  flex-col md:flex-row gap-6 md:gap-0 md:justify-between md:items-center'>
                <div>
                   <img className='w-48' src="/logo.png" alt="" />
                   <p>stylenest@gamail.com</p>
                   <p className='font-semibold mt-2'>Monday till Friday 10 to 6 EST</p>
                </div>
                <div>
                    <h2 className='font-bold mb-2'>GET MORE RESERVED ON:</h2>
                    <div className='text-2xl flex gap-2'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaXTwitter />
                    </div>
                </div>
              </div>
              <div className='mt-16 grid grid-cols-1 lg:gap-0 gap-8 md:grid-cols-2  lg:grid-cols-4 '>
                <div>
                    <h2 className='text-xl font-semibold  mb-3'>ABOUT US</h2>
                    <div className='flex flex-col space-y-1 text-gray-500'>
                    <span ><Link>About Us</Link></span>
                    <span ><Link>Contact Us</Link></span>
                    <span ><Link>Factoris</Link></span>
                    <span ><Link>Careers</Link></span>
                    
                    </div>
                </div>
                <div className='md:text-right lg:text-left '>
                    <h2 className='text-xl font-semibold mb-3'>MY ACCOUNT</h2>
                    <div className='flex flex-col space-y-1 text-gray-500'>
                    <span ><Link>My Account</Link></span>
                    <span ><Link>My Wishlist</Link></span>
                    <span ><Link>My Cart</Link></span>
                    <span ><Link>Checkout</Link></span>
                    
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3'>ORDERS AND RETURNS</h2>
                    <div className='flex flex-col space-y-1 text-gray-500'>
                    <span ><Link>Help and advice</Link></span>
                    <span ><Link>Shippintg & Returns
                    t</Link></span>
                    <span ><Link>Terms and conditions</Link></span>
                    <span ><Link>Refund Policy</Link></span>
                    
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-3'>NEWSLETTER
                    </h2>
                    <div className='flex flex-col'>
                    <p className='text-gray-500 mb-2'>Receive our weekly newsletter. For dietary content, fashion insider and the best offers.</p>
                    <input className='w-full border bg-white p-2' placeholder='Enter Your Email' type="text" />
                    <button className='btn w-25 mt-2 btn-neutral'>Submit</button>
                    
                    </div>
                </div>
              </div>
            </div>
            <div className='divider  py-4'></div>
            <p className='text-center text-sm text-gray-500'>Copyright © 2021 StyleNest.</p>
        </div>
    );
};

export default Footer;