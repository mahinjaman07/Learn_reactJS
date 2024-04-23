import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import defaultUserProfile from '../../../assets/user.png'
import { useContext } from 'react';
import { userContext } from '../../../UserProvider/UserProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(userContext);
    const menus = <>
        <li className='mr-3'><NavLink to={'/'}>Home</NavLink></li>
        <li className='mr-3'><NavLink to={'/about'}>About</NavLink></li>
        <li className='mr-3'><NavLink to={'/career'}>Career</NavLink></li>
        <li className='mr-3'><NavLink to={'/register'}>Register</NavLink></li>
    </>
    const handleLogOut = () => {
        const confirmation = confirm('Make sure you log out Your account');
        if(confirmation){
            LogOut()
                .then(() => {
                    console.log('Log out Successfully');
                })
                .catch(err => console.log(err));
        }
        
        
    }
return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        menus
                    }
                </ul>
            </div>
            
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {
                    menus
                }
            </ul>
        </div>
        <div className="navbar-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={defaultUserProfile} />
                </div>
            </div>
            {
                user ? 
                    <button onClick={handleLogOut} className='btn'>LogOut</button>
                :
                    <Link to={'/login'}><button className='btn'>LogIn</button></Link>
            }
        </div>
    </div>
);
};

export default Navbar;