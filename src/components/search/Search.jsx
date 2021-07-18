import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { FaSearch } from "react-icons/fa"
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import './Search.css';


const Search = props => {
    
    const term = props?.term
    
    const history = useHistory()
    const [ input, setInput ] = useState(term);
    const [ {}, dispatch ] = useStateValue();
    const [ showCancel, setCancel ] = useState( false );

    const search = event => {
        event.preventDefault();
        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })
        history.push(`/search?term=${input}`)
    }

    return (
        <form className="search" onSubmit={search}>
            <div className="search-input">
                <FaSearch onClick={search} className="search-inputIcon" />
                <input 
                    className="search-text" 
                    type="text" value={input} 
                    onChange={ e => {
                        setInput(e.target.value)
                        !input ? setCancel(false) : setCancel(true)
                    }}
                />
                {
                    showCancel 
                    && 
                    <CloseIcon 
                        className="search-cancel" 
                        onClick={() => {
                            !input ? setCancel(false) : setCancel(true)
                            setInput("")
                            setCancel(false)
                        }}  
                    />
                }
            </div>
        </form>
    )
}

export default Search;