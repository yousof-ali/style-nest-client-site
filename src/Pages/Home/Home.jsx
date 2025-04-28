import React from 'react';
import Sliders from './Sliders';
import Category from './Category';
import FeaturedProduct from './FeaturedProduct';

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Category></Category>
            <FeaturedProduct></FeaturedProduct>
        </div>
    );
};

export default Home;