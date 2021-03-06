import React from 'react';
import { newsApi } from '../../utils/newsApi';
import LatestNews from '../../components/latestNews/LatestNews';

const News = () => {
    return (
        <>
            {
                newsApi.map((news, index) => {

                   return  <LatestNews key={index} news={news} />
                })
            }
        </>
    )
}

export default News