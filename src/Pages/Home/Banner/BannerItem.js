import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img object-fill'>
                <img src={image} alt="" className="object-fill h-full w-full rounded-xl" />
            </div>
            <div className="absolute justify-end transform -translate-y-1/2 left-24 top-1/2">
                <h1 className='lg:text-6xl font-bold text-white'>
                    Welcome <br />
                    to <br />
                    MOBILE HAAT
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;