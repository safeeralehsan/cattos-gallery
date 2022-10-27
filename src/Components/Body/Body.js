import React from 'react';
import Gallery from './Gallery/Gallery';

const Body = props => {
    return(
        <React.Fragment>
            <div className="row vh-100" style={{ backgroundColor: "#EAE2B7" }}>
                <Gallery signedIn={props.signedIn} displayCategory={props.displayCategory} />
            </div>
        </React.Fragment>
    )
}

export default Body;