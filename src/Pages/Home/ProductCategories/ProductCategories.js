import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://assignment-twelve-server-nine.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div className='my-5'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Product Categories</p>
                <h2 className="text-5xl font-semibold mb-8">Here are the categories you will get here</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories?.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;