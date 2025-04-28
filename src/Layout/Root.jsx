import React from 'react';
import Header from '../Shared/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    const location = useLocation()
    const signup_login = location.pathname === '/sign-up' || location.pathname === '/login'
    console.log(signup_login)
    return (
        <div>
            {
                !signup_login && <Header></Header>
            }
            <Outlet></Outlet>
            {
                !signup_login && <Footer></Footer>
            }
        </div>
    );
};

export default Root;