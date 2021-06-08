import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router-dom';
import './Search.css';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


const Search = ({hideButton = false }) => {
    

    const history = useHistory()
    const [ input, setInput ] = useState("");
    const [ {}, dispatch ] = useStateValue();

    const search = event => {
        event.preventDefault();
        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })

        history.push('/search')
    }

    return (
        <form className="search" onSubmit={search}>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={ e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
        </form>
    )
}

export default Search;