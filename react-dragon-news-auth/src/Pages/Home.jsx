import React from 'react';
import Header from './shared/Header/Header';
import Navbar from './shared/Navbar/Navbar';
import LeftSideNav from './shared/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import BreakingNews from './shared/Header/BreakingNews';

const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-5'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className='md:col-span-2'>
                    {
                        allNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>

                <div className='p-4'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;