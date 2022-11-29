import React from 'react';

const ProductsCard = ({ product }) => {
    const { name, location, resalePrice } = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img className='h-72' src={picture} alt="no img" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    {/* <Link to={`/category/${category_id}`}>
                        <button className="btn btn-primary">View All Items</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;