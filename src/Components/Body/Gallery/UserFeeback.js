import React, {useState} from 'react';
import {Button} from 'reactstrap';

const UserFeedback = props => {
    const [inputValue, setInputValue] = useState('');

    const handleFeedbackInput = e => {
        e.preventDefault();
        props.addUserFeedback(inputValue);
        setInputValue('');
    }

    return (
        <div>
            { props.signedIn===null ? (<></>) : (
                <>
                        <form>
                    <div className='row w-100 position-absolute bottom-0 start-0'>
                            <div className='col-10'>
                                    <input 
                                        value={inputValue}
                                        className = 'form-control ms-3'
                                        placeholder='Comment' 
                                        onChange={e => {setInputValue(e.target.value)}}/>
                            </div>
                            <div className='col-2'>
                                <button 
                                    disabled={(inputValue==='')} 
                                    onClick={e => handleFeedbackInput(e)}
                                    className='btn btn-dark'
                                    >
                                        >
                                    </button>
                            </div>
                    </div>
                        </form>
                </>
            )}
        </div>
    )
}

export default UserFeedback;