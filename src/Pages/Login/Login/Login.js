import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (loading || sending) {
            return <p style={{height:'400px'}} className='w-100 d-flex justify-content-center align-items-center'><Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
             </p>;
          }
          let errorElement;
          if(error){
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
          }
          const resetPassword = async() =>{
              const email = emailRef.current.value;
              if(email){
                await sendPasswordResetEmail(email);
                toast("sent email, Don't forget Check your spam message");
              }
              else{
                  toast('Please enter your email address');
              }
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
   <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-decoration-none text-danger pe-auto'>Reset Password</button> </p>
   <SocialLogin></SocialLogin>
    <ToastContainer />
</div>
    );
};

export default Login;