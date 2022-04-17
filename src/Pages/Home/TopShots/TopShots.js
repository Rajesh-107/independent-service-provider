import React from 'react';
import popular1 from '../../../images/popular1.jpg';
import popular2 from '../../../images/popular2.jpg';
import TopShot from '../TopShot/TopShot';

const topShots =[
    {id:1, name: 'Wild Bull Dog' , img: popular1},
    {id:2, name: 'Aesthetic Shot' , img: popular2},
]

const TopShots = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-danger pt-5'>My Popular Shots</h2>
            <div className='row pt-5'>
                {
                    topShots.map(topShot => <TopShot
                    key={topShot.id}
                    topShot={topShot}
                    ></TopShot>)
                }
            </div>
        </div>
    );
};

export default TopShots;