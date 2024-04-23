import React, { useContext, useRef, useState } from 'react';
import Navbar from './shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { userContext } from '../UserProvider/UserProvider';


const Login = () => {
    const [successMessage, SetSuccessMessage] = useState('');
    const [errorMessage, SetErrorMessage] = useState('');
    const [showPasswords, SetShowPasswords] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const { userLogin, forgetPassword } = useContext(userContext);
    const location = useLocation();
    const handleSubmit = e => {
        SetErrorMessage('')
        SetSuccessMessage('')
        e.preventDefault();
        const email = emailRef.current.value;
        const password = e.target.password.value;
        if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter and one number');
            return;
        }
        
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            SetSuccessMessage('Account LogIn successfully ')
            navigate(location?.state ? location.state: '/')

        })
        .catch(error => {
            SetErrorMessage(error.message);
            
        });
        e.target.reset();
    }

    const handleForgetPassword = (email) =>{
        forgetPassword(email)
        .then(() =>{
            alert('Password reset link has been sent to your email');
        })
        .catch(error => {
            alert(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex-col ">
                    <div className="card shrink-0 shadow-2xl w-5/12 bg-base-100">
                        <div className="text-center pt-5">
                            <h1 className="text-3xl font-semibold">Login Your Account</h1>
                        </div>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} placeholder="email" className="input focus:outline-none bg-base-200 input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className='relative'>
                                    <input type={showPasswords ? 'text' : 'password'} name='password' placeholder="Enter Your Password" className="input  focus:outline-none bg-base-200 w-full" required />
                                    <span onClick={() => SetShowPasswords(!showPasswords)} className='absolute top-4 right-4'>{showPasswords ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</span>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" onClick={() => handleForgetPassword(emailRef.current.value)}>Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>

                            <div className='text-center my-5'>
                                <p>Don't Have An Account? <Link className='text-red-500' to={'/register'}>Register</Link></p>
                            </div>
                        </form>
                        {
                            successMessage &&
                            <p className="alert alert-success">
                                {successMessage}
                            </p>

                        }
                        {
                            errorMessage &&
                            <p className="alert alert-danger">
                                {errorMessage}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;