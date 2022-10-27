import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { onSubmitCreateUser } from '../../../firebase/firebase';

const SignupForm = props => {
    const {register , formState: { errors }, handleSubmit, watch } = useForm()
    const [ errorMessage, setErrorMessage ] = useState(null)

    return(
        <React.Fragment>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-secondary' 
                    onClick={props.toggleLoginSignup}
                    style={{
                        fontFamily: "'Silkscreen', cursive",
                        fontSize: "10px",
                        color: 'white'
                    }}>
                        Switch to Login
                </button>
            </div>
            <form onSubmit={handleSubmit(async (data) => {
                    await onSubmitCreateUser(data)
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
                        htmlFor="inputUsername" 
                        className='form-label'
                        style={{
                            fontFamily: "'Silkscreen', cursive",
                            color: 'black'
                        }}>
                            Username
                    </label>
                    <input 
                        {...register("displayName", { 
                            required: true})}
                            aria-invalid={errors.displayName ? "true" : "false"}
                            id="inputUsername"
                            className='form-control'
                            placeholder="Username"/>
                    {errors.displayName?.type === 'required' && <p className="alert alert-secondary">Username is required</p>}
                </div>
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
                        id="inputEmail"
                        className='form-control'
                        aria-invalid={errors.email ? "true" : "false"} 
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
                </div>
                <div className="mb-3 mt-3">
                    <label 
                        htmlFor="inputConfirmPassword" 
                        className='form-label'
                        style={{
                            fontFamily: "'Silkscreen', cursive",
                            color: 'black'
                        }}>
                            Cofirm Password
                    </label>
                    <input 
                        {...register("confirmPassword", { 
                            required: true,
                            validate : (val) => {
                                if (watch('password') != val) {
                                    return "Your passwords do not match"
                                }
                            }
                        })}
                        id='inputConfirmPassword'
                        type='password'
                        className='form-control'
                        aria-invalid={errors.confirmPassword ? "true" : "false"} 
                        placeholder="Confirm Password"/>
                        {errors.confirmPassword?.type === 'required' && <p className="alert alert-secondary">Password confirmation is required</p>}
                        {errors.confirmPassword?.type === 'validate' && <p className="alert alert-secondary">{errors.confirmPassword?.message}</p>}
                    <br/>
                    <input className="btn btn-dark w-100" 
                        type="submit"
                        value="Login"
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

export default SignupForm;
