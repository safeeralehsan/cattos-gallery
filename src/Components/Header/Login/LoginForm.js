import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { onSubmitSignInUser } from '../../../firebase/firebase';


const LoginForm = props => {
    const {register , formState: { errors }, handleSubmit } = useForm()
    const [ errorMessage, setErrorMessage ] = useState(null)

    return(
        <React.Fragment>
            <div className='d-flex justify-content-center'>
                <button 
                    className="btn btn-secondary" 
                    onClick={props.toggleLoginSignup}
                    style={{
                        fontFamily: "'Silkscreen', cursive",
                        fontSize: "10px",
                        color: 'white'
                    }}>
                New user? Signup here
            </button>
            </div>
            <form onSubmit={handleSubmit(async (data) => {
                    await onSubmitSignInUser(data)
                        .then((response) => {
                            if(response[0]===null){
                                setErrorMessage(response[1])
                            } else {
                                props.handleSignIn(response[0]);
                                props.toggleLoginModal();
                                localStorage.setItem('user', JSON.stringify(response[0]))
                            }
                        });
                    
                })}>
                {errorMessage!==null && <p className="alert alert-danger">Login Error: {errorMessage} </p>}
                <div className="mb-3 mt-3">
                    <label 
                        htmlFor="inputEmail" 
                        className='form-label'
                        style={{
                            fontFamily: "'Silkscreen', cursive",
                            color: 'black'
                        }}>
                            Email Address
                    </label>
                    <input 
                        {...register("email", { 
                            required: true, 
                            pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/ })}
                        aria-invalid={errors.email ? "true" : "false"}
                        id="inputEmail"
                        className='form-control' 
                        placeholder="Email"/>
                    {errors.email?.type === 'required' && <p className="alert alert-secondary">Email is required</p>}
                    {errors.email?.type === 'pattern' && <p className="alert alert-secondary">Email is invalid</p>}
                </div>
                <div className="mb-3 mt-3">
                    <label 
                        htmlFor="inputPassword" 
                        className='form-label'
                        style={{
                            fontFamily: "'Silkscreen', cursive",
                            color: 'black'
                        }}>
                            Password
                    </label>
                    <input 
                        {...register("password", { 
                            required: true 
                        })}
                        id='inputPassword'
                        type='password'
                        className='form-control'
                        aria-invalid= { errors.password ? "true" : "false"}
                        placeholder="Password"/>
                    {errors.password?.type==='required' && <p className="alert alert-secondary">Password is required</p>}
                    <br/>
                    <input className="btn btn-dark w-100" type="submit" value="Login"
                        style={{
                            fontFamily: "'Silkscreen', cursive",
                            color: 'white'
                        }}/>
                </div>
            </form>
            <div className='d-flex justify-content-end'>
                <button 
                    className="btn btn-secondary" 
                    onClick={props.toggleLoginModal}
                    style={{
                        fontFamily: "'Silkscreen', cursive",
                        color: 'white'
                    }}>
                        X
                </button>
            </div>
        </React.Fragment>
    )
}

export default LoginForm