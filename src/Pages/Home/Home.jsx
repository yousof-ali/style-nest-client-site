import React from 'react';
import Sliders from './Sliders';
import Category from './Category';
import FeaturedProduct from './FeaturedProduct';
import TopTrending from './TopTrending';

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Category></Category>
            <FeaturedProduct></FeaturedProduct>
            <TopTrending></TopTrending>
        </div>
    );
};

export default Home;