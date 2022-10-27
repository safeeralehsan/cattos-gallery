import React from 'react';
import NavHeader from './NavHeader';
import Categories from './Categories';

const Header = props => {
    return (
        <div>
            <NavHeader signedIn={props.signedIn} handleSignIn={props.handleSignIn} />
            <Categories selectCategory={props.selectCategory} />
        </div>
    )
}

export default Header;