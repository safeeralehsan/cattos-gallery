import React from 'react';
import { Navbar, NavItem, NavLink } from 'reactstrap';
import './Categories.css';

const Categories = props => {
    return (
        <React.Fragment>
            <Navbar className="categoriesNav h-50">
                <NavItem className='mx-auto'>
                    <NavLink onClick={(e) => props.selectCategory(e.target.text)}>Sleepy Cats</NavLink>
                </NavItem>
                <NavItem className='mx-auto'>
                    <NavLink onClick={(e) => props.selectCategory(e.target.text)}>Chonky Cats</NavLink>
                </NavItem>
                <NavItem className='mx-auto'>
                    <NavLink onClick={(e) => props.selectCategory(e.target.text)}>Hungry Cats</NavLink>
                </NavItem>
            </Navbar>
        </React.Fragment>
    )
}

export default Categories;