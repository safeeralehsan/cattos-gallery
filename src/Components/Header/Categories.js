import React from 'react';
import { Navbar, NavItem, NavLink } from 'reactstrap';
import './Categories.css';

const Categories = () => {
    return (
        <React.Fragment>
            <Navbar className="categoriesNav h-50">
                <NavItem className='mx-auto'>
                    <NavLink href="/">Sleepy Cats</NavLink>
                </NavItem>
                <NavItem className='mx-auto'>
                    <NavLink href="/">Chonky Cats</NavLink>
                </NavItem>
                <NavItem className='mx-auto'>
                    <NavLink href="/">Hungry Cats</NavLink>
                </NavItem>
            </Navbar>
        </React.Fragment>
    )
}

export default Categories;