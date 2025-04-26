import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Collentions from '../Pages/Collections/Collentions';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<h1>This is error Page</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/collections',
                element:<Collentions></Collentions>
            }
        ]

    }
])

export default router;