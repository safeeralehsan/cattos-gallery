import React, { useState } from 'react';
import { NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <React.Fragment>
            <NavItem className="login position-absolute top-50 end-0 me-5">
                        <NavLink onClick={toggle} >Login</NavLink>
            </NavItem>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{ backgroundColor: "#FCBF49" }}>Login</ModalHeader>
                <ModalBody style={{ backgroundColor: "#FCBF49" }}>Really</ModalBody>
                <ModalFooter style={{ backgroundColor: "#FCBF49" }}>
                    <Button onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default Login;