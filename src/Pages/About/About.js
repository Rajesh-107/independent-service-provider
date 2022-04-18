import React from 'react';
import me from '../../images/480x640px=62.06kB.jpg';

const About = () => {
    return (
        <div className='container'>
            <img className='w-25 mx-auto align-items-center justify-content-center d-flex' src={me} alt="" />
            <h2>Hi there, My name is Rajesh Barua.</h2>
            <p>Well , I am currently studying in China. My University Name is Wuzhou University. My major subject is Computer Science And Technology.</p>
        </div>
    );
};

export default About;