import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = "2add8e93f8fe55f09";

const useGoogleSearch = (term, startIndex) => {

   const [data, setData] = useState(null);
   const startIndexPagination = startIndex


   useEffect(() => {
    const fetchDate = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndexPagination}`
        )
        .then(res => res.json())
        .then(result => {
            setData(result)
        })
    }

    fetchDate();
   },[term])

   console.log("Pagination", startIndexPagination)

   console.log("These are the data", data)

   return { data }
}

export default useGoogleSearch
