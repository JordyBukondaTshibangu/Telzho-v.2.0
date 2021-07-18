import React from 'react';
// import axios from 'axios';


import './news.css';

async function searchNews(q = 'trending news in south africa') {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "6b6bdab8f8msh0551cadfc4cd592p17db0cjsnad61ec4f79ed",
            "x-bingapis-sdk": "true"
        }
    });
    const body = await response.json();
    // console.log(body.value); //
    return body.value;
}


const NewsAPI = ( props ) => {
    console.log( props )
    
    const [query, setQ] = React.useState( props.query );
    const [news, setNews] = React.useState([]);
    // searchNews( q ).then( setNews );

    // searchNews( props.query ).then(setNews);


    React.useEffect(() => {
            console.log( "hello world" );
            searchNews( props.query ).then(setNews)
        }, [ query ] // this is used to stop the infinite loop of useEffect
    );

    return ( 
        <div className = "news_container" >
            <h2>News</h2>
            <div className = "result_news" >
                <ul> 
                    {
                        news.map(item => ( 
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
        </div>
    );
}


export default NewsAPI;