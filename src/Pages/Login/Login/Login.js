import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

        const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



        if(user){
            navigate(from, {replace:true});
        }
        if (loading) {
            return <p className='w-50 mx-auto'><Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
             </p>;
          }
          let errorElement;
          if(error){
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
          }
          const resetPassword = async() =>{
              const email = emailRef.current.value;
              await sendPasswordResetEmail(email);
              alert('sent email');
          }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password)
    }

    const navigateSignUp = e =>{
        navigate('/signup');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-dark text-center mt-2'>Please SignIn</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
 
  <Button className='w-50 mx-auto d-block' variant="secondary" type="submit">
    Signin
  </Button>
  {errorElement}
    </Form>
   <p>New to Here? <Link to='/signup' onClick={navigateSignUp} className='text-decoration-none text-danger pe-auto'>Please SignUp</Link> </p>
   <p>Forget Password? <Link to='/signup' onClick={resetPassword} className='text-decoration-none text-danger pe-auto'>Reset Password</Link> </p>
   <SocialLogin></SocialLogin>
</div>
    );
};

export default Login;