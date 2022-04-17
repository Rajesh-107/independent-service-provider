import React, { useRef } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
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

        createUserWithEmailAndPassword(email,password)
    }

    return (
       <div className='register-form'>
            <div className='container w-50 mx-auto'>
            <h2 className='text-dark text-center mt-2'>Please Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='your name' id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter email' id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Type password' id="" />
               
                <input 
                className=' btn btn-primary ' type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-decoration-none text-danger pe-auto'>Please Login</Link> </p>
        </div>
        <SocialLogin></SocialLogin>
       </div>
       
    );
};

export default SignUp;