import React, { useContext, useRef, useState } from 'react';
import Navbar from './shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { userContext } from '../UserProvider/UserProvider';
import { updateProfile } from 'firebase/auth';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
    const [ successMessage , SetSuccessMessage ] = useState('');
    const [ errorMessage, SetErrorMessage ] = useState('');
    const [showPasswords, SetShowPasswords ] = useState(false);
    const { createUser } = useContext(userContext);
    const emailRef = useRef(null);
    const handleSubmit = e => {
        SetErrorMessage('')
        SetSuccessMessage('')
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('profile')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,
        photoUrl,
        email,
        password);
        const terms = e.target.terms.checked;
        if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            alert('Please enter a valid email address');
            return;
        }
        else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)){
            alert('Password must be at least 8 characters long and contain at least one letter and one number');
            return;
        }
        else if (!terms){
            alert('You must agree to the terms and conditions');
            return;
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            })
            console.log(user);
            SetSuccessMessage('Account Created successfully');
        })
        .catch(error=>{
            SetErrorMessage(error.message);
            console.log(error.message);
        });
        e.target.reset();
    }

    const handleShowModal = () =>{
        document.getElementById('my_modal_1').showModal()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex-col ">
                    <div className="card shrink-0 shadow-2xl w-5/12 bg-base-100">
                        <div className="text-center pt-5 px-16 ">
                            <h1 className="text-3xl font-semibold pb-7">Register Your Account</h1>
                            <hr />
                        </div>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input focus:outline-none bg-base-200 " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='profile' placeholder="Enter Your Photo URL" className="input focus:outline-none bg-base-200 " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} placeholder="Enter Your Email" className="input focus:outline-none bg-base-200 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input type={showPasswords ? 'text' : 'password'} name='password' placeholder="Enter Your Password" className="input  focus:outline-none bg-base-200 w-full" required />
                                    <span onClick={()=>SetShowPasswords(!showPasswords)} className='absolute top-4 right-4'>{ showPasswords ? <FaRegEyeSlash></FaRegEyeSlash>:<FaRegEye></FaRegEye> }</span>
                                </div>
                            </div>

                            <div className="form-control flex my-4">
                                <div className='flex gap-2'>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <span className="label-text">Accept Terms & Conditions</span>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>

                            <div className='text-center my-5'>
                                <p>Already Have An Account? <Link className='text-red-500' to={'/register'}>Login</Link></p>
                            </div>
                        </form>
                        {
                            successMessage &&<>
                                
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                                <button onClick={handleShowModal()}></button>
                                </>
                            
                            // <p className="alert alert-success">
                            //     {successMessage}
                            // </p>
                            
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

export default Register;