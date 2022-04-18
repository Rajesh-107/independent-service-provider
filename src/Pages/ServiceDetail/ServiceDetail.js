import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Welcome to the Detail:{serviceId}</h2>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-primary'> Procced to CheckOut</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;