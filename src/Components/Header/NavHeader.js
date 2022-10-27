import React from 'react';
import { Navbar, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import Signup from './Login/Signup'
import './NavHeader.css';
import { onSignout } from '../../firebase/firebase';


const NavHeader = props => {
    return (
        <React.Fragment>
            <div style={{height: "10vh"}}>
                <Navbar className="h-100 d-flex">
                    <NavbarBrand href="/" className="position-absolute top-50 start-50 translate-middle">Cattos Inc.</NavbarBrand>
                    <Signup signedIn={props.signedIn} handleSignIn={props.handleSignIn}/>
                    {props.signedIn!==null &&
                    <NavItem className="login position-absolute bottom-0 end-0 mb-2 me-3">
                        <NavLink 
                            onClick={()=>{
                                props.handleSignIn(null);
                                localStorage.clear();
                                }} >
                            Signout
                        </NavLink>
                    </NavItem>
                    }
                </Navbar>
            </div>
        </React.Fragment>
    )
};

export default NavHeader;