import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4 className="text-4xl font-semibold">
                All Category
            </h4>
            <div className='mt-4'>
                {
                    categories.map(category => <li key={category.id} className='list-none py-2 px-4 active:bg-slate-500 active:font-semibold'><NavLink>{category.name}</NavLink></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;