import React from 'react';
import Gallery from './Gallery/Gallery';

const Body = () => {
    return(
        <React.Fragment>
            <div className="row vh-100" style={{ backgroundColor: "#EAE2B7" }}>
                <Gallery />
            </div>
        </React.Fragment>
    )
}

export default Body;