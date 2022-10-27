import React from 'react';
import Images from './Images';

const Gallery = props => {
    return(
        <React.Fragment>
                <div 
                    className='col-10 offset-1 col-md-8 offset-md-2 mt-5 ' 
                    style={{ 
                        height: "70vh",
                        padding: "0",
                        borderStyle: "solid",
                        borderColor: "#FCBF49",
                        borderWidth: "10px",
                        borderRadius: "50px",
                        overflow: "scroll",
                        overflowX: "hidden",
                        }}>
                    <Images signedIn={props.signedIn} displayCategory={props.displayCategory}/>
                </div>
        </React.Fragment>
    )
}

export default Gallery;