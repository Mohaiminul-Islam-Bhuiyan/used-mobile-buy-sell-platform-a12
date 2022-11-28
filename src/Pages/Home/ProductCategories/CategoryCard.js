import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    const { _id, category_id, title, picture } = category
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${category_id}`}>
                        <button className="btn btn-primary">View All Items</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CategoryCard;