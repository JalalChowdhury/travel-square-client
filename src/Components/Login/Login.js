import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../Hook/useAuth';
import googleLogo from '../../assets/googleLogo.png';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
  



    return (
        <div>
                <div className='d-flex justify-content-center '>
                    <div className="login-container ">
                        <h1 className=" text-center">Login with</h1>
                        <Button variant='light' onClick={signInUsingGoogle} className="login-btn d-flex justify-content-start p-1"> <img src={googleLogo} alt="" className="ms-2 me-5" /> Continue with Google</Button>
                    </div>
                </div>
            
        </div>
    );
};

export default Login;