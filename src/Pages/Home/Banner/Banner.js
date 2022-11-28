import React from 'react';
import img1 from '../../../assets/bannerImges/img1.jpg'
import img2 from '../../../assets/bannerImges/img2.png'
import img3 from '../../../assets/bannerImges/img3.jpg'
import BannerItem from './BannerItem';
const bannerData = [
    {
        image: img1,
        prev: 3,
        next: 2,
        id: 1
    },
    {
        image: img2,
        prev: 1,
        next: 3,
        id: 2
    },
    {
        image: img3,
        prev: 2,
        next: 1,
        id: 3
    }
]


const Banner = () => {
    return (
        <div>
            <div className='carousel w-full py-10'>
                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;