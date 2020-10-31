import {useState,useCallback,useEffect} from 'react';

export const Search = (index) =>{
  var   querrySearch =[false,false,false,false,false]
    useEffect(() => {
        const a = querrySearch;
        a[index] = !a[index]
        querrySearch = a;
        console.log(querrySearch)
    },[index])

}