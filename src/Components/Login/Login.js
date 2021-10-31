import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../Hook/useAuth';
import googleLogo from '../../assets/googleLogo.png';
import './Login.css';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
  
    const history = useHistory();
    console.log(history);
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleLogin = () => {
        signInUsingGoogle()
          .then((res) => 
            {
              
              setUser(res.user)
              history.push(from);
              setIsLoading(true);
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false);
          })
      };



    return (
        <div>
                <div className='d-flex justify-content-center '>
                    <div className="login-container ">
                        <h1 className=" text-center">Login with</h1>
                        <Button variant='light' onClick={handleGoogleLogin} className="login-btn d-flex justify-content-start p-1"> <img src={googleLogo} alt="" className="ms-2 me-5" /> Continue with Google</Button>
                    </div>
                </div>
            
        </div>
    );
};

export default Login;