import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';


const AllProducts = () => {

    // const [products, setProducts] = useState([])

    const products = useLoaderData()

    return (
        <div className='my-5'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Product Categories</p>
                <h2 className="text-5xl font-semibold mb-8">Here are the categories you will get here</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;