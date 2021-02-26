import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';

const Search = props =>{
    
    const [ input, setInput ] = useState("");

    const search = event => {
        event.preventDefault();
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={ e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button variant="outlined" type="submit" onClick={search} >Google Search</Button>
                <Button variant="outlined">I'm feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search;