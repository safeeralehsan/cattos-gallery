import React, {useState, useEffect} from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import axios from 'axios';
import ImagesModal from './ImagesModal';
import './Images.css';

const Images = props => {
    const [modalShow, setModalShow] = useState(false);
    const [modalImageId, setModalImageId] = useState(null);
    const [imageDetails, setImageDetails] = useState(null);

    const toggleImageModal = () => setModalShow(!modalShow);

    const handleImageModal = (e) => {
        setModalImageId(currentId => {
            return parseInt(e.target.id)
        });
        toggleImageModal();
    };

    let images=(<></>)
    if (imageDetails===null){
        images=(<></>)
    } else {
        props.displayCategory ? (
            images = imageDetails.images.map( (image) => {
                if (image.category === props.displayCategory) {
                    const src = require("../../../assets/img/category/" + image.category + "/" + image.name + ".jpg");
                    const alt = image.name;
                    return(
                        <img 
                            src={ src } 
                            alt={alt} 
                            id = {image.id}
                            key={image.id}
                            onClick= {
                                (e) => handleImageModal(e)
                            }
                            className="col-6 col-lg-4"
                            style = {{
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                            }}/>
                    )
                }
            }
            )) :
            (images=(<span className="noCategories text-center my-auto">What kinda Cat?</span>) )

    }

    const handleUserFeedback = async feedback => {
        const date = new Date()
        let commentKey = null;
        imageDetails.images[modalImageId]?.comments ?
        commentKey = Object.keys(imageDetails.images[modalImageId].comments).length :
        commentKey = 0

        let newComment = {
            username: props.signedIn.displayName,
            message: feedback,
            date: date.toLocaleDateString()
        }
        await axios.put("https://cattos-app-default-rtdb.asia-southeast1.firebasedatabase.app/images/images/"+modalImageId+"/comments/"+commentKey+".json" ,newComment)
            .then((response) => {})
            .catch(err => console.log(err))
    }

    const handleDbUpdateToUI = commentUpdate => {
        setImageDetails((prevImageDetails) => {
            if (modalImageId!==null){
                return {
                    ...prevImageDetails,
                    images: {
                        ...prevImageDetails.images,
                        [modalImageId]: {
                            ...prevImageDetails.images[modalImageId],
                            comments: commentUpdate    
                        }
                    }
                }
            }
        })
    }

    useEffect(() =>{
        const db = getDatabase();
        const imagesRef = ref(db , 'images/');
        onValue (imagesRef, (snapshot) => {
            const data = snapshot.val();
            setImageDetails(data);
        })
    }, [])

    return(
        <React.Fragment>
            <div className='row g-0 h-50'>
                {images}
            </div>
            <ImagesModal
                images= {images}
                modalShow={modalShow} 
                modalImageId={modalImageId} 
                imageDetails= {imageDetails}
                toggleImageModal={toggleImageModal}
                addUserFeedback={handleUserFeedback}
                signedIn={props.signedIn}
                handleDbUpdateToUI= {handleDbUpdateToUI}/>
        </React.Fragment>
    )
}

export default Images;