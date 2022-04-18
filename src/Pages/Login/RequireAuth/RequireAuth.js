import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return  <p style={{height:'400px'}} className='w-100 d-flex justify-content-center align-items-center'><Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
         </p>;
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;