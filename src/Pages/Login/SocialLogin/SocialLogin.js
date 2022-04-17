import React from 'react';
import google from '../../../images/google.png';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
              <div>
                   <p className='text-danger'>Error: {error.message}</p>
              </div>
        
      }

      if(user){
          navigate('/home')
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-dark bg-gradient w-50'></div>
                <p className="mt-2 px-2"><small>Or</small></p>
                <div style={{height:'1px'}} className='bg-dark bg-gradient w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                onClick={()=> signInWithGoogle()}
                className='btn btn-secondary w-50 d-block mx-auto'>
                    <img className='pl-2' style={{width:'30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;