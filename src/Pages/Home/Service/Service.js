import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({photoService}) => {
    const {id, name, img, description, price} = photoService;

    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='container service bg-dark'>
           <img className='w-50 h-50 img-fluid' src={img} alt="" srcset="" />
            <h2 className='text-white'>Service: {name} </h2>
            <p className='text-white'>Price:{price}</p>
            <p className='text-white'><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book Now: {name}</button>
        </div>

        
    );
};

export default Service;