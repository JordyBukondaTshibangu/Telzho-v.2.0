import React from 'react';
import './LatestNews.css';


const News = ({news}) => {
    
    const { author, description, title, urlToImage } = news

    return (
        <div className="latestNews__container">
            <div className="latestNews__header">
                <img src={urlToImage} alt="/" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{author}</span>
            </div>
        </div>
    )
}

export default News