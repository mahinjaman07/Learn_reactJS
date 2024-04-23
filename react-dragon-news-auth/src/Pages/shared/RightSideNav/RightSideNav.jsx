import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 mb-7'>
                <h1 className="font-semibold text-3xl mb-4">Login With</h1>
                <button className='flex items-center gap-2 text-xl border w-full justify-center p-2 rounded-md'><FaGoogle className='text-3xl'></FaGoogle>Login With Google</button>
                <button className='flex items-center gap-2 text-xl border w-full justify-center p-2 rounded-md'><FaGithub className='text-3xl'></FaGithub>Login With GitHub</button>
            </div>

            <div className='mb-7 '>
                <h1 className="font-semibold text-3xl mb-4">Find Us On</h1>
                <div className='border rounded-md'>
                    <a href="#" className='flex items-center gap-2 border-b py-3 pl-4'><FaFacebook className='text-3xl'></FaFacebook> Facebook</a>
                    <a href="#" className='flex items-center gap-2 border-b py-3 pl-4'><FaTwitter className='text-3xl'></FaTwitter> Twitter</a>
                    <a href="#" className='flex items-center gap-2 border-b py-3 pl-4'><FaInstagram className='text-3xl'></FaInstagram> Instagram</a>
                </div>
            </div>

            <div className='bg-base-300 p-4'>
                <h1 className="font-semibold text-3xl mb-4">Q-Zone</h1>
                <div className='flex flex-col gap-5'>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;