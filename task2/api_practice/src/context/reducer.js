import React from 'react'
import { FETCH_USER_SUCCESS, SET_LOADING,FETCH_USERS_ERROR,SET_SEARCH_TERM } from '../js-folder/type';

export default function Reducer(state,action) {
  switch(action.type){
    case SET_LOADING:
        return{
           ...state,loading : true
        };
        case FETCH_USER_SUCCESS:
    return{
       ...state, users:action.payload, loading:false
    };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
      
      default:
      return state;
  };
    
}
