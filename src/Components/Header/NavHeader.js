import React from 'react';
import { Navbar, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import Login from './Login/Login'
import './NavHeader.css';



const NavHeader = () => {
    return (
        <React.Fragment>
            <div style={{height: "10vh"}}>
                <Navbar className="h-100">
                    <NavbarBrand href="/" className="position-absolute top-50 start-50 translate-middle">Cattos Inc.</NavbarBrand>
                    <Login />
                </Navbar>
            </div>
        </React.Fragment>
    )
};

export default NavHeader;