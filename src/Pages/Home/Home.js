import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;