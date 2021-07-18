import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg'
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../customHook/useGoogleSearch';
import Search from '../../components/search/Search';
import NewsAPI from "../../components/news/news";
import './SearchPage.css';

const SearchPage = ({darkMode}) => {
    const [loading, setLoading ] = useState(false);
    const [ startIndex, setStartIndex ] = useState(0)
    const [{term}, dispatch ] = useStateValue();
    const { data } = useGoogleSearch(term, startIndex)

    useEffect(() => { 
        data?.items !== undefined ? setLoading(false) : setLoading(true)
    }, [data])

    return (
        <div className={`search-page ${darkMode ? 'dark-light' : 'light-mode'}`}>
            <div className="search-page-header">
                <div className="search-page-logo-container">
                    <Link  to="/">
                        <img className="search-page-logo" src={Logo} alt="/"/>
                    </Link>
                </div>

                <div className="search-page-header-body">
                    <Search hideButton term={term}/>
                </div>
            </div>
            <div className="search-page-body">
                <div className="latest-news">
                    <NewsAPI query={term} />
                </div> 
                <div className="search-results">
                {
                    !loading ? (
                        <div className="search-page-results">
                            <h3>Your search results</h3>
                            <hr></hr>
                            <p className="search-page-resultCount">
                                About { data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}) for { term }.
                            </p>
                            {
                                data?.items.map((item, index) => (
                                    <div className="search-page-result search-pageResult-shadow" key={index}>

                                        <div className="image-container">
                                            <a href={item.link} className="result-site">
                                                {  
                                                    item.pagemap?.cse_image?.length > 0 && 
                                                    item.pagemap?.cse_image[0]?.src && 
                                                    (
                                                        <img className="search-page-result-image"src={
                                                            item.pagemap?.cse_image[0]?.src
                                                        } alt=""/>
                                                    )
                                                }
                                                <span>{ item.displayLink}</span>
                                            </a>

                                            <a href={item.link} className="search-page-result-title">
                                                <h2>{item.title}</h2>
                                            </a>
                                        </div>
                                        <div className="text-container">
                                            <a href={item.link} className="search-page-result-title">
                                                <h2>{item.title}</h2>
                                            </a>
                                            <p className="search-page-result-snippet">{item.snippet}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="pagination-section">
                                <div 
                                    onClick={() => setStartIndex(startIndex - 10)} 
                                    className="paginate-btn"
                                    > Previous
                                </div>
                                <div 
                                    onClick={() => setStartIndex(startIndex + 10)} 
                                    className="paginate-btn"
                                    >Next
                                </div>
                            </div>
                        </div>
                    ) 
                    : 
                    <div>
                      
                    </div>
                }
                </div> 
                
            </div>
        </div>
    )
}

export default SearchPage;




