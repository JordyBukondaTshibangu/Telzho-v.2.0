import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SearchPage.css';
import Logo from '../../assets/logo.jpeg'
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../customHook/useGoogleSearch';
import Search from '../../components/search/Search';



const SearchPage = props => {
    const [{term}, dispatch ] = useStateValue();
    const { data } = useGoogleSearch(term)

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link  to="/">
                    <img className="searchPage__logo" src={Logo} alt="/"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButton />
                    <div className="searchPage__options">
                    </div>
                </div>
            </div>
            {
                true && (
                    <div className="searchPage__results">
                        <p className="searchPage__ResultCount">
                            About { data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}) for { term }
                        </p>
                        {
                            data?.items.map((item, index) => (
                                <div className="searchPage__result" key={index}>
                                    <a href={item.link}>
                                        {  item.pagemap?.cse_image?.length > 0 && 
                                            item.pagemap?.cse_image[0]?.src && (
                                                <img className="searchPage__resultImage"src={
                                                    item.pagemap?.cse_image[0]?.src
                                                } alt=""/>
                                            )
                                        }
                                        { item.displayLink}
                                    </a>
                                    <a href={item.link} className="searchPage__resultTitle">
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className="searchPage__resultSnippet">
                                        {item.snippet}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage;