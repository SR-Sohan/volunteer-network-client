import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeFirebase } from './loginManager';




const Login = () => {

    //Initializwfirebase
    initializeFirebase();

    //User Context Hook
    const {state1,state2} = useContext(UserContext)
    const [loggedInUser,setLoggedInUser] = state1;

    //History and location method
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Handle Google SignIn button
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then( res => {
            setLoggedInUser(res)
            history.replace(from)
        })
    }
  
    return (
        <div className="login-area">
           <Container> 
                <div className="logo-area"> 
                    <Link to="/home"> 
                     <img src={require('../../logos/Group 1329.png')} alt=""/>
                    </Link>
                </div>
                <div className="login-form"> 
                    <h2>Login With</h2>
                    <div onClick={googleSignIn} className="google-login"> 
                        <div className="google-img"> 
                            <img src={require('../../logos/google.png')} alt=""/>
                        </div>
                        <div className="google-text">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                    <div className="create-account-area"> 
                        <p className="text-center">Don’t have an account? <span>Create an account</span></p>
                    </div>
                </div>
           </Container>
        </div>
    );
};

export default Login;