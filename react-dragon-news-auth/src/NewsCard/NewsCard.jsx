import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const NewsCard = ({news}) => {
    const { title, image_url ,details , _id} = news;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-2xl mb-16">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link className='text-red-600 font-semibold' to={`/news/${_id}`}>Read more...</Link></p>
                    :
                    <p>{details}</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,

}

export default NewsCard;