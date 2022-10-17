import React from 'react';


const Gallery = () => {
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
                        overflow: "auto"
                        }}>

                    {/* <img src={sleepcat1} alt="a sleepy cat" style={{ width: "33%", height: "33%", objectFit: "cover" }}/> */}
                    

                </div>

        </React.Fragment>
    )
}

export default Gallery;