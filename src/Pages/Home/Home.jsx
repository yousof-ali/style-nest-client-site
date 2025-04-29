import React from 'react';
import Sliders from './Sliders';
import Category from './Category';
import FeaturedProduct from './FeaturedProduct';
import TopTrending from './TopTrending';
import FromOurBlog from './FromOurBlog';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Category></Category>
            <TopTrending></TopTrending>
            <FeaturedProduct></FeaturedProduct>
            <FromOurBlog></FromOurBlog>
            <Review></Review>
        </div>
    );
};

export default Home;