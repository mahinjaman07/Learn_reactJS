import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';
import Header from './shared/Header/Header';
import RightSideNav from './shared/RightSideNav/RightSideNav';

const News = () => {
    const [detailsNews , setDetailsNews] = useState({})
    const props = useParams();
    console.log(props._id);
    const allNews = useLoaderData();
    useEffect(()=>{
        if (allNews.length) {
            const specificNews = allNews.find(news => news._id === props._id);
            setDetailsNews(specificNews);
        }
    },[allNews])
    const { title, image_url, details} = detailsNews;
    return (
        <div>
            <Header></Header>
            <div>
                <h3 className='font-semibold'>Dragon News</h3>
            </div>
            <div className='grid md:grid-cols-4 gap-4 mt-5' >
                <div className='col-span-3'>
                    <div className="card card-compact w-full bg-base-100 shadow-2xl mb-16">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                        <div>
                            <button className='pb-5 px-5 link text-red-600'><Link to={-1}>Back</Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;