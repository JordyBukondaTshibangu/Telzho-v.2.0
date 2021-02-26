import React, { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = "2add8e93f8fe55f09";

const useGoogleSearch = (term) => {

   const [data, setData] = useState(null);

   useEffect(() => {
    const fetchDate = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(res => res.json())
        .then(result => {
            setData(result)
        })
    }

    fetchDate();
   },[term])

   return { data }
}

export default useGoogleSearch
