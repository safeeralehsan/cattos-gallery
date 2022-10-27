import React, { useState } from 'react';
import { NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './Signup.css'



const Login = props => {
    const [showLogin, setShowLogin] = useState(false);
    const [loginSignup, setLoginSignup] = useState(true);

    const toggleLoginModal = () => setShowLogin(!showLogin);
    const toggleLoginSignup = () => setLoginSignup(!loginSignup)

    return(
        <React.Fragment>
            <NavItem className="login position-absolute top-50 end-0 me-5">
                {props.signedIn===null && 
                    <NavLink onClick={toggleLoginModal} >Login / Signup</NavLink>}
            </NavItem>
            {props.signedIn!==null && 
                <span 
                    className='position-absolute start-0 bottom-0 mb-2 ms-4'
                    style={{
                        fontFamily: "'Silkscreen', cursive",
                        fontSize: 'calc(10px + 0.5vw)',
                        color: 'white'
                    }}>
                        Welcome, {props.signedIn.displayName}
                </span>}
            <Modal isOpen={showLogin} toggle={toggleLoginModal}>
                <ModalHeader style={{ backgroundColor: "#D62828" }}>
                    {loginSignup && <span className='loginSignupHeader mx-auto'>Login</span>}
                    {!loginSignup && <span className='loginSignupHeader mx-auto'>Signup</span>}
                </ModalHeader>
                <ModalBody style={{ backgroundColor: "#FCBF49" }}>
                    {loginSignup && <LoginForm toggleLoginModal={toggleLoginModal} toggleLoginSignup={toggleLoginSignup} handleSignIn={props.handleSignIn} />}
                    {!loginSignup && <SignupForm toggleLoginModal={toggleLoginModal} toggleLoginSignup={toggleLoginSignup} handleSignIn={props.handleSignIn} />}
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default Login;