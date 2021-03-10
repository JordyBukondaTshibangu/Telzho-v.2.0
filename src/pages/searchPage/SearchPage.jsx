import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import Logo from '../../assets/logo.jpeg'
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../customHook/useGoogleSearch';
import Search from '../../components/search/Search';
import News from '../../container/recentNews/RecentNews'



const SearchPage = props => {
    const [{term}, dispatch ] = useStateValue();
    const { data } = useGoogleSearch(term)

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div>
                    <Link  to="/">
                        <img className="searchPage__logo" src={Logo} alt="/"/>
                    </Link>
                </div>
                <div className="searchPage__headerBody">
                    <Search hideButton />
                </div>
            </div>
            <div className="searchPage__body">
                <div className="latest-news">
                    <h3 className="latest-news-heading">Latest news</h3>
                    <hr></hr>
                    <News />
                </div> 
                <div className="search-results">
                {
                    true && (
                        <div className="searchPage__results">
                            <h3>Your search results</h3>
                            <hr></hr>
                            <p className="searchPage__resultCount">
                                About { data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}) for { term }.
                            </p>
                            {
                                data?.items.map((item, index) => (
                                    <div className="searchPage__result" key={index}>
                                        <div className="image-container">
                                            <a href={item.link} className="result-site">
                                                {  
                                                    item.pagemap?.cse_image?.length > 0 && 
                                                    item.pagemap?.cse_image[0]?.src 
                                                    && 
                                                    (
                                                        <img className="searchPage__resultImage"src={
                                                            item.pagemap?.cse_image[0]?.src
                                                        } alt=""/>
                                                    )
                                                }
                                                <span>{ item.displayLink}</span>
                                            </a>
                                        </div>
                                        <div className="text-container">
                                            <a href={item.link} className="searchPage__resultTitle">
                                                <h2>{item.title}</h2>
                                            </a>
                                            <p className="searchPage__resultSnippet">
                                                {item.snippet}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                </div> 
            </div>
        </div>
    )
}

export default SearchPage;




