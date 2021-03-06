import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [photoServices, setPhotoServices] = useState([]);

    useEffect(()=> {
        fetch('servicesPhoto.json')
        .then(res => res.json())
        .then(data => setPhotoServices(data));
    } ,[])

    return (
        <div id='services' className='container mt-5'>
            <h2 className='text-center text-primary pb-3'>My Photo Services </h2>
           <div className="services-container">
           {
                photoServices.map(photoService => <Service
                key={photoService.id}
                photoService={photoService}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;