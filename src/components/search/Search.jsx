import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
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
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={ e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {
                !hideButton ? 
                (
                    <div className="search__buttons">
                        <Button variant="outlined" type="submit" onClick={search} >Google Search</Button>
                        <Button variant="outlined">I'm feeling Lucky</Button>
                    </div>
                ) : 
                (
                    <div className="search__buttons">
                        <Button className="search_buttonHidden" variant="outlined" type="submit" onClick={search} >Google Search</Button>
                        <Button className="search_buttonHidden" variant="outlined">I'm feeling Lucky</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search;