import React from 'react';
import { Link } from 'react-router-dom'
import PrimaryButton from '../../Components/PrimaryButton';

const ProductsCard = ({ product }) => {
    const { picture, name, location, resalePrice, originalPrice, yearOfUse, timeOfPost, sellerName } = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={picture} alt="no img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product: {name}</h2>
                <p>Location : {location}</p>
                <p>Resale Price : {resalePrice}</p>
                <p>Original Price : {originalPrice}</p>
                <p>Year Of Use : {yearOfUse}</p>
                <p>Time Of Post : {timeOfPost}</p>
                <p>Seller Name : {sellerName}</p>
                <div className="card-actions justify-center">
                    <Link to={`/categories`}>
                        <PrimaryButton>Book now</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;