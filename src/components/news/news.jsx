import React, { useState, useEffect } from 'react';
import { searchNews } from '../../utils/searchNews';
import './news.css';


const NewsAPI = ( {query} ) => {
    
    const [news, setNews] = useState([]);
    
    useEffect(() => {
            searchNews(query).then(res => setNews(res))
        }, [ query ]
    );


    return ( 
        <div className = "news-container" >
           { news?.length > 1 ? null :  
            <>
                <h3>News</h3>
                <hr></hr>
                <div className = "result-news" >
                    <ul> 
                        {
                            
                            news?.map(item => ( 
                                <li key = { item.datePublished } >
                                    <img 
                                        src = { item.image === undefined ? "" : item.image.thumbnail.contentUrl }
                                        height = "auto" 
                                        alt="/"/ > 
                                        { item.name } 
                                </li>
                            ))
                        } 
                    </ul> 
                </div>
            </>
           }
        </div>
    );
}


export default NewsAPI;