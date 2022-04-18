import React, { useRef, useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
    const [agree, setAgree] =useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleSignUp = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if(agree){
            createUserWithEmailAndPassword(email,password);
        }
    }

    return (
       <div className='signup-form'>
            <div className='container w-50 mx-auto'>
            <h2 className='text-dark text-center mt-2'>Please Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='your name' id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter email' id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Type password' id="" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Condition</label>
                <input disabled={!agree}
                className='btn btn-primary mt-2' type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-decoration-none text-danger pe-auto'>Please Login</Link> </p>
        </div>
        <SocialLogin></SocialLogin>
       </div>
       
    );
};

export default SignUp;