import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';


const CategoryCard = ({ category }) => {
    const { category_id, title, picture } = category
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <PrimaryButton>
                        <Link to={`/category/${category_id}`}>
                            View All Items
                        </Link>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;