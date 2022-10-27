import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import UserFeedback from './UserFeeback';

const ImagesModal = props => {
    let comments = [];
    if (props.modalImageId === null || !props.imageDetails.images[props.modalImageId].hasOwnProperty('comments')) {
        comments = (<></>);
    } else {
        comments = props.imageDetails.images[props.modalImageId].comments.map((comment)=> {
            return(
                <div key={Math.random()} className="row mb-1" style={{ height: 'fit-content' }}>
                    <div className='card ms-3' style={{ width: '90%', backgroundColor: '#003049'}} key={Math.random()}>
                        <div 
                            className='card-body' 
                            key={Math.random()}
                            style={{
                                // backgroundColor: "#003049"
                            }}>
                            <h5 
                                className ="card-title mb-1" 
                                key={Math.random()}
                                style={{
                                    fontFamily: "'Silkscreen', cursive",
                                    fontSize: 'calc(8px + 0.5vw)',
                                    color: 'white'
                                }}>
                                {comment.username}
                            </h5>
                            <h6 
                                className ="card-subtitle mb-1 text-muted" 
                                key={Math.random()}
                                style={{
                                    fontFamily: "'Gloria Hallelujah', cursive",
                                    fontSize: 'calc(3px + 0.5vw)',
                                    color: 'white'
                                }}>
                                {comment?.date}
                            </h6>
                            <p 
                                className = "card-text ms-3" 
                                key={Math.random()}
                                style={{
                                    color: 'white',
                                    fontFamily: "'Gloria Hallelujah', cursive",
                                    fontSize: 'calc(10px + 0.5vw)'
                                }}>
                                > {comment.message}
                            </p> 
                        </div>
                    </div>
                </div>
            )
        })
    }
    let src = "";
    let alt = "";
    if (props.modalImageId!==null){
        src = require("../../../assets/img/category/" + 
                            props.imageDetails.images[props.modalImageId].category + "/" + 
                            props.imageDetails.images[props.modalImageId].name + 
                            ".jpg");
        alt = props.imageDetails.images[props.modalImageId].name;
    }

    return(
        <React.Fragment>
            <Modal isOpen={props.modalShow} size="xl" >
                <ModalBody style={{ height: "80vh", backgroundColor : "#EAE2B7"}}>
                    <div className='row h-100'>
                        <div 
                            className='col-7 h-100 d-flex align-items-center'
                            style={{
                                backgroundColor: '#D4A373',
                                padding: '3%',
                                borderRadius: '10px'
                            }}>
                            {props.modalImageId!==null ?
                            <img 
                                src={src} 
                                alt={alt}
                                onClick= {
                                    props.toggleImageModal
                                }
                                style = {{
                                    width: "100%",
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    borderRadius: "20px"
                            }}/> : <></> }
                        </div>
                        <div className='col-5 h-100 mb-0 position-relative'>
                            <div className="row mt-4 d-flex align-content-start overflow-auto" style={{ height: '90%'}}>
                                {props.signedIn === null ? 
                                    (<span
                                        className= "position-absolute top-50" 
                                        style={{
                                            fontFamily: "'Silkscreen', cursive",
                                            fontSize: 'calc(16px + 0.5vw)',
                                            color: '#003049',
                                            textAlign: 'center'
                                        }}>
                                            Log In to View and Add Comments</span>) : (<>{comments}</>)}
                            </div>
                            <div className='row mt-3'>
                                <UserFeedback
                                    addUserFeedback={props.addUserFeedback} 
                                    signedIn= {props.signedIn} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter
                    style= {{
                        backgroundColor: '#003049'
                    }}>
                    <Button 
                        onClick={props.toggleImageModal}
                        style={{
                            backgroundColor: '#D62828',
                            fontFamily: "'Silkscreen', cursive",
                            fontSize: 'calc(8px + 0.5vw)',
                            color: 'white'
                        }}>
                            Back to Gallery
                        </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default ImagesModal;