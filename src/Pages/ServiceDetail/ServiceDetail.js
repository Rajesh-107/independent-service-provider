import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='container'>
            <h2 className='text-center pt-3 pb-5'>Welcome here to know the Detail</h2>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-primary'> Procced to CheckOut</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;