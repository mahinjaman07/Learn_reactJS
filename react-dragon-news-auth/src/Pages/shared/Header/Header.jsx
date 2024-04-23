import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
import BreakingNews from './BreakingNews';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={Logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY, ")}</p>
        </div>
    );
};

export default Header;