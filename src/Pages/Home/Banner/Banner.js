import React from 'react';
import banner from '../../../images/travis-beauchesne-utah-RZ8v87a8P-0-unsplash copy.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <header>
                <img className='w-100' src={banner} alt="" />
                
            </header>
        </div>
    );
};

export default Banner;