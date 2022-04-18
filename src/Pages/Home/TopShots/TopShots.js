import React from 'react';
import popular1 from '../../../images/popular1.jpg';
import popular2 from '../../../images/popular2.jpg';
import TopShot from '../TopShot/TopShot';

const topShots =[
    {id:1, name: 'Wild Bull Dog' , Description:'Even though these are purebred dogs, you may find them in the care of shelters or rescue groups. Remember to adopt! Dont shop if you want to bring a dog home.' , img: popular1},

    {id:2, name: 'Aesthetic Shoot' , Description:'Once you have a goal, it’s time to figure out the concept. I always suggest something simple, instead of something complex. Pick a single theme, and the rest will flow together. Based on your theme, create a mood board, which will be the base plan for your photo shoot.', img: popular2},
]

const TopShots = () => {
    return (
        <div id='shots' className='container'>
            <h2 className='text-center text-danger pt-5'>My Popular Shoots</h2>
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